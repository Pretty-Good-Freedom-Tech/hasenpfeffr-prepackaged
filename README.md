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

This is experimental, not yet optimized for efficiency and currently requires a relatively expensive instance. For now, I recommend you get it started but plan on destroying the instance pretty quickly so you don't incur high fees. Optimizations are definitely 

## server

Set up AWS EC2 instance with the following options:
- Ubuntu Server 24.04 LTS (the first choice)
- 64 bit (x86)
- Instance type: r7i.xlarge
- Network settings: allow SSH, HTTP, and HTTPS

## neo4j

Install neo4j. These instructions are adapted from [these instructions](https://neo4j.com/docs/operations-manual/current/installation/linux/debian/#debian-installation)). If using an AI agent, you can tell the AI to read that page and follow those instructions - Windsong did it for me on the first try.

At the AWS console, go to your new instance, go to Security, click on the security group, go to Edit Inbound Rules, and add two new rules: both of type Custom TCP, Port range: 7474 for the first and 7687 for the second; for both, select 0.0.0.0/0 Source will change automatically to Anywhere-IPv4 (or you can be more selective for higher security)

SSH into instance.

```
sudo apt-get update
sudo add-apt-repository -y ppa:openjdk-r/ppa
sudo apt-get update
sudo apt install java-common
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/neotechnology.gpg
echo 'deb [signed-by=/etc/apt/keyrings/neotechnology.gpg] https://debian.neo4j.com stable latest' | sudo tee -a /etc/apt/sources.list.d/neo4j.list
sudo apt-get update
apt list -a neo4j // to verify neo4j has been installed
java -version // It will say Command 'java' not found ...

sudo apt-get install neo4j // or to specify version: sudo apt-get install neo4j=1:5.26.1)

java -version // should see something like: openjdk version "17.0.13" 2024-10-15 ... (apparently installing neo4j also installs java)
```

### install neo4j graph data science

```
cd /var/lib/neo4j/plugins/
sudo wget https://github.com/neo4j/graph-data-science/releases/download/2.13.2/neo4j-graph-data-science-2.13.2.jar
ls -la // to verify presence of neo4j-graph-data-science-2.13.2.jar
```

Make several updates to neo4j.conf; `sudo nano /etc/neo4j/neo4j.conf` and make the following changes. Most involve uncommenting and then editing preexisting lines.

```
initial.dbms.default_database=hasenpfeffr

# Note: 0.0.0.0:xxxx, not :xxxx which may be the default
server.bolt.listen_address=0.0.0.0:7687
server.http.listen_address=0.0.0.0:7474
# optional but you'll need to add 7473 to Inbound rules:
server.https.listen_address=0.0.0.0:7473

// I have not yet determined the minimum values for these:
server.memory.heap.initial_size=4g
server.memory.heap.max_size=4g

dbms.security.procedures.unrestricted=gds.*
dbms.security.procedures.allowlist=apoc.coll.*,apoc.load.*,apoc.periodic.*,apoc.export.json.query,gds.*
```

```
sudo apt update
sudo apt upgrade

sudo systemctl enable neo4j`
sudo systemctl start neo4j
sudo systemctl status neo4j
```
`sudo service neo4j status` or `neo4j status` You should see it is running

### install apoc

```
cd /var/lib/neo4j/plugins
sudo wget https://github.com/neo4j/apoc/releases/download/5.26.2/apoc-5.26.2-core.jar
# can now see file apoc-5.26.2-core.jar
sudo chown neo4j:neo4j apoc-5.26.2-core.jar (not sure if need to do this)
sudo chmod 755 apoc-5.26.2-core.jar
sudo nano /etc/neo4j/neo4j.conf
# change comments to define allowlist: `dbms.security.procedures.allowlist=apoc.coll.*,apoc.load.*,gds.*`
sudo mv ~/hasenpfeffr/setup/apoc.conf /etc/neo4j/apoc.conf
```

Then `sudo neo4j restart` or `sudo service neo4j restart`

test in browser (`http://x.x.x.x:7474`; or once strfry is implemented, `http://relay.mySite.com:7474`) with 

```
WITH 'https://raw.githubusercontent.com/neo4j-contrib/neo4j-apoc-procedures/4.0/src/test/resources/person.json' AS url

CALL apoc.load.json(url) YIELD value as person

MERGE (p:Person {name:person.name})
   ON CREATE SET p.age = person.age, p.children = size(person.children);
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

# setup hasenpfeffr.conf

sudo mv ~/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf
(edit hasenpfeffr.conf to update neo4j password and primary user pubkey)

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

