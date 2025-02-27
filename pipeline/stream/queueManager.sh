#!/bin/bash

processOldestPubkeyInQueue() {
  echo "------------------------------------------------------------------------------------------------------- processOldestPubkeyInQueue executed!!!!!!!"
  sudo /home/ubuntu/strfry/brainstorm/actions/nodes/nostrUsers/nostrUserUpdateFollowsV2.sh
  echo "======================================================================================================= processOldestPubkeyInQueue completed!!!!!! calling again"
  numPubkeysAwaiting=$(ls -1 /home/ubuntu/strfry/pipeline/queueByPubkey/ | wc -l)
  if [[ "$numPubkeysAwaiting" -gt 0  ]]; then
    echo "there are $numPubkeysAwaiting pubkeys in the queue waiting for their follows to be updated"
    processOldestPubkeyInQueue
  else
    echo "no pubkeys in queue; sleep 60 seconds and check again"
    sleep 60s
    processOldestPubkeyInQueue
  fi
}

function func1() {
   processOldestPubkeyInQueue
}

# first, start the function that listens to the relay and writes to the queue
# func1 &
# may manage func1 separately

# second, start the function that iterates though the queue, oldest pubkey first, and processes updates
# processOldestPubkeyInQueue &

func1 &

wait
