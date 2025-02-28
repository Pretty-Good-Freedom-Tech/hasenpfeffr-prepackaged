#!/bin/bash

# This takes several hours and loads all kind 3 events into strfry from scratch
# the --recent option on the createAllKind3EventsStripped.sh only transfers the most recent events

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

sudo ./strfryToKind3Events.sh "$1" "$2"
sudo ./kind3EventsToFollows.sh

# add FOLLOWS relationships from followsToAddToNeo4j.json
sudo cypher-shell -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -a "$NEO4J_URI" -f apocCypherCommand1 > /dev/null

# update NostrUser kind3EventId and kind3CreatedAt properties by iterating through allKind3EventsStripped.json
sudo cypher-shell -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -a "$NEO4J_URI" -f apocCypherCommand2 > /dev/null

# clean up

sudo rm /var/lib/neo4j/import/followsToAddToNeo4j.json
sudo rm /var/lib/neo4j/import/allKind3EventsStripped.json
