#!/bin/bash

# Hasenpfeffr Neo4j Constraints and Indices Setup
# This script sets up the necessary constraints and indices for the Hasenpfeffr project

# Get the Neo4j password from the Hasenpfeffr configuration
if [ -f "/etc/hasenpfeffr.conf" ]; then
  source /etc/hasenpfeffr.conf
  NEO4J_PASSWORD=${NEO4J_PASSWORD:-neo4j}
else
  NEO4J_PASSWORD="neo4j"
  echo "Warning: /etc/hasenpfeffr.conf not found, using default Neo4j password"
fi

# Run Cypher commands to set up constraints and indices
neo4j-admin dbms run --user=neo4j --password="$NEO4J_PASSWORD" --database=neo4j "
CREATE CONSTRAINT IF NOT EXISTS FOR (u:NostrUser) REQUIRE u.pubkey IS UNIQUE;
CREATE CONSTRAINT IF NOT EXISTS FOR (e:NostrEvent) REQUIRE e.id IS UNIQUE;
CREATE INDEX IF NOT EXISTS FOR (e:NostrEvent) ON (e.pubkey);
CREATE INDEX IF NOT EXISTS FOR (e:NostrEvent) ON (e.kind);
"

echo "Neo4j constraints and indices have been set up successfully."
echo "You can verify by running 'SHOW CONSTRAINTS;' and 'SHOW INDEXES;' in the Neo4j Browser."
