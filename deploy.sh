#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

#提交到github仓库-vuepress分支
#git init
git add -A
git commit -m 'deploy.sh-脚本自动提交'
git push -f git@github.com:funet8/g.xgss.net.git vuepress


# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist
echo 'vuepress.xgss.net' >  CNAME
git init
git remote add origin git@github.com:funet8/g.xgss.net.git
git add .
git commit -m "deploy.sh-脚本自动提交"
git push --force --quiet "git@github.com:funet8/g.xgss.net.git" master:gh-pages-vuepress
cd -

## 新建分支 
# git checkout -b vuepress
## 推送分支 
# git push origin vuepress
## 切换分支
# git checkout master
## VuePress基本命令
# yarn init 或者 npm init
# yarn add -D vuepress 或者 npm install -D vuepress
# yarn docs:dev 或者 npm run docs:dev

