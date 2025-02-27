#!/bin/bash

# Set Neo4j connection details
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="neo4jneo4j"

while read -r p;
do
    NEXT_EVENT_ID=$(echo $p | jq '.id' | tr -d '"')

    # need to check to make sure event id id not already in retiredFromQueue.txt
    loadThisEvent="yes"
    while read -r retired;
    do
        if [ "$retired" == "$NEXT_EVENT_ID" ]; then
            loadThisEvent="no"
            echo "ALREADY LOADED: $NEXT_EVENT_ID"
        else
            # do nothing
            echo "not a match"
        fi
    done < retiredFromQueue.txt
    if [ "$loadThisEvent" == "yes" ]; then
        printf "insert into neo4j  NEXT_EVENT_ID: $NEXT_EVENT_ID"

        NEXT_EVENT_PUBKEY=$(echo $p | jq '.pubkey' | tr -d '"')
        NEXT_EVENT_KIND=$(echo $p | jq '.kind' | tr -d '"')
        NEXT_EVENT_CREATED_AT=$(echo $p | jq '.created_at' | tr -d '"')

        # insert pubkey 
        CYPHER_INSERT_PUBKEY="MERGE (u:NostrUser {pubkey: '$NEXT_EVENT_PUBKEY'}) ON CREATE SET u.actions=['initialization'] RETURN u.pubkey"
        sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER_INSERT_PUBKEY"

        # insert event
        CYPHER_INSERT_EVENT="MERGE (e:NostrEvent {event_id: '$NEXT_EVENT_ID'}) ON CREATE SET e.author='$NEXT_EVENT_PUBKEY', e.kind='$NEXT_EVENT_KIND', e.created_at='$NEXT_>
        sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER_INSERT_EVENT"

        # insert edge (optional) (not sure if this code works for all scenarios)
        # CYPHER_INSERT_EDGE="MATCH (u:NostrUser {pubkey: '$NEXT_EVENT_PUBKEY'}) MATCH (e:NostrEvent {event_id: '$NEXT_EVENT_ID'}) MERGE (u)-[r:AUTHOR]->(e) RETURN r"
        # sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER_INSERT_EDGE"

        # add event id to end of retiredFromQueue.txtn
        echo "$NEXT_EVENT_ID" >> /home/ubuntu/strfry/pipeline/retiredFromQueue.txt
    else
        # do nothing
        echo "do nothing"
    fi
done < /home/ubuntu/strfry/pipeline/activeQueue.json
