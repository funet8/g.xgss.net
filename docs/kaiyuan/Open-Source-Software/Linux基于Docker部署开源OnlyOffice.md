# Linux基于Docker部署开源OnlyOffice

## 什么是OnlyOffice

OnlyOffice是一款强大的在线office工具，我们通过他可以让客户脱离于客户端环境，直接从web端进行文档编写。

这篇文章只是介绍一下onlyOffice的所需要的环境和基本使用方法（在线打开预览，在线编辑与保存）。官网：https://www.onlyoffice.com/zh/

也可以网盘接入onlyoffice实现word文档，excel表格, ppt演示文稿的创建，在线预览，协同编辑

![image-20220609191708156](https://imgoss.xgss.net/picgo/image-20220609191708156.png?aliyun)

## 系统说明

官方最低配置：

　　CPU： 双核2GHz或更高

　　内存：大于2GB或更多

　　硬盘： 大于40GB

　　额外的需求至少4GB的交换

　　Docker版本：大于1.10

```
系统：centos7
IP： 192.168.1.5
已安装docker
```



## 使用Docker部署OnlyOffice

## 安装Docker

省略

## 运行镜像onlyoffice

```
# mkdir /data/docker
# docker run -itd \
--name onlyoffice \
--restart always \
-p 8090:80 \
-v /data/docker/onlyoffice/log:/var/log/onlyoffice  \
-v /data/docker/onlyoffice/data:/var/www/onlyoffice/Data  \
-v /data/docker/onlyoffice/lib:/var/lib/onlyoffice \
-v /data/docker/onlyoffice/db:/var/lib/postgresql  \
onlyoffice/documentserver

# docker ps
```

这时候输入服务器ip:8090出现下面页面则部署成功

http://192.168.1.5:8090/

![image-20220322150844771](https://imgoss.xgss.net/picgo/image-20220322150844771.png?aliyun)

## 使用 onlyoffice

```
docker exec onlyoffice sudo supervisorctl start ds:example

docker exec onlyoffice sudo sed 's,autostart=false,autostart=true,' -i /etc/supervisor/conf.d/ds-example.conf
```

  

点击 GO TO TEST EXAMPLE 按钮

![image-20210930133757212](http://imgoss.xgss.net/picgo/image-20210930133757212.png?aliyunoss)

可以上传一个文档

　　开始使用演示样本ONLYOFFICE文档编辑器,第一个基于html5的编辑。
　　你可以上传自己的文档进行测试使用“上传文件”按钮,选择必要的文件在你的电脑。

![image-20210930133918697](http://imgoss.xgss.net/picgo/image-20210930133918697.png?aliyunoss)

![image-20210930133941005](http://imgoss.xgss.net/picgo/image-20210930133941005.png?aliyunoss)

可实现多人编辑

![image-20210930134224006](http://imgoss.xgss.net/picgo/image-20210930134224006.png?aliyunoss)

## 给onlyoffice导入字体

win10系统提取中文字体的方法：控制面板——搜字体——查看安装的字体——再在搜索栏输入中文 2个字，这些就是需要的中文字体了。OO首次加载会比较慢，因为加载中文字体，一般达到50M以上。

//将当前文件夹C:\Users\Administrator\下的winfont文件夹内的字体全部拷贝到容器的文件夹/usr/share/fonts/truetype中





