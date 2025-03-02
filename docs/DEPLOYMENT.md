Deployment Instructions
=====

This is experimental, not yet optimized for efficiency and currently requires a relatively expensive instance. For now, I recommend you get it started but plan on destroying the instance pretty quickly so you don't incur high fees. Optimizations will be forthcoming!

Follow these steps (see instructions in this docs folder):
- STEP 0: setup AWS EC2 Ubuntu server
- STEP 1: install and configure Neo4j
- STEP 2: install and configure strfry
- STEP 3: install and configure hasenpfeffr: ETL pipeline and Webs of Trust calculation
- STEP 4: startup all background processes

The ETL pipeline of data from strfry to neo4j is comprised of three modules:
- streaming module (running) - updates neo4j in real time
- batch (mostly working) - load large amounts of data in blocks, e.g. at startup or after an extended period of being offline
- reconciliation (under heavy construction) - find discrepancies and fix them, which could be due to the streaming pipeline being overwhelmed, a period of being offline, or other errors

When you're finished, you'll have a personal WoT relay which does the following:
- monitors follows, mutes, and reports
- calculates Webs of Trust scores: hops, personalized PageRank, and personalized GrapeRank

# TO DO

THIS IS STILL A WORK IN PROGRESS

Not yet implemented:
- calculate GrapeRank
- export scores as NIP-85 (Vitor's NIP)
- open API to expose WoT DVM (franzap's NIP)
