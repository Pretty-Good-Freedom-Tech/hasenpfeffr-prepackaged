Startup
=====

This updates and restarts all systemd services.

```
sudo chmod +x /home/ubuntu/hasenpfeffr/setup/startup.sh
sudo /home/ubuntu/hasenpfeffr/setup/startup.sh
```

## Summary of services that should be running

Check all services with these commands:

```
# runRouter
sudo systemctl status runRouter.service

# pipeline: stream
sudo systemctl status addToQueue.service # ? rename to addToStreamingQueue
sudo systemctl status processQueue.service # ? rename to processStreamingQueue

# pipeline: reconcile
sudo systemctl status fullReconciliation.timer

# algos: calculateHops, pagerank
# TODO: replace calculateHops and calculatePersonalizedPageRank with fullProcess_fullExport_allWebsOfTrust.timer
# sudo systemctl status calculateHops.timer
# sudo systemctl status calculatePersonalizedPageRank.timer
```
