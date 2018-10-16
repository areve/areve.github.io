webpackJsonp([12],{NXgt:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("Xoog"),s={name:"pi-zero",components:{VueMarkdown:t.n(a).a},data:function(){return{}}},o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("section",[this._m(0),this._v(" "),n("vue-markdown",[this._v('\nSetup notes for my Pi Zero W.\n\n## Install raspbian-lite (stretch)\n\n* Connect TV and keyboard.\n* Used NOOBS the installer on the microsd which allowed me to connect to wifi.\n* login with `pi` : `raspberry`\n* Reset pi password with `passwd`\n* Reset root password with `sudo passwd`\n* Find out my IP with `ifconfig` it is 192.168.1.64 (if not using NOOBS skip to the next step)\n* Use `sudo raspi-config`\n  * Update the tool\n  * Enable ssh\n  * Set locale and timezone\n  * Change hostname to spider\n* Update stuff `sudo apt-get update && sudo apt-get upgrade`\n* Install other packages I like `sudo apt-get install vim tree`\n* Reboot `sudo reboot`\n\n(in an older install I added dos2unix and micro)\n\nNow I can ssh to my pi using putty so I can disconnect the keyboard and TV. Next I connect a 1TB usb hard drive.\n\n## robust network\n* I need a static IP and I need the server to reconnect when the router reboots, I set a static lease IP in the router config\n* trying `nano /etc/network/interfaces.d/wlan0`\n\n      allow-hotplug wlan0\n      iface wlan0 inet manual\n      wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\n      iface default inet dhcp\n* test it `service dhcpcd stop && ifup wlan0`\n* disable dhcpcd `systemctl disable dhcpcd.service`\n* `mkdir /root/bin`\n* `mkdir /root/log`\n* create `nano /root/bin/keep_network`\n\n      #!/bin/sh\n\n      /bin/echo $(date)  $(/sbin/iwgetid -r; hostname -I) >> /root/log/keep_network.log\n      /bin/ping -c2 192.198.1.1 > /dev/null\n\n      if [ $? != 0 ]; then\n        /bin/echo $(date)  ifdown wlan0 >> /root/log/keep_network.log\n        /sbin/ifdown wlan0 --force\n        /bin/sleep 5\n        /sbin/ifup wlan0\n        /bin/sleep 5\n        /bin/echo $(date)  $(/sbin/iwgetid -r; hostname -I) >> /root/log/keep_network.log\n      fi\n* `chmod +x keep_network`\n* `crontab -e` and add `* * * * * /root/bin/keep_network`\n\n## Configure email\n\n* install exim `apt-get install exim4`\n* edit `/etc/exim4/passwd.client` and add `*.google.com:SMTPAccountName@gmail.com:y0uRpaSsw0RD` generate a custom service password in google\n* `sudo dpkg-reconfigure exim4-config`\n  * Choose "mail sent by smarthost; received via SMTP or fetchmail"\n  * leave machine name in system mail name\n  * leave localhost IP\'s\n  * leave other destinations with machine name\n  * no machines to relay for\n  * Set outgoing smarthost to "smtp.gmail.com::587" for "IP address or host name of the outgoing smarthost:".\n  * Choose "NO" for "Hide local mail name in outgoing mail?".\n  * Choose "NO" for "Keep number of DNS-queries minimal (Dial-on-Demand)?".\n  * Choose "mbox format in /var/mail/" for "Delivery method for local mail".\n  * Choose "YES" for "Split configuration into small files?".\n  * leave root postmaster blank\n* `sudo update-exim4.conf`\n* `systemctl restart exim4`\n* edit `sudo vim /root/.forward` add only  `SMTPAccountName@gmail.com`\n* set permissions `sudo chmod 640 /root/.forward`\n* edit `nano ~/.forward` add only  `SMTPAccountName@gmail.com`\n* set permissions `chmod 640 ~/.forward`\n* test with `echo "something" | mailx -s "Hello" root`\n\n## Unattended upgrades\n\nBecause this is a server I want it to do its best to do updates on its own. And I want it to email me any news.\n\n* `sudo apt-get install unattended-upgrades`\n* edit `/etc/apt/apt.conf.d/50unattended-upgrades` and uncomment `Unattended-Upgrade::Mail "root";`\n* add `"o=Raspbian,a=stable,l=Raspbian";` under `Unattended-Upgrade::Origins-Pattern {`\n* edit `/etc/apt/apt.conf.d/20auto-upgrades` and add\n\n      APT::Periodic::Update-Package-Lists "1";\n      APT::Periodic::Unattended-Upgrade "1";\n\n* test by running `sudo unattended-upgrade -d`\n* `systemctl enable unattended-upgrades`\n\n## Setup a mounting of a drive\n\n* Install `sudo apt-get install usbmount`\n* List drives available `sudo blkid` and get the UUID\n* Create a mountpoint `sudo mkdir /mnt/spider-hdd`\n* Set permissions `sudo chmod 770 /mnt/spider-hdd`\n* Get pi\'s uid and gid with `cat /etc/passwd | grep pi`\n* Add ext4 drive in /etc/fstab `UUID=f76f9f41-3e36-d301-602f-9f413e36d301 /mnt/spider-hdd ext4 nofail 0 0`\n  * For nfts `apt-get install ntfs-3g`\n  * Then add to /etc/fstab `UUID=3AAEA03CAE9FEF1F /mnt/personal ntfs-3g uid=1000,gid=1000,umask=007,nofail 0 0`\n* `sudo apt-get install hdparm`\n* spin down time is seconds/5 so 60=5mins `sudo nano /etc/hdparm.conf`\n\n    /dev/disk/by-uuid/f76f9f41-3e36-d301-602f-9f413e36d301 {\n      write_cache = on\n      spindown_time = 60\n    }\n* reboot\n* `ls /mnt/personal` to test\n\n## Install Samba for file shares\n\n* `apt-get install samba`\n* add users as required\n* `sudo adduser andrew`\n* `sudo adduser andrew shared`\n* `sudo smbpasswd -a andrew`\n* update /etc/samba/smb.conf\n\n    [Media]\n      comment = Media files\n      path = /mnt/spider-hdd/media\n      guest ok = no\n      browseable = yes\n      create mask = 0770\n      directory mask = 0770\n      inherit acls = yes\n      inherit permissions = yes\n      read only = no\n      force group = shared\n      write list = andrew\n      valid users = @shared\n\n      ...\n* restart `systemctl restart smbd`\n\n## Setup web server\n\nDespite Lighttpd being kinder on memory usage going to use Apache today. Mainly because other packages tend to with Apache first and so the setup is easier; although most packages support Lighttpd too.\n\n* Install `sudo apt-get install apache2`\n* Browse to http://spider/ and see the default apache webpage\n*  remove the site `rm /etc/apache2/sites-enabled/000-default.conf`\n\n## Setup my web server\n\n* Setup SSL `sudo a2enmod ssl`\n* Create `/etc/apache2/ssl.conf`\n\n      SSLEngine on\n      SSLCertificateFile    /etc/ssl/certs/ssl-cert-snakeoil.pem\n      SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key\n\n* Create `/var/www/example.com.conf`\n* Create `/etc/apache2/sites-available/example.com.conf`\n* link it `ln -s /etc/apache2/sites-available/example.com.conf /etc/apache2/sites-enabled/000-example.com.conf`\n* reload the config `systemctl reload apache2.service`\n* `mkdir /var/www/example.com`\n\n### git hosting website\nCreate\nCreate git config files\n`/var/www/git.example.com.conf`\n* Create `/etc/apache2/sites-available/git.example.com.conf`\n* link it `ln -s /etc/apache2/sites-available/git.example.com.conf /etc/apache2/sites-enabled/git.example.com.conf`\n* Setup SSL `sudo a2enmod rewrite`\n* `sudo a2enmod proxy proxy_http`\n* reload the config `systemctl reload apache2.service`\n\n#### set up gitea\n* `wget https://dl.gitea.io/gitea/1.5/gitea-1.5-linux-arm-7`\n* (for pi-zero use arm-6 version)\n* `sudo apt-get install git`\n* create a service `sudo nano /etc/systemd/system/gitea.service`\n\n      [Unit]\n      Description=Gitea (Git with a cup of tea)\n      After=syslog.target\n      After=network.target\n\n      [Service]\n      Type=simple\n      User=gitea\n      Group=gitea\n      WorkingDirectory=/var/local/gitea\n      ExecStart=/usr/local/bin/gitea web\n      Restart=always\n      Environment=USER=gitea GITEA_CUSTOM=/var/local/gitea HOME=/var/local/gitea APP_DATA_PATH=/var/local/gitea GITEA_WORK_DIR=/var/local/gitea\n\n      [Install]\n      WantedBy=multi-user.target\n\n* `sudo chmod +x /etc/systemd/system/gitea.service`\n* `sudo useradd -M gitea`\n* `sudo usermod -L gitea`\n* `sudo mkdir /var/local/gitea`\n* `sudo mkdir /var/log/gitea`\n* `sudo chown gitea:gitea /var/log/gitea`\n* `sudo cp gitea-1.5-linux-arm-7 /usr/local/bin/gitea`\n* `sudo chmod 700 /usr/local/bin/gitea`\n* `sudo chown gitea:gitea /var/local/gitea`\n* `sudo chmod gitea:gitea /var/local/gitea`\n* `sudo systemctl enable gitea`\n* `sudo systemctl start gitea`\n* `sudo mkdir /var/local/gitea/repositories`\n* `sudo chown gitea:gitea /var/local/gitea/repositories`\n* `sudo mkdir /var/local/gitea/lfs`\n* `sudo chown gitea:gitea /var/local/gitea/lfs`\n* browse to http://spider:3000 press Sign In\n  * Database Type: SQLite3\n  * Path: data/gitea.db\n  * Repo Root path: /mnt/spider-hdd/git/repositories\n  * Git LFS Root Path: /mnt/spider-hdd/git/lfs\n  * SSH Server Domain: git.example.com\n  * Gitea Base URL: https://git.example.com/\n  * Log Path: /var/log/gitea\n  * create admin account: andrew:sOmEpass email: root@spider\n* the apache site uses a revese proxy to host the site\n* `sudo systemctl restart apache2`\n* `ln -s /var/local/gitea/conf/app.ini /etc/gitea.conf`\n* `addgroup shared`\n* `adduser gitea shared`\n\n### secure website\n* Create secure config files\n`/var/www/secure.example.com.conf`\n* Create `/etc/apache2/sites-available/secure.example.com.conf`\n* link it `ln -s /etc/apache2/sites-available/secure.example.com.conf /etc/apache2/sites-enabled/secure.example.com.conf`\n* Create `/etc/htdigest`\n* `a2enmod auth_digest`\n* add files to `/var/www/secure.example.com`\n* `systemctl reload apache2`\n\n## Setup backup script\n* run `crontab -e` and add `  0 3 * * * /root/bin/backup` in\n* create `nano /root/bin/backup`\n* create dir `mkdir /root/log`\n* create dir `mkdir /root/backup`\n\n## TODO Setup other cron scripts\n\n* `addgroup shared`\n* `adduser www-data shared`\n* `adduser pi shared`\n* `crontab -e` and add `* 1 * * * /root/bin/permissions_reset`\n* `nano /root/bin/permissions_reset`\n* `chmod 700 /root/bin/permissions_reset`\n* `sudo adduser pi www-data`\n* `mkdir /home/shared`\n* `mkdir /home/shared/projects`\n* `chmod 777 /home/shared/ -R`\n\n## setup continuous-integration\n\nMy CI program is checked out in `/mnt/spider-hdd/ci` with `git clone /mnt/spider-hdd/git/repositories/andrew/continuous-integration.git/\n. --no-hardlinks`\n* the readme has more info on how to create the service.\n* `adduser ci www-data` to allow ci to do the deploy\n\n* setup nodejs `apt-get install nodejs npm`\n* setup yarn `npm install yarn -g`\n* setup npm better\n\n      npm install npm@latest -g\n      rm /usr/bin/npm\n      ln -s /usr/local/bin/npm /usr/bin/npm\n\nPi zero was just too slow to do `npm run build` in a *vue* site, for this reason I upgraded to raspberry pi3, it is still a bit slow though.\n\nAdd gitea web-hook to http://localhost:3222/script.name for just the push event\n\n## Download some files from another smb share\n\n* `apt-get install screen cifs-utils`\n* create a screen `screen -R` so bash can be disconnected\n* `mount -t cifs //192.168.1.5/shared snail-shared -o username=andrew`\n* `cp -fr snail-shared/* some-dest`\n\n## Setup unison\n\n* `apt-get install unison`\n* create a a private key with puttygen\n* store it to ~/.ssh/authorized_keys\n* `chmod 700 ~/.ssh`\n* `chmod 600 ~/.ssh/authorized_keys`\n* create a batch file ssh.cmd containing `@%~dp0plink.exe %6 -ssh -P %7 -l %8 "unison -server -auto"`\n* in each unison config file add `sshcmd = ssh-spider-andrew.cmd`\n* one of my config files is ~/.unison/spider-photos.prf\n\n      fastcheck = true\n      label = spider photos\n      root = C:\\Users\\andrew\\Documents\\sync\\photos\n      root = ssh://andrew@spider//mnt/spider-hdd/photos\n      sshcmd = ssh.cmd\n      sshargs = spider 22 andrew\n\n## Twonky\n\n*I\'ve not installed on my most recent server rebuild because I never really use it*\n\n  * `mkdir twonky`\n  * `cd twonky`\n  * `wget http://www.twonkyforum.com/downloads/8.4.1/twonky-armel-glibc-2.13-hf-8.4.1.zip`\n  * `unzip twonky-armel-glibc-2.13-hf-8.4.1.zip`\n  * `./twonkyserver\n  * browse to http://spider:9000/\n  * login to webconfig by first registering online in the lynx site\n\n## IP Webcam\n\n  * Video can be seen at rtsp://view:password@192.168.1.55:88/videoMain after running http://192.168.1.55:88/cgi-bin/CGIProxy.fcgi?cmd=setSubStreamFormat&format=1&usr=andrew&pwd=password\n  * Get a jpeg at http://192.168.1.55:88/cgi-bin/CGIProxy.fcgi?cmd=snapPicture2&usr=view&pwd=password\n  * Set the ftp config (or set under network settings)\n    * http://192.168.1.55:88/cgi-bin/CGIProxy.fcgi?cmd=setFtpConfig&ftpAddr=ftp://192.168.1.7/foscam1&ft\npPort=21&mode=0&userName=upload&password=upload&usr=andrew&pwd=password\n    * http://192.168.1.55:88/cgi-bin/CGIProxy.fcgi?cmd=getFtpConfig&usr=andrew&pwd=password\n\n### FTP Server\n\nMy webcam wants a place to FTP data to\n\n    apt-get install pure-ftpd\n    groupadd ftpgroup\n    useradd ftpuser -g ftpgroup -s /sbin/nologin -d /dev/null\n    mkdir /mnt/spider-hdd/ftp\n    chown -R ftpuser:ftpgroup /mnt/spider-hdd/ftp\n    pure-pw useradd upload -u ftpuser -g ftpgroup -d /mnt/spider-hdd/ftp -m\n    # enter password\n    pure-pw mkdb\n    ln -s /etc/pure-ftpd/conf/PureDB /etc/pure-ftpd/auth/60puredb\n    service pure-ftpd restart\n\n### A cron job to delete old\n\n    #!/bin/sh\n    echo $(date)  started >> /root/log/clean_camera.log\n\n    find /mnt/spider-hdd/ftp/foscam1/FI9821W_C4D65536E9BE/snap -type f -name \'*.jpg\' -mtime +30 -exec rm {} \\;\n    find /mnt/spider-hdd/ftp/foscam1/FI9821W_C4D65536E9BE/record -type f -name \'*.mkv\' -mtime +30 -exec rm {} \\;\n\n    echo $(date)  completed >> /root/log/clean_camara.log\n\n## TODO\n* improve websites\n* tidy this page\n* setup twonky as a service\n* setup as wifi access point at same time as client see https://raspberrypi.stackexchange.com/questions/63841/rpi-zero-w-as-both-wifi-client-and-access-point\n* point router at the server\n* setup scripts to get backups off the server somehow\n\n* TODO BACKUP\n* LOOK AT MORE TODO\'s above\n* setup cron jobs\n* setup unison\n* ensure julia can get to network share\n* setup backup script\n* check backup of archives etc with unison\n* setup ftp and webcam\n* purge juilas folder\n\n    ')])],1)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("h1",[this._v("Raspberry PI3B "),n("small",[this._v("(previously Pi Zero W)")])])}]};var i=t("VU/8")(s,o,!1,function(e){t("R+hu")},null,null);n.default=i.exports},"R+hu":function(e,n){}});
//# sourceMappingURL=12.7c61ed2544334dc8355b.js.map