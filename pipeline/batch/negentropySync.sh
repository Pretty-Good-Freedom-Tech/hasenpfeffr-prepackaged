#!/bin/bash

# adapted from https://github.com/hoytech/strfry/blob/master/README.md#sync

# use service to set up cron job (infrequently - maybe once a day)

sudo systemctl stop addToQueue.service

sudo strfry sync wss://relay.primal.net --filter '{"kinds":[3,1984,10000]}'

sudo systemctl start addToQueue.service
