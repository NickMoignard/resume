git pull
sudo docker-compose down
ssh jenkins@13.238.116.0<<EOF
 cd /home/ubuntu/resume
 git pull
 sudo docker-compose down
 sudo docker-compose up
 exit
EOF