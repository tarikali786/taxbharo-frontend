#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/taxbharo-frontend/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/taxbharo-frontend/deploy.log
cd /home/ec2-user/taxbharo-frontend >> /home/ec2-user/taxbharo-frontend/deploy.log

echo 'npm install' >> /home/ec2-user/taxbharo-frontend/deploy.log 
npm install >> /home/ec2-user/taxbharo-frontend/deploy.log