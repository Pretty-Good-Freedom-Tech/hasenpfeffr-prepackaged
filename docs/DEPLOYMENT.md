Deployment Instructions
=====

This is experimental, not yet optimized for efficiency and currently requires a relatively expensive instance. For now, I recommend you get it started but plan on destroying the instance pretty quickly so you don't incur high fees. Optimizations will be forthcoming!

set up AWS EC2 Ubuntu server
install Neo4j, neo4j graph data science, and neo4j APOC
install strfry
pipeline of data from strfry to neo4j, which comes in modules:
- streaming module (running) - updates neo4j in real time
- batch (mostly working) - load large amounts of data in blocks, e.g. at startup or after an extended period of being offline
- reconciliation (under heavy construction) - find discrepancies and fix them, which could be due to the streaming pipeline being overwhelmed, a period of being offline, or other errors

## server

Set up AWS EC2 instance with the following options:
- Ubuntu Server 24.04 LTS (the first choice)
- 64 bit (x86)
- Instance type: r7i.xlarge
- Network settings: allow SSH, HTTP, and HTTPS

### associate elastic IP address

On AWS EC2 control panel, on the column on the left, look under Network & Security and go to Elastic IPs. Allocate one and associated it with your instance. Take that IPv4 address and use it to point your DNS of choice, e.g. `relay.myCoolSite.com`, to your instance. At later step, we will add this URL to `hasenpfeffr.conf` file.

SSH into your instance and proceed with the steps below. 

### ports

Configure the EC2 security group to allow incoming traffic on ports 7474 and 7687.

## download hasenpfeffr

This has a few files we will need during the following steps.

```
git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
```
