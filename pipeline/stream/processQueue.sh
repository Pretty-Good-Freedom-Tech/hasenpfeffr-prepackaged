#!/bin/bash

processOldestPubkeyInQueue() {
  sudo /home/ubuntu/hasenpfeffr/pipeline/stream/updateSingleNostrUser.sh
  numPubkeysAwaiting=$(ls -1 /home/ubuntu/hasenpfeffr/pipeline/stream/queue/ | wc -l)
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

func1 &

wait
