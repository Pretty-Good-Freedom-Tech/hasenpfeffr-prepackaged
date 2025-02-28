#!/bin/bash

# This takes several hours and loads all kind 3 events into strfry from scratch
# the --recent option on the createAllKind3EventsStripped.sh only transfers the most recent events

sudo ./strfryToKind3Events.sh "$1" "$2"
sudo ./kind3EventsToFollows.sh
sudo ./followsToNeo4j.sh
sudo ./updateNostrUserKind3Data.sh

# clean up

sudo rm /var/lib/neo4j/import/allKind3EventsStripped.json
sudo rm /var/lib/neo4j/import/followsToAddToNeo4j.json
