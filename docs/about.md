Hasenpfeffr 
=====
a Personalized Grapevine Web of Trust Nostr Relay
-----

WORK IN PROGRESS

A relay that calculates your personalized Webs of Trust using advanced methods, uses them to control the content in your relay, and makes scores available to clients using Vitor's NIP-85 (exported as nostr kind 30382 events) and franzap's WoT DVM (API).

This repo describes how to build a Personalized Grapevine Web of Trust Nostr Relay. It will pair the most performant nostr relay, strfry, with neo4j, the most mature FOSS graph database. The graph database will represent users with node type: NostrUser and will maintain follow, mute, and report relationships. This graph provides the raw data to calculate personalized WoT scores:
- personalized PageRank scores, calculated using the neo4j graph data science library
- hops: the minimum number of FOLLOW relationships required to travel from the reference pubkey to any given pubkey; calculated using a few simple cypher commands
- personalized GrapeRank scores, calculated using customized code

The above scores will be used to manage strfry filters and plugins.

"Personalized" means that the WoT scores are not "global" scores. The relay owner's pubkey plays a privileged role for all personalized WoT score calculations. 

Deployment instructions are under construction in the docs folder.
