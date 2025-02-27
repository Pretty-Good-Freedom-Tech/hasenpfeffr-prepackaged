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

downloads into jar

```
# updates to neo4j.conf
sudo nano /etc/neo4j/neo4j.conf

```

## strfry

Install strfry following [these instructions](https://github.com/hoytech/strfry/blob/master/docs/DEPLOYMENT.md).

* change `sudo ufw default deny incoming` to `sudo ufw default allow incoming`; otherwise the command `sudo ufw enable` disrupts neo4j access by port 7474.

* keep user: ubuntu rather than make new user strfry
 
## hasenpfeffr

Set up the pipeline from strfry to neo4j. scripts being written.

```
sudo apt update

# downloadhasenpfeffr
git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
cd hasenpfeffr

# activate the strfry plugin

# update strfry.conf

# set up strfry router

# negentropy to sync with relay.primal.net

# add neo4j constraints and indices

# batch load strfry into neo4j

sudo ~/hasenpfeffr/pipeline/batch/load.sh

# set up live streaming into neo4j

## systemctl: addToQueue, which listens to relay and adds pubkeys to queue

sudo mv ~/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
sudo systemctl enable addToQueue.service
sudo systemctl start addToQueue
sudo systemctl status addToQueue

cd ~/hasenpfeffr/pipeline/stream/queue
ls -Rltr ; ls -1 | wc -l
(Check to see that pubkeys are being added to the queue)

## systemctl: processQueue, which listens to queue and updates pubkey one at a time (not working yet)

sudo mv ~/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service
sudo systemctl start processQueue
sudo systemctl status processQueue

cd ~/hasenpfeffr/pipeline/stream/queue
ls -Rltr ; ls -1 | wc -l
(Check to see that pubkeys are disappearing from the queue)

# batch load strfry into neo4j for the past 24 hours (indicate time in seconds)

sudo ~/hasenpfeffr/pipeline/batch/load.sh --recent 86400

```

also:

Update strfry filters and plugins. scripts being written.

## grapevine

calculate personalized web of trust scores. scripts being written.

## brainstorm

Organize the graph database into a knowledge graph. scripts being written. (Initial versions of this product may not need this yet.)

