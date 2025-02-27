Hasenpfeffr 
=====
a Personalized Grapevine Web of Trust Nostr Relay
-----

This repo describes how to build a Personalized Grapevine Web of Trust Nostr Relay. It will pair the most performant nostr relay, strfry, with neo4j, the most mature FOSS graph database. The graph database will represent users with node type: NostrUser and will maintain follow, mute, and report relationships. This graph provides the raw data to calculate personalized WoT scores:
- personalized PageRank scores, calculated using the neo4j graph data science library
- hops: the minimum number of FOLLOW relationships required to travel from the reference pubkey to any given pubkey; calculated using a few simple cypher commands
- personalized GrapeRank scores, calculated using customized code

The above scores will be used to manage strfry filters and plugins.

"Personalized" means that the WoT scores are not "global" scores. The relay owner's pubkey plays a privileged role for all personalized WoT score calculations. 

This instruction set is a work in progress.

## PageRank versus GrapeRank

PageRank and GrapeRank are both centrality algorithms. Application of centrality algorithms is the next step in the evolution of nostr web of trust relays. The power of PageRank is demonstrated by the fact that it is the algorithm that launched Google and revolutionalized internet keyword search. Many nostr users and developers are probably too young to remember the amount of spam that polluted keyword search prior to the launch of Google in 1998.

Nevertheless, PageRank comes with a series of limitations. Addressing those limitations requires several adjustments to be made to PageRank, one of which is to make the equations nonlinear. Nonlinearity is one of the defining characteristics of GrapeRank that sets it apart from PageRank. Nonlinearity makes GrapeRank more computationally expensive to calculate. However, for many purposes, the benefits will far outweigh the extra computational cost.

|             | PageRank | GrapeRank |
| :---------------- | :------: | :----: |
| equations        |   $${\color{green}linear}$$   | $${\color{yellow}nonlinear}$$ |
| contextual         |   $${\color{red}NO}$$   | $${\color{green}YES}$$ |
| suitability as weights    |  $${\color{red}NO}$$   | $${\color{green}YES}$$ |
| raw data |  $${\color{red}VERY LIMITED}$$    | $${\color{green}ANYTHING}$$ |

We envision Personalized WoT Relays to progress through several stages:

|             | method to determine WoT | examples |
| :---------------- | :------: | :----: |
| first generation        |   follows of follows | (bitvora, link to other examples) |
| second generation         |   PageRank  | *in progress* |
| third generation  |  GrapeRank  | *in progress* |

# Instructions

## server

Set up AWS EC2 ubuntu instance.

## neo4j

Install neo4j following [these instructions](https://neo4j.com/docs/operations-manual/current/installation/linux/debian/#debian-installation).

## strfry

Install strfry following [these instructions](https://github.com/hoytech/strfry/blob/master/docs/DEPLOYMENT.md).

* change `sudo ufw default deny incoming` to `sudo ufw default allow incoming`; otherwise the command `sudo ufw enable` disrupts neo4j access by port 7474.

## hasenpfeffr

Set up the pipeline from strfry to neo4j. scripts being written.

also:

Update strfry filters and plugins. scripts being written.

## grapevine

calculate personalized web of trust scores. scripts being written.

## brainstorm

Organize the graph database into a knowledge graph. scripts being written. (Initial versions of this product may not need this yet.)

