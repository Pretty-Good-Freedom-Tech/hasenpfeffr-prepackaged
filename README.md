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

### associate elastic IP address

on left: Network & Security: Elastic IPs

Point DNS to public IPv4 address. At later step, we will add this URL, eg `relay.mySite.com`, to `hasenpfeffr.conf`

## download hasenpfeffr

This has a few files we will need during the following steps.

```
git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
```

## neo4j

Install neo4j. (These instructions are adapted from [these instructions](https://neo4j.com/docs/operations-manual/current/installation/linux/debian/#debian-installation)).

We will be installing neo4j community edition, neo4j graph data science, and APOC. If neo4j won't start and you don't know why, it could be due to incompatible versions of these 3 libraries, especially if your habit is to install latest stable version. I have specified versions in the steps below which have worked together for me.

At the AWS console, go to your new instance, go to Security, click on the security group, go to Edit Inbound Rules, and add two new rules: both of type Custom TCP, Port range: 7474 for the first and 7687 for the second; for both, select 0.0.0.0/0 Source will change automatically to Anywhere-IPv4 (or you can be more selective for higher security)

SSH into instance.

```
sudo apt update && sudo apt install -y wget
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable 5' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt update
apt list -a neo4j // to see what versions are available to install
sudo apt-get install neo4j=1:5.26.3 // or whatever is the latest stable version
```

```
sudo systemctl start neo4j
sudo systemctl status neo4j
sudo systemctl enable neo4j
```

Changes to neo4j.conf
```
sudo cp /etc/neo4j/neo4j.conf /etc/neo4j/neo4j.conf.backup
sudo nano /etc/neo4j/neo4j.conf
```

Then uncomment out the following lines (and add the 0.0.0.0 if needed)
```
server.default_listen_address=0.0.0.0
server.bolt.listen_address=0.0.0.0:7687
server.http.listen_address=0.0.0.0:7474
```

```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

Then configure the EC2 security group next to allow incoming traffic on ports 7474 and 7687.

You should now be able to access neo4j on the browser using port 7474: `http://x.x.x.x:7474` Log on with username: neo4j and password: neo4j. It should prompt you to change the password.

### install neo4j graph data science

```
cd /var/lib/neo4j/plugins/
sudo wget https://github.com/neo4j/graph-data-science/releases/download/2.13.2/neo4j-graph-data-science-2.13.2.jar
ls -la // to verify presence of neo4j-graph-data-science-2.13.2.jar
sudo chown neo4j:neo4j neo4j-graph-data-science-2.13.2.jar
```

Then go back into `sudo nano /etc/neo4j/neo4j.conf` and make the following changes:


```
dbms.security.procedures.unrestricted=gds.*
```

Then restart neo4j: 
```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

To test whether gds has been properly installed, refresh the neo4j browser (accessed using port 7474) and enter this in the command line on the top:
`RETURN gds.version()`

### install apoc

```
cd /var/lib/neo4j/plugins
sudo wget https://github.com/neo4j/apoc/releases/download/5.26.2/apoc-5.26.2-core.jar
ls -la # make sure can now see file apoc-5.26.2-core.jar
sudo chown neo4j:neo4j apoc-5.26.2-core.jar # (not sure if need to do this)
sudo chmod 755 apoc-5.26.2-core.jar # (not sure if need to do this)

sudo mv ~/hasenpfeffr/setup/apoc.conf /etc/neo4j/apoc.conf
```

Once again update conf: `sudo nano /etc/neo4j/neo4j.conf`

and uncomment out and edit the following line: 

```
dbms.security.procedures.allowlist=apoc.coll.*,apoc.load.*,apoc.periodic.*,apoc.export.json.query,gds.*
```

Then restart neo4j: 
```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

To test whether APOC has been properly installed, refresh the neo4j browser (accessed using port 7474). This is supposed to work but doesn't for me: `RETURN apoc.version() AS output;`

However, this does work for me:
```
WITH 'https://raw.githubusercontent.com/neo4j-contrib/neo4j-apoc-procedures/4.0/src/test/resources/person.json' AS url

CALL apoc.load.json(url) YIELD value as person

MERGE (p:Person {name:person.name})
   ON CREATE SET p.age = person.age, p.children = size(person.children);
```

To clear the database, enter the command: `MATCH (n) DETACH DELETE n`

If it installed one node with label: Person, then APOC is working.

### update memory

If running into memory problems, go to conf: `sudo nano /etc/neo4j/neo4j.conf` and edit the followig lines:

```
// I have not yet determined the minimum values for these:
server.memory.heap.initial_size=4g
server.memory.heap.max_size=4g
```

## strfry

Install strfry following [these instructions](https://github.com/hoytech/strfry/blob/master/docs/DEPLOYMENT.md).

* change `sudo ufw default deny incoming` to `sudo ufw default allow incoming`; otherwise the command `sudo ufw enable` disrupts neo4j access by port 7474.

* keep user: ubuntu rather than make new user strfry
 
## hasenpfeffr

Set up the pipeline from strfry to neo4j. scripts being written.

```
sudo apt update

cd ~/hasenpfeffr

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

