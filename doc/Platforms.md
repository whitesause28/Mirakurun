# Remarks for Platform Support

## Overview

**Bold** is the recommended. also, **Node.js** `^10.15.0 < 11 || ^12 || ^14` needed.

* [**Linux**](#linux)
  * [PM2](http://pm2.keymetrics.io/) `>=2.4.0`
  * x86 / **x64** / ARMv7 / **ARMv8**
  * **Debian** / Ubuntu / CentOS / Gentoo
  * SystemV / OpenRC / **SystemD**
* Docker on Linux (Testing)
  * Docker Hub: [chinachu/mirakurun](https://hub.docker.com/r/chinachu/mirakurun)
* [Win32](#win32) (Experimental)
  * [winser](https://github.com/jfromaniello/winser) `>=1.0.3`
  * Windows 10 RS3 `npm i winser@1.0.3 -g`
* Darwin (Experimental)
  * [PM2](http://pm2.keymetrics.io/) `>=2.4.0`

## Linux

### Installing Node.js

* **via Package Manager** (recommended)
  * [Debian / Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md#deb) (deb)
    * `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
  * [CentOS](https://github.com/nodesource/distributions/blob/master/README.md#rpm) (rpm)
    * (root) `curl -sL https://rpm.nodesource.com/setup_14.x | bash -`
  * [Gentoo](https://nodejs.org/en/download/package-manager/#gentoo)
    * `emerge nodejs`
* [nave](https://github.com/isaacs/nave)
  * `sudo /path/to/nave.sh usemain 14`

### Installing PM2

```
sudo npm install pm2 -g
```

### Installing / Updating Mirakurun

```
# Quick
sudo npm install mirakurun -g --unsafe-perm --production

# Advanced
sudo npm install mirakurun -g --production
sudo mirakurun init # to install as service
sudo mirakurun restart # when updated
```

### Uninstalling Mirakurun

```
# Quick
sudo npm uninstall mirakurun -g --unsafe-perm

# Advanced
sudo pm2 stop mirakurun-server
sudo pm2 delete mirakurun-server
sudo pm2 save
sudo npm uninstall mirakurun -g
```

### Default Paths

* `/usr/local/etc/mirakurun/` - configurations
  * `server.yml`
  * `tuners.yml`
  * `channels.yml`
* `/usr/local/var/db/mirakurun/` - databases
  * `services.json`
  * `programs.json`
* `/usr/local/var/log/mirakurun.stdout.log` - normal log
* `/usr/local/var/log/mirakurun.stderr.log` - error log

## Win32

### Installing Node.js

* [**Windows installer**](https://nodejs.org/en/download/)

### Installing winser

**use Windows PowerShell as Admin.**

```
npm install winser@1.0.3 -g
```

### Installing / Updating Mirakurun

**use Windows PowerShell as Admin.**

```
npm install mirakurun@latest -g --production
```

### Uninstalling Mirakurun

**use Windows PowerShell as Admin.**

```
npm uninstall mirakurun -g
```

### Managing Service

```sh
# start
Start-Service mirakurun
# stop
Stop-Service mirakurun
```

also you can use Service Manager of Task Manager.

### Default Paths

* `${USERPROFILE}/.Mirakurun/` - configurations
  * `server.yml`
  * `tuners.yml`
  * `channels.yml`
* `${LOCALAPPDATA}/Mirakurun/` - databases
  * `services.json`
  * `programs.json`
* `${LOCALAPPDATA}/Mirakurun/stdout` - normal log
* `${LOCALAPPDATA}/Mirakurun/stderr` - error log
