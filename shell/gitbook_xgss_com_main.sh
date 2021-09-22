#!/bin/bash
## 功能将推送到git仓库中的 main主分支，再合并到 gitbook.xgss.net分支上

NowTime=`date +%Y%m%d-%H:%M:%S` 
Gitbook_Path='/data/wwwroot/web/gitbook.xgss.net'


echo '切换到主分支'
cd $Gitbook_Path
git checkout main
git pull
echo '提交当前目录下的所有文件'
git add .

echo '注释添加到当前分支'
git commit -m "脚本自动提交，时间：$NowTime"

echo '提交到远程仓库'
git push

# 合并某分支到当前分支
#git checkout gitbook.xgss.net
#git merge main
#git push
echo '切回主分支'
git checkout main
