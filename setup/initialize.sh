#!/bin/bash

# commands to run one time at initialization

sudo chmod +x /home/ubuntu/hasenpfeffr/setup/neo4jCommandsAndIndices.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/setup/startup.sh

#############################################
############ create log files ###############

sudo mkdir /var/log/hasenpfeffr
sudo touch /var/log/hasenpfeffr/calculateHops.log
sudo touch /var/log/hasenpfeffr/calculatePersonalizedPageRank.log

#############################################
############### DEPENDENCIES ################

sudo apt update
sudo apt install npm
sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv

sudo apt update
sudo apt upgrade

#############################################
############### STRFRY ROUTER ################

sudo mv /home/ubuntu/hasenpfeffr/services/runRouter.service /etc/systemd/system/runRouter.service

sudo mv /home/ubuntu/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf

#############################################
############### ETL PIPELINE ################

############### streaming pipeline

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/processQueue.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/updateSingleNostrUser.sh

# addToQueue

sudo mv /home/ubuntu/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service

# processQueue

sudo mv /home/ubuntu/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service

############### batch pipeline

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/negentropySync.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/transfer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/strfryToKind3Events.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/kind3EventsToFollows.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/kind3EventsToFollows.js

############### reconciliation pipeline

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/runFullReconciliation.js
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/processReconciliationQueue.js
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/createReconciliationQueue.js

# run reconciliation step

sudo mv /home/ubuntu/hasenpfeffr/services/runFullReconciliation.service /etc/systemd/system/runFullReconciliation.service
sudo mv /home/ubuntu/hasenpfeffr/services/runFullReconciliation.timer /etc/systemd/system/runFullReconciliation.timer

#############################################
################### ALGOS ###################

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculateHops.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/exportWhitelist.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculatePersonalizedPageRank.sh

# calculateHops

sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.service /etc/systemd/system/calculateHops.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.timer /etc/systemd/system/calculateHops.timer

# calculatePersonalizedPageRank

sudo mv /home/ubuntu/hasenpfeffr/services/calculatePersonalizedPageRank.service /etc/systemd/system/calculatePersonalizedPageRank.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculatePersonalizedPageRank.timer /etc/systemd/system/calculatePersonalizedPageRank.timer

#########################################
############### SERVICES ################

# scripts to update timers at startup (fetch variables from hasenpfeffr.conf to determine frequencies)

sudo chmod +x /home/ubuntu/hasenpfeffr/services/update-runFullReconciliation-timer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/services/update-calculateHops-timer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/services/update-calculatePersonalizedPageRank-timer.sh

# enable all services 

sudo systemctl enable runRouter.service
sudo systemctl enable addToQueue.service
sudo systemctl enable processQueue.service
sudo systemctl enable runFullReconciliation.timer
sudo systemctl enable calculateHops.timer
sudo systemctl enable calculatePersonalizedPageRank.timer

sudo systemctl daemon-reload
