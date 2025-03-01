#!/bin/bash

######################################################################
############ scripts that should be rerun at each startup ############


# load CALCULATE_HOPS_TIMER and PERSONALIZED_PAGERANK_TIMER into their respective timers
sudo /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo /home/ubuntu/hasenpfeffr/algos/update-personalizedPageRank-timer.sh

# TODO: create update-reconciliation-timer.sh for reconciliation (first, merge runReconciliaiton and processReconcileQueue together)

######################################################################
############################# SYSTEMCTL ##############################

sudo systemctl daemon-reload

sudo systemctl start runRouter.service
sudo systemctl start addToQueue.service
sudo systemctl start processQueue.service
sudo systemctl start runReconciliation.timer
sudo systemctl start processReconcileQueue.timer
sudo systemctl start calculateHops.timer
sudo systemctl start personalizedPageRank.timer
