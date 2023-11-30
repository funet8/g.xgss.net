# 群晖NAS配置之搭建WordPress个人博客站点



之前写了一些ngrok和frp给群晖nas做内网穿透，今天分享一下在群晖nas下安装wordpress的教程。

## 安装群晖 NAS 上的 Web 站点套件

1. 登录群晖 DSM（DiskStation Manager）管理界面。

   

2. 打开“套件中心”，选择搜索 -> “Web station” 安装。

   ![image-20231129094038178](https://imgoss.xgss.net/picgo/image-20231129094038178.png?aliyun)

3. 启用 Web station 站点服务。

   

## 安装 MariaDB（MySQL）数据库

1. 在“控制面板”中，选择“套件中心”。

2. 在“套件中心”中搜索并安装 MariaDB 套件。

3. 完成安装后，打开 MariaDB，并创建一个新的数据库，记下数据库名称、用户名和密码，用于 WordPress 的数据库。

   

   ![image-20231129094237126](https://imgoss.xgss.net/picgo/image-20231129094237126.png?aliyun)

   ![image-20231129094258023](https://imgoss.xgss.net/picgo/image-20231129094258023.png?aliyun)

## 数据库配置

MariaDB默认只运行nas本机访问，现在需要把开启，这个是非必须的，如果设置一定要设置一个强密码。

```

mysql> use mysql;
mysql> GRANT ALL PRIVILEGES ON *.* TO 'star'@'%' IDENTIFIED BY 'Pwd654321' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES ;
```

![image-20231129100003317](https://imgoss.xgss.net/picgo/image-20231129100003317.png?aliyun)

使用navicat工具连接

![image-20231129100119721](https://imgoss.xgss.net/picgo/image-20231129100119721.png?aliyun)

## 创建数据库

mysql新建wordpress数据库,

```
> CREATE DATABASE wordpress_db;
```

并且新建一个wordpress数据库用户，只允许 192.168.1.4 和127.0.0.1和localhost 访问

```
CREATE USER 'wordpress_user'@'192.168.1.4' IDENTIFIED BY 'your_password';
CREATE USER 'wordpress_user'@'127.0.0.1' IDENTIFIED BY 'your_password';
CREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'your_password';

GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'192.168.1.4';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'127.0.0.1';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';

FLUSH PRIVILEGES;
```





## 安装 WordPress

1. 在“套件中心”中搜索并安装 WordPress 套件。

2. 完成安装后，进入 WordPress 控制面板。

3. 在设置过程中，输入之前在 MariaDB 中创建的数据库名称、用户名和密码，连接 WordPress 到数据库。

   

   这里要输入root的用户名和密码

   ![image-20231129101647314](https://imgoss.xgss.net/picgo/image-20231129101647314.png?aliyun)

   

   输入数据库名和用户和密码

   ![image-20231129101521539](https://imgoss.xgss.net/picgo/image-20231129101521539.png?aliyun)

   完成

   ![image-20231129101552393](https://imgoss.xgss.net/picgo/image-20231129101552393.png?aliyun)

## 配置 WordPress

1. 登录 WordPress 控制面板（通常是通过浏览器输入你的 NAS IP 地址和 WordPress 目录的路径）。
2. 在 WordPress 后台，你可以更改主题、添加插件、创建和管理博客文章等。



## 配置 Web 站点



![image-20231129101757870](https://imgoss.xgss.net/picgo/image-20231129101757870.png?aliyun)



![image-20231129102714134](H:/typora_images/image-20231129102714134.png)

## 访问你的 WordPress 站点

使用浏览器输入你设置的域名或者群晖 NAS 的 IP 地址，应该就能访问到你搭建的 WordPress 个人博客站点了。

# 利用内网穿透域名访问wordpress

这样只能用ip访问wordpress，需要用内网穿透的域名访问wordpress

域名： wordpress.frp.xgss.net

## frpc配置增加域名

```
vi frpc.toml 
添加
[[proxies]]
name = "web3"
type = "http"
localPort = 82
customDomains = ["wordpress.frp.xgss.net"]
重启frp服务
```



## web station中添加域名

在web station 点击新增--->选择基于端口

![image-20231129174103231](https://imgoss.xgss.net/picgo/image-20231129174103231.png?aliyun)



## 配置backend

![image-20231129174214221](https://imgoss.xgss.net/picgo/image-20231129174214221.png?aliyun)

在 web/wordpress 目录中新建一个文件

```
vi info.php
填写以下文字：

<?php
echo 'hello world';
echo phpinfo();

```

测试访问 `http://wordpress.frp.xgss.net/info.php`

![image-20231129174412252](https://imgoss.xgss.net/picgo/image-20231129174412252.png?aliyun)

## 官网下载 wordpress

下载 wordpress-6.4.1-zh_CN.zip 解压如图

![image-20231129175807797](https://imgoss.xgss.net/picgo/image-20231129175807797.png?aliyun)

### 访问域名

报错，您的PHP似乎没有安装运行WordPress所必需的MySQL扩展。请检查 PHP 扩展 mysqli 已安装并启用。

![image-20231129175908764](https://imgoss.xgss.net/picgo/image-20231129175908764.png?aliyun)

### 群晖启用mysqli扩展

如图 web station --->脚本语言设置---> PHP 选择你要用到的版本，选择扩展勾选 mysqli ，保存

![image-20231129183803368](https://imgoss.xgss.net/picgo/image-20231129183803368.png?aliyun)

再次访问

![image-20231129184024526](https://imgoss.xgss.net/picgo/image-20231129184024526.png?aliyun)

填写

![image-20231129184118476](https://imgoss.xgss.net/picgo/image-20231129184118476.png?aliyun)

填写信息

![image-20231129184435116](https://imgoss.xgss.net/picgo/image-20231129184435116.png?aliyun)

至此wordpress安装成功

![image-20231129184556118](https://imgoss.xgss.net/picgo/image-20231129184556118.png?aliyun)



# 总结

这种方法不仅可以安装wordpress的项目，同样也可以安装任何PHP+mysql的项目。