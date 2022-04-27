# 提交到仓库
git pull
git add .
git commit -m "webhook自动提交"
git push


# 安装插件
gitbook install

# 生成静态文件
gitbook build .

# 进入生成的HTML文件夹
cd ./_book

# 提交到Git仓库的gh-pages分支中
git add -A
git commit -m "脚本自动提交"
git push -f git@github.com:funet8/g.xgss.net.git main:gh-pages





###########################################################################
# webhook钩子
###########################################################################

# curl无法在命令行中使用，只能在浏览器中访问
# curl "http://${jenkins地址}/job/g.xgss.net_github_online/build?token=${token}"

#SERVER='http://192.168.1.10:9091'
#Job_Name='g.xgss.net_github_online'
#Token='8888888'
#USER='jenkins_username'
#Password='123456'

#curl --user $USER:${Password} ${SERVER}/job/${Job_Name}/build?token=${Token}


# 安装 GitBook: npm i gitbook-cli -g
# 初始化 GitBook 项目：gitbook init
# 安装 GitBook 依赖：gitbook install
# 开启 GitBook 服务：gitbook serve
# 打包 GitBook 项目：gitbook build
# GitBook 命令行查看：gitbook -help
# GitBook 版本查看：gitbook -V

# 链接：https://juejin.cn/post/6844903848914452488





