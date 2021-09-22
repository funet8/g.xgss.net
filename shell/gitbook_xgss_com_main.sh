#!/bin/bash
## 功能将推送到git仓库中的 main主分支，再合并到 gitbook.xgss.net分支上

NowTime=`date +%Y%m%d-%H:%M:%S` 
Gitbook_Path='/data/wwwroot/web/g.xgss.net'
GitPort='4001' #默认4000

echo '切换到主分支'
cd $Gitbook_Path
git checkout master
git pull

# 安装 gitbook 插件
echo 'gitbook-安装插件'
gitbook install

# 生成静态文件
echo '执行命令：gitbook build .'
gitbook build .


# 杀死进程
#kill -9 `ps aux |grep 'gitbook'|grep 'serve' |awk {'printf $2'}`

# 启动gitbook
#nohup /usr/bin/gitbook serve $Gitbook_Path --port $GitPort  > /dev/null 2>&1 &

#/usr/bin/gitbook serve $Gitbook_Path --port $GitPort
#echo "重启gitbook 端口：$GitPort"



#echo '提交当前目录下的所有文件'
#git add .

#echo '注释添加到当前分支'
#git commit -m "脚本自动提交，时间：$NowTime"

#echo '提交到远程仓库'
#git push

# 合并某分支到当前分支
#git checkout gitbook.xgss.net
#git merge main
#git push
#echo '切回主分支'
#git checkout main
