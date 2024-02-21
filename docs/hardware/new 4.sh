
vi /volume1/ngrok/start_ngrok.sh


#!/bin/bash

# 关闭ngork
pkill ngrok
#ngrok-web协议
nohup /root/ngrok/ngrok -subdomain=nas -config="/root/ngrok/ngrok.cfg" 5000 >/dev/null 2>&1 &

# nas.ngrok.xgss.net

#ngrok-ssh
nohup /root/ngrok/ngrok -config="/root/ngrok/ngrok_ssh_3303.cfg" start mstsc >/dev/null 2>&1 &
#远程ssh登录地址： xgss.net:3303