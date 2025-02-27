#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

sudo cypher-shell -u neo4j -p neo4jneo4j -a bolt://localhost:7687 -f apocCypherCommand2 > /dev/null
