Install and configure strfry
=====

## strfry

Install strfry following [these instructions](https://github.com/hoytech/strfry/blob/master/docs/DEPLOYMENT.md).

additional changes to strfry.conf:
nofiles = 0
maxFilterLimit = 300000 (just something big)

* change `sudo ufw default deny incoming` to `sudo ufw default allow incoming`; otherwise the command `sudo ufw enable` disrupts neo4j access by port 7474.

* keep user: ubuntu rather than make new user strfry

### strfry router

This is adapted from `https://github.com/hoytech/strfry/blob/master/docs/router.md`.

Review the router config: `sudo nano ~/hasenpfeffr/setup/strfry-router.config`; edit the relay list if desired. Later we will uncomment the plugin.

Move router config:

```
sudo mv ~/hasenpfeffr/setup/strfry-router.config /etc/strfry-router.config
sudo chown strfry:strfry /etc/strfry-router.config
```

Setup service to keep router running in the background:

```
sudo mv ~/hasenpfeffr/services/runRouter.service /etc/systemd/system/runRouter.service
sudo chown root:root /etc/systemd/system/runRouter.service

sudo systemctl enable runRouter.service
sudo systemctl start runRouter.service
sudo systemctl status runRouter.service
```

To see if downloads are happening, check how many events are in strfry using `sudo strfry scan --count '{}'` 

Setup plugin:

`sudo nano /etc/strfry.conf` and set `relay.writePolicy.plugin` to `/home/ubuntu/hasenpfeffr/plugins/hasenpfeffr.js`.
