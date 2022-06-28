# 通过acme.sh开源工具申请泛解析SSL证书



## 需要准备

1.域名

2.Linux云服务器（系统Centos7，本篇文章采用的是某讯云），测试IP为：150.158.130.33

## 安装acme.sh

普通用户和 root 用户都可以安装使用. 安装过程进行了以下几步:

```
# yum install socat -y

# curl https://get.acme.sh | sh
# curl https://get.acme.sh | sh -s email=my@example.com(zerossl.com注册的邮箱账号)

# 或者
# wget -O- https://get.acme.sh | sh
```

国内的服务器下载github可能会比较慢，如果下载失败，可以多执行几次。

![image-20220627113047199](https://imgoss.xgss.net/picgo/image-20220627113047199.png?aliyun)

1、把 acme.sh 安装到你的 home 目录下：~/.acme.sh/
装过程不会污染已有的系统任何功能和文件, 所有的修改都限制在安装目录中: ~/.acme.sh/

2、并创建 一个 bash 的 alias, 方便你的使用: alias acme.sh=~/.acme.sh/acme.sh

3、自动为你创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书.



把 acme.sh 安装到你的 home 目录下:~/.acme.sh/并创建 一个 bash 的 alias, 方便你的使用:

```
alias acme.sh=~/.acme.sh/acme.sh
echo 'alias acme.sh=~/.acme.sh/acme.sh' >>/etc/profile
```

### 定时任务

安装过程中会自动为你创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。

```
00 00 * * * root /root/.acme.sh/acme.sh --cron --home /root/.acme.sh &>/var/log/acme.sh.logs
```

### 获取帮助

```
acme.sh --help
```



## 生成证书

acme.sh 实现了 acme 协议支持的所有验证协议. 一般有两种方式验证: http 和 dns 验证.

# http认证

服务器需要安装nginx，**不支持域名的泛解析**

## 域名解析

```
ssl.xgss.net A记录解析到 150.158.130.33
xgss.net A记录解析到 150.158.130.33
```

![image-20220627164634187](https://imgoss.xgss.net/picgo/image-20220627164634187.png?aliyun)

配置http站点

```
# mkdir -p /data/wwwroot/web/ssl.xgss.net/
# echo 'hello SSL'> /data/wwwroot/web/ssl.xgss.net/index.html
配置nginx站点
server {
  listen       80;
  access_log /dev/null;
  error_log /dev/null;
  server_name  ssl.xgss.net xgss.net;
  root /data/wwwroot/web/ssl.xgss.net/;
  location / {
                index  index.html index.htm index.php;
        }
}
```

验证是否配置正常

```
# curl http://ssl.xgss.net/
hello SSL
```



http 方式需要在你的网站根目录下放置一个文件, 来验证你的域名所有权,完成验证. 然后就可以生成证书了.

```
acme.sh  --issue  -d mydomain.com -d www.mydomain.com  --webroot  /home/wwwroot/mydomain.com/
```

只需要指定域名, 并指定域名所在的网站根目录. acme.sh 会全自动的生成验证文件, 并放到网站的根目录, 然后自动完成验证. 最后会聪明的删除验证文件. 整个过程没有任何副作用.

如果你用的 nginx服务器, 或者反代, acme.sh 还可以智能的从 nginx的配置中自动完成验证, 你不需要指定网站根目录:



https://app.zerossl.com/signup 使用邮箱注册一个账号，假设账号的邮箱为："XXXX@163.com"

```
# /root/.acme.sh/acme.sh --register-account -m XXXX@163.com
[Mon Jun 27 13:37:27 CST 2022] No EAB credentials found for ZeroSSL, let's get one
[Mon Jun 27 13:37:30 CST 2022] Registering account: https://acme.zerossl.com/v2/DV90
[Mon Jun 27 13:37:38 CST 2022] Registered
[Mon Jun 27 13:37:38 CST 2022] ACCOUNT_THUMBPRINT='*********************'
```



## 申请证书

将证书放到一个指定的目录，scrm用nginx配置，本例是指定在/data/wwwroot/web/ssl目录下

### 1.创建ssl存放目录

```
mkdir -p /data/wwwroot/web/ssl
```



### 2.申请SSL证书

申请单域名证书，并且指定证书存放的目录

```
# /root/.acme.sh/acme.sh  --issue -d ssl.xgss.net  --webroot  /data/wwwroot/web/ssl.xgss.net/ \
--keypath       /data/wwwroot/web/ssl/ssl.xgss.net.key  \
--fullchainpath /data/wwwroot/web/ssl/ssl.xgss.net.key.pem \
--reloadcmd "/usr/local/openresty/nginx/sbin/nginx -s reload"
```

--reloadcmd 表示复制完成后重启服务器的命令，根据自己服务器状况填写。

/data/wwwroot/web/ssl/ 需要自己建立好，如果文件夹不存在，会报错。



### 3.生成dhparam文件

```
openssl dhparam -out /data/wwwroot/web/ssl/dhparam.pem     2048         
```



### 4.配置ssl.xgss.net的nginx配置。

```
  server {
        listen 443 ssl;
		access_log /dev/null;
	    error_log /dev/null;
		server_name  ssl.xgss.net;
		root /data/wwwroot/web/ssl.xgss.net/ ;
		
	    ssl_certificate     /data/wwwroot/web/ssl/ssl.xgss.net.key.pem;
        ssl_certificate_key /data/wwwroot/web/ssl/ssl.xgss.net.key;

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_dhparam /data/wwwroot/web/ssl/dhparam.pem;
		
		location / {
			index  index.html index.htm index.php;
		}
     }
```

浏览器访问： https://ssl.xgss.net

证书信息

![image-20220627161910298](https://imgoss.xgss.net/picgo/image-20220627161910298.png?aliyun)



## ZeroSSL官网证书截图

![image-20220627172051184](https://imgoss.xgss.net/picgo/image-20220627172051184.png?aliyun)

# DNS认证

由于`acme.sh`对域名解析/提供商的支持十分广泛,所以请针对自己所在的域名提供商获取对应的API Token。

支持列表:[点我跳转](https://github.com/Neilpang/acme.sh/blob/master/dnsapi/README.md)

国内目前使用较多的是腾讯云和阿里云，获取API Token的方法分别是：

- 腾讯的`DNSPod`

  登录[DNSPod](https://www.dnspod.cn/),进入顶部导航栏里的用户中心,在左侧的导航栏里,找到`安全设置`,看到页面的最下面,有个`API Token`.点击`查看`->`创建API Token`->填写`Tokens名称`,复制好ID与Token即可.保存待用。

- 阿里云域名

  需要登录到阿里云官网获取Ali_Key和Ali_Secret。[点击此处跳转](https://usercenter.console.aliyun.com/#/manage/ak)
  
  当然可以直接使用accessKey

![image-20220627170505702](https://imgoss.xgss.net/picgo/image-20220627170505702.png?aliyun)

## 阿里云API Token申请

申请子账户来申请。

![image-20220627170734108](https://imgoss.xgss.net/picgo/image-20220627170734108.png?aliyun)

![image-20220627170621178](https://imgoss.xgss.net/picgo/image-20220627170621178.png?aliyun)

详细就不列举了，有疑问可以后台提交工单。

## 申请泛解析域名证书

获取到对应的API Token之后我们需要将id和key设置为环境变量，供acme.sh调用：

```
# DNSPod
export DP_Id="你的 API ID"
export DP_Key="你的 Token"

# aliyun
export Ali_Key="你的 AccessKey ID"
export Ali_Secret="你的 AccessKey Secret"
```

临时环境变量只需配置这一次即可，当成功申请证书后，API 信息会被自动保存在~/.acme.sh/account.conf里，下次你使用acme.sh的时候系统会自动读取并使用。

腾讯云DNSpod：

```
acme.sh --issue -d example.com -d *.example.com --dns dns_dp
```

阿里云：

```
acme.sh --issue  -d example.com -d *.example.com --dns dns_ali
```



```
acme.sh --issue  -d xgss.net -d *.xgss.net --dns dns_ali \
--keypath       /data/wwwroot/web/ssl/all.xgss.net.key  \
--fullchainpath /data/wwwroot/web/ssl/all.xgss.net.key.pem \
--reloadcmd "/usr/local/openresty/nginx/sbin/nginx -s reload"

openssl dhparam -out /data/wwwroot/web/ssl/dhparam.pem     2048      

# ll /data/wwwroot/web/ssl
total 16
-rw------- 1 root root 1679 Jun 27 19:02 all.xgss.net.key
-rw-r--r-- 1 root root 6684 Jun 27 19:02 all.xgss.net.key.pem
-rw-r--r-- 1 root root  424 Jun 27 19:03 dhparam.pem
```

![image-20220627190216829](https://imgoss.xgss.net/picgo/image-20220627190216829.png?aliyun)

(一个小提醒, 这里用的是 service nginx force-reload, 不是 service nginx reload, 据测试, reload 并不会重新加载证书, 所以用的 force-reload)

域名新增了两条记录

![image-20220627190154936](https://imgoss.xgss.net/picgo/image-20220627190154936.png?aliyun)

## 验证SSL

![image-20220627190701821](https://imgoss.xgss.net/picgo/image-20220627190701821.png?aliyun)

```
# curl https://ssl2.xgss.net/
hello SSL
[root@shanghai-node02 ssl]# curl https://ssl3.xgss.net/
hello SSL
[root@shanghai-node02 ssl]# curl https://ssl4.xgss.net/
hello SSL
```

# 查看已安装证书的信息

```
acme.sh --info -d xgss.net
```



# 更新证书

目前证书在 60 天以后会自动更新, 你无需任何操作. 今后有可能会缩短这个时间, 不过都是自动的, 你不用关心.

请确保 cronjob 正确安装, 看起来是类似这样的:

```
crontab  -l

56 * * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
```



# 更新acme.sh

目前由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 acme.sh 也经常更新以保持同步.

升级 acme.sh 到最新版 :

```
acme.sh --upgrade
```

如果你不想手动升级, 可以开启自动升级:

```
acme.sh  --upgrade  --auto-upgrade
```

之后, acme.sh 就会自动保持更新了.

你也可以随时关闭自动更新:

```
acme.sh --upgrade  --auto-upgrade  0
```





官方中文说明： https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E







