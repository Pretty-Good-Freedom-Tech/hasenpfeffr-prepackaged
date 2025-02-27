#!/bin/bash

# This takes several hours and loads all kind 3 events into strfry from scratch
# the --recent option on the createAllKind3EventsStripped.sh only transfers the most recent events

sudo ./createAllKind3EventsStripped.sh
sudo ./kind3EventsToJson.sh
sudo ./loadJsonIntoNeo4j.sh
sudo ./updateNostrUserKind3Data.sh
