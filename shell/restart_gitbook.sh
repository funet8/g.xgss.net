#/bin/bash

## 开启本地gitbook服务

GitPort='4001' #默认4000
Gitbook_Path='/data/wwwroot/web/gitbook.xgss.net'

# gitbook serve ./{book_name}
#/usr/bin/gitbook serve /data/wwwroot/web/gitbook.xgss.net --port 4001

#开启Gitbook服务
cd $Gitbook_Path

# 杀死进程
kill -9 `ps aux |grep 'gitbook'|grep 'serve' |awk {'printf $2'}`

# 启动gitbook
nohup /usr/bin/gitbook serve $Gitbook_Path --port $GitPort  > /dev/null 2>&1 &

echo "重启gitbook 端口：$GitPort"
