#!/bin/bash

# commands to run at startup

# various chmod, chown and mv commands to do at startup

# create log files
sudo mkdir /var/log/hasenpfeffr
sudo touch /var/log/hasenpfeffr/calculateHops.log
sudo touch /var/log/hasenpfeffr/personalizedPageRank.log

# load CALCULATE_HOPS_TIMER and PERSONALIZED_PAGERANK_TIMER into their respective timers
sudo /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo /home/ubuntu/hasenpfeffr/algos/update-personalizedPageRank-timer.sh
