#!/bin/sh
ssh ubuntu@13.238.116.0 -tt <<EOF
cd /home/ubuntu/resume
git pull
sudo docker-compose down --remove
sudo docker container prune -f
sudo docker image rm $(sudo docker image ls)
sudo docker-compose up -d
echo "yet build in bash here"
exit
EOF