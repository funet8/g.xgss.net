# 星哥说事导航

| 项目名         | **正式域名**                                 | 说明                                                         | 开源仓库                                      |
| -------------- | -------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| 星哥说事首页   | [www.xgss.net](https://www.xgss.net)         | 基于wordpress搭建博客系统                                    |                                               |
| 静态资源图片等 | [s.xgss.net](https://s.xgss.net)             | 蜘蛛采集的图片                                               |                                               |
| 看云-书籍      | http://book.xgss.net/                        | 测试用的，看云空间只有50M，放弃了                            |                                               |
| 图库           | [imgoss.xgss.net](https://imgoss.xgss.net)   | 主要用于图片存放，通过typora编写上传到阿里云oss上            |                                               |
| owncloud云盘   | [o.xgss.net](https://o.xgss.net)             | owncloud云盘                                                 |                                               |
| 私人网盘       | [z.xgss.net](https://z.xgss.net)             | 基于zfile搭建                                                |                                               |
| gitbook        | [gitbook.xgss.net](http://gitbook.xgss.net/) | gitbook.xgss.net CNAME解析到  funet8.github.io，服务器在github |                                               |
| 私人文档库     | [g.xgss.net](http://g.xgss.net/)             | 本地编辑md文件，通过gitbook工具生成html文件，上传到腾讯云。  |                                               |
| 私人图片库     | [p.xgss.net](http://p.xgss.net/)             | 基于开源欧奥[PicHome](https://oaooa.com/pichome.html)搭建，私人相册库 | [开源地址](https://gitee.com/zyx0814/Pichome) |
|                |                                              |                                                              |                                               |

# 好玩吧导航

| 项目名       | **正式域名**                                | 说明                      | 开源仓库 |
| ------------ | ------------------------------------------- | ------------------------- | -------- |
| 好玩吧首页   | [www.funet8.com](https://www.funet8.com)    | 基于wordpress搭建博客系统 |          |
| 好玩吧js     | [js.funet8.com](http://js.funet8.com)       |                           |          |
| 网络云盘     | [d.funet8.com](http://d.funet8.com)         | KodExplorer-开源云桌面    |          |
| 微擎         | [we7.funet8.com](https://we7.funet8.com/)   |                           |          |
| 腾讯企业邮箱 | [腾讯企业邮箱](https://exmail.qq.com/login) | funet8.com的域名解析      |          |
| 蓝天采集器   | [sky.funet8.com](http://sky.funet8.com)     | 域名停解析，绑定hosts访问 |          |
| 测试站       | [t.funet8.com](http://t.funet8.com)         | 域名停解析，绑定hosts访问 |          |
|              |                                             |                           |          |
|              |                                             |                           |          |
|              |                                             |                           |          |

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
# 上线提交流程
在本地PC编辑项目，项目编辑完成提交到 github仓库，github的webhook给jenkins发送消息，jenkins执行脚本，构建项目上线

# 功能
本人工作中的经验文档。

# 鸣谢
感谢开源 https://github.com/judasn/Linux-Tutorial 给的灵感，在工作中总结的文档加上开源项目，查漏补缺 ，不断提升自己！

# 收款码
<img src="https://img.funet8.com/images/wechat_donate.jpg" alt="微信" style="zoom:50%;" />

<img src="https://img.funet8.com/images/alipay_donate.jpg" alt="支付宝" style="zoom:50%;" />

