#!/bin/bash

# for the given pubkey, update all FOLLOW connections originating from that NostrUser node
# Based upon the most recent kind 3 NostrEvents from that pubkey

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

path_to_queue="/home/ubuntu/hasenpfeffr/pipeline/stream/queue/"

pk_next_full_path=$(find "$path_to_queue" -type f -print0 | xargs -0 stat -c "%Y %n" | sort -n | head -n 1 | cut -d " " -f 2-)

num_chars_in_path_to_queue=$(echo -n "$path_to_queue" | wc -c)

pk_follower="${pk_next_full_path:$num_chars_in_path_to_queue}"
echo "pk_follower: $pk_follower"

# get current information from pubkey

CYPHER0="MATCH (u:NostrUser {pubkey:'$pk_follower'}) RETURN u"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER0"

# get current kind 3 event from strfry

sudo strfry scan "{ \"kinds\": [3], \"authors\": [\"$pk_follower\"]}" > kind3Events

read -r kind3Event < kind3Events

EVENT_ID=$(echo $kind3Event | jq '.id' | tr -d '"')
PUBKEY=$(echo $kind3Event | jq '.pubkey' | tr -d '"')
CREATED_AT=$(echo $kind3Event | jq '.created_at' | tr -d '"')
TAGS=$(echo $kind3Event | jq '.tags' | jq -c .)

> /home/ubuntu/hasenpfeffr/pipeline/stream/newFollowList.json

for item in $(echo $TAGS | jq -c '.[]'); do
    tag=$(echo $item | jq '.[0]' | tr -d '"')
    if [ "$tag" == "p" ]; then
        pk_followee=$(echo $item | jq '.[1]' | tr -d '"')
        echo "{ pk_follower: \"$pk_follower\", pk_followee: \"$pk_followee\" }" >> /home/ubuntu/hasenpfeffr/pipeline/stream/newFollowList.json
    fi
done

sudo mv /home/ubuntu/hasenpfeffr/pipeline/stream/newFollowList.json /var/lib/neo4j/import/newFollowList.json

sudo chown ubuntu:ubuntu /var/lib/neo4j/import/newFollowList.json

CYPHER1="MATCH (u1:NostrUser {pubkey:'$pk_follower'})-[r:FOLLOWS]->(u2:NostrUser) DELETE r"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER1"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -f /home/ubuntu/hasenpfeffr/pipeline/stream/apocCypherCommand

CYPHER2="MATCH (u:NostrUser {pubkey:'$pk_follower'}) SET u.kind3EventId='$EVENT_ID', u.kind3CreatedAt=$CREATED_AT "

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER2"

# clean up

sudo rm "$pk_next_full_path"
sudo rm /var/lib/neo4j/import/newFollowList.json
