#!/bin/bash

# for the given pubkey, update all FOLLOW connections originating from that NostrUser node
# Based upon the most recent kind 3 NostrEvents from that pubkey

# Set Neo4j connection details
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="neo4jneo4j"

start_time=$(date +"%s")
echo "start_time: $start_time"

elapsedTime() {
  current_time=$(date +"%s") # current time
  elapsed=$((current_time - start_time))
  echo "elapsed time: $elapsed"
}

# pk_follower="e5272de914bd301755c439b88e6959a43c9d2664831f093c51e9c799a16a102f"

path_to_queue="/home/ubuntu/strfry/pipeline/queueByPubkey/" # need to put this in a conf file and source it

pk_next_full_path=$(find "$path_to_queue" -type f -print0 | xargs -0 stat -c "%Y %n" | sort -n | head -n 1 | cut -d " " -f 2-)

num_chars_in_path_to_queue=$(echo -n "$path_to_queue" | wc -c)

pk_follower="${pk_next_full_path:$num_chars_in_path_to_queue}"
echo "pk_follower: $pk_follower"

# get current information from pubkey

CYPHER0="MATCH (u:NostrUser {pubkey:'$pk_follower'}) RETURN u"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER0"

echo "finished retrieving info about pk_follower from neo4j"

elapsedTime

# get current kind 3 event from strfry

sudo strfry scan "{ \"kinds\": [3], \"authors\": [\"$pk_follower\"]}" > kind3Events

read -r kind3Event < kind3Events

EVENT_ID=$(echo $kind3Event | jq '.id' | tr -d '"')
PUBKEY=$(echo $kind3Event | jq '.pubkey' | tr -d '"')
CREATED_AT=$(echo $kind3Event | jq '.created_at' | tr -d '"')
TAGS=$(echo $kind3Event | jq '.tags' | jq -c .)

echo "kind 3 event id: $EVENT_ID"
echo "kind 3 event pubkey: $PUBKEY"
echo "kind 3 event created_at: $CREATED_AT"

elapsedTime

> newFollowListV2.json

for item in $(echo $TAGS | jq -c '.[]'); do
    tag=$(echo $item | jq '.[0]' | tr -d '"')
    # echo "item: $item"
    if [ "$tag" == "p" ]; then
        pk_followee=$(echo $item | jq '.[1]' | tr -d '"')
        echo "{ pk_follower: \"$pk_follower\", pk_followee: \"$pk_followee\" }" >> newFollowListV2.json
    fi
done

sudo mv newFollowListV2.json /var/lib/neo4j/import/newFollowListV2.json

sudo chown ubuntu:ubuntu /var/lib/neo4j/import/newFollowListV2.json
echo "finished making newFollowListV2.json"

elapsedTime

CYPHER1="MATCH (u1:NostrUser {pubkey:'$pk_follower'})-[r:FOLLOWS]->(u2:NostrUser) DELETE r"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER1"

echo "finished deleting all previous follows"

elapsedTime

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -f /home/ubuntu/strfry/brainstorm/actions/nodes/nostrUsers/apocCypherCommandV2

echo "finished adding all new follows"

elapsedTime

CYPHER2="MATCH (u:NostrUser {pubkey:'$pk_follower'}) SET u.kind3EventId='$EVENT_ID', u.kind3CreatedAt=$CREATED_AT "

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD"  "$CYPHER2"

echo "finished updating u.kind3EventId and u.kind3CreatedAt"

elapsedTime

# OPTIONAL: get followers, kind3EventId and kind3CreatedAt from neo4j

# delete all followers from neo4j

# add all new followers to neo4j

# clean up

sudo rm "$pk_next_full_path"
sudo rm /var/lib/neo4j/import/newFollowListV2.json
