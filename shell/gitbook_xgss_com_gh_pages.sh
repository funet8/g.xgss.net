#!/usr/bin/env sh

## 将 _book目录推送到git仓库中的 gh-pages分支

###gitbook build .
#运行该命令后会在书籍的文件夹中生成一个 _book 文件夹, 
#里面的内容即为生成的 html 文件，我们可以使用下面命令来生成网页而不开启服务器。


# 定义仓库地址
Git_Url='git@github.com:funet8/book.git'
Gitbook_Path='/data/wwwroot/web/gitbook.xgss.net'
NowTime=`date +%Y%m%d-%H:%M:%S` 

echo '开始执行命令'

cd $Gitbook_Path
echo '安装插件'
gitbook install

# 生成静态文件
echo '执行命令：gitbook build .'
gitbook build .

# 进入生成的文件夹
echo "执行命令：cd ./_book\n"
cd ./_book

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
#echo "执行命令：git init\n"
#git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m "脚本自动提交，时间：$NowTime"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
echo "执行命令：git push -f $Git_Url master:gh-pages"
git push -f $Git_Url main:gh-pages

# 返回到上一次的工作目录
echo "回到刚才工作目录"
cd $Gitbook_Path
