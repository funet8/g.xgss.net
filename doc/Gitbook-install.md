# Gitbook部署方案

本项目地址：

1.Git地址： [git@gitee.com:funet8/g.xgss.net.git](git@gitee.com:funet8/g.xgss.net.git)

项目闭源：
https://gitee.com/funet8/g.xgss.net

https://g.xgss.net

2.github-pages地址： [http://gitbook.xgss.net/](http://gitbook.xgss.net/)

GitHUB地址： https://github.com/funet8/book

```
gitbook.xgss.net CNAME解析到  funet8.github.io
```

3.服务器地址 [http://g.xgss.net](http://g.xgss.net)

解析路径：域名--->CDN--->NGINX转发（云服务）--->gitbook服务

```
# cd /data/wwwroot/web/
# git clone git@gitee.com:funet8/g.xgss.net.git
# 修改文件属性
```

## 上线提交流程

在本地PC编辑项目，项目编辑完成提交到 github仓库，github的webhook给jenkins发送消息，jenkins执行脚本，构建项目上线

## 功能

本人工作中的经验文档。

## 鸣谢

感谢开源 https://github.com/judasn/Linux-Tutorial 给的灵感，在工作中总结的文档加上开源项目，查漏补缺 ，不断提升自己！

# 收款码

<img src="https://imgoss.xgss.net/picgo/wechat_donate.jpg?aliyun" alt="微信" style="zoom:50%;" />

<img src="https://imgoss.xgss.net/picgo/alipay_donate.jpg?aliyun" alt="支付宝" style="zoom:50%;" />