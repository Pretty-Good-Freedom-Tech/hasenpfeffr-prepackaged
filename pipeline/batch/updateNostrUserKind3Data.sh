#!/bin/bash

# Set Neo4j connection details
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="neo4jneo4j"

sudo cypher-shell -u neo4j -p neo4jneo4j -a bolt://localhost:7687 -f apocCypherCommand2 > /dev/null
