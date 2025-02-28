#!/bin/bash

# This takes several hours and loads all kind 3 events into strfry from scratch
# the --recent option on the createAllKind3EventsStripped.sh only transfers the most recent events

sudo ./createAllKind3EventsStripped.sh "$1" "$2"
sudo ./kind3EventsToJson.sh
sudo ./loadJsonIntoNeo4j.sh
sudo ./updateNostrUserKind3Data.sh

# clean up

sudo rm /var/lib/neo4j/import/allKind3EventsStripped.json
sudo rm /var/lib/neo4j/import/eventsToTransferForInitialization.json
