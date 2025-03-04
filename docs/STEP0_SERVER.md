Set up AWS EC2 Ubuntu server
=====

Set up AWS EC2 instance with the following options:
- Ubuntu Server 24.04 LTS (the first choice)
- 64 bit (x86)
- Instance type: r7i.xlarge
- Network settings: allow SSH, HTTP, and HTTPS

### associate elastic IP address

On AWS EC2 control panel, on the column on the left, look under Network & Security and go to Elastic IPs. Allocate one and associated it with your instance. Take that IPv4 address and use it to point your DNS of choice, e.g. `relay.myCoolSite.com`, to your instance. At later step, we will add this URL to `hasenpfeffr.conf` file.

SSH into your instance and proceed with the steps below. 

### ports

Configure the EC2 security group to allow incoming traffic on ports 7474 and 7687. At the AWS console, go to your new instance, go to Security, click on the security group, go to Edit Inbound Rules, and add two new rules: both of type Custom TCP, Port range: 7474 for the first and 7687 for the second; for both, select 0.0.0.0/0 Source will change automatically to Anywhere-IPv4 (or you can be more selective for higher security)

## download hasenpfeffr

This has a few files we will need during the following steps.

These instructions assume you SSH into your instance as ubuntu, and `cd ~` is equivalent to `cd /home/ubuntu`.

```
cd ~
git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
```

Edit hasenpfeffr.conf using `sudo nano /home/ubuntu/hasenpfeffr/setup/hasenpfeffr.conf` (or `sudo nano /etc/hasenpfeffr.conf` if you've already moved it to that location) to update GRAPEVINE_REFERENCE_PUBKEY and HASENPFEFFR_RELAY_URL. Later we will also update the Neo4j password in this file.

Run the basic initialization script which installs dependencies, makes files executable, moves them to proper locations, and enables services.

```
sudo chmnod +x /home/ubuntu/hasenpfeffr/setup/initialize.sh
sudo /home/ubuntu/hasenpfeffr/setup/initialize.sh
```
