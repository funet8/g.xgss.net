# 自建Ngrok内网穿透服务，拜托



本文简单介绍ngrok是什么以及如何通过开源ngrok自建服务搭建

自建ngork的优点和缺点

优点：限制少，安全性高

缺点：有一定的技术门槛、需要购买云服务器和域名，如果服务器在国内域名需要备案。

如果不自建内网如果没有限制可以做用现成的技术，地址：http://www.ngrok.cc/ 还有 https://www.ngrok.com

## 什么叫ngrok？

ngrok 是一个反向代理，通过在公共的端点和本地运行的 Web 服务器之间建立一个安全的通道。ngrok 可捕获和分析所有通道上的流量，便于后期分析和重放。

开源地址：https://github.com/inconshreveable/ngrok.git

和其类似的功能还有开源的frp： https://github.com/fatedier/frp



## 内网穿透

内网穿透，也即 NAT 穿透，进行 NAT 穿透是为了使具有某一个特定源 IP 地址和源端口号的数据包不被 NAT 设备屏蔽而正确路由到内网主机。下面就相互通信的主机在网络中与 NAT 设备的相对位置介绍内网穿透方法。
总结一句话就是本地运行的项目（没有公网IP的项目），如果不使用内网穿透，只能本机访问。用到了内网穿透，就会给一个公网的ip代替本地ip,这样别人就可以访问到你的本地项目啦。



## ngrok的几项实际应用

满足没有公网IP环境下，远程访问各种局域网应用或设备，1.远程登录：公司电脑没有公网IP的时候，在家里可以远程管理自己公司的电脑，这时就不需要向日葵或者

家里的NAS没有公网IP，可以利用ngrok将nas共享到到公网，实现无缝衔接

在家的PC上做了一个小站点，想让异地的朋友看时，可以将这个站点暴露给他访问（比如我在做本地开发微信时）

如企业内网的OA/ERP/CRM系统、NAS私有云、视频监控、FTP/MAC/SVN服务器、个人局域网搭建的网站、博客、进行开发调试等，均可使用



搭建ngrok需要什么

1.域名
2.服务器（服务器如果在国内需要备案），轻量云服务器




ngrok的

ngrok是外国发布的一个开源项目，也有一个公开的运行服务。国内一个机构建立并运营了一个ngrok运行服务，虽然有时不太稳定，但对于调试人员来说是足够的。地址：http://www.ngrok.cc/ 还有 https://www.ngrok.com

其支持HTTP的80端口和TCP端口转发。下面介绍使用方法。微信开发调试即需要一个公网IP/域名和80端口。

1） 注册登陆ngrok平台，申请一个ngrok.cc下的二级域名。
2） 下载ngrok客户端并运行，输入token值即可。非常简单。这样本机就可以作为一个web服务器啦。
3） 将http://www.emlinuxhome.ngrok.cc/ 
填入微信公众号的服务器配置里面，可以立刻开始微信web调试。当然，微信也提供了一个web调试工具，但是要装QQ浏览器，调试H5方便些，其他就无所谓啦。



## 域名 

```
ngrok.XXXX.com  	A解析到
*.ngrok.XXXX.com	A解析到	120.XXX.XXX.XXX
```

![img](images/ngrok.jpg)

```

```

| 系统    | IP                                        | 服务                                 | 服务                   |
| ------- | ----------------------------------------- | ------------------------------------ | ---------------------- |
| centos6 | [120.XXX.XXX.XXX](http://120.XXX.XXX.XXX) | http://seafiles.ngrok.XXXX.com:8000/ | 公网-seafiles文档库    |
| centos6 | [120.XXX.XXX.XXX](http://120.XXX.XXX.XXX) | http://down.ngrok.XXXX.com:8000/     | 公网-下载              |
| centos7 | 192.168.1.6                               | http://192.168.1.6:8000              | 内网seafiles文档库     |
| centos7 | 192.168.1.6                               | http://192.168.1.6:8082              | 内网seafiles文档库下载 |

## 安装步骤 

**下载常用依赖库**

```
yum -y install zlib-devel openssl-devel perl hg cpio expat-devel gettext-devel curl curl-devel perl-ExtUtils-MakeMaker hg wget gcc gcc-c++
```

**安装go和git**

```
yum -y install go git
```

要注意git版本必须大于1.7.9,go版本必须大于1.4,否则可能有意想不到的错误

## 开始安装ngrok 

个人习惯安装到 /data/ 目录下 如果你想安装到其他目录 则进入你想安装的目录

```
mkdir /data/
cd /data/
git clone https://github.com/inconshreveable/ngrok.git ngrok
```

\#进入ngrok目录,后面操作都是在ngrok目录下完成!

```
cd /data/ngrok
#生成并替换源码里默认的证书，注意域名要修改为你自己的，这里是一个虚拟的测试域名
NGROK_DOMAIN="ngrok.XXXX.com"
#测试一下有没有设置成功
echo $NGROK_DOMAIN #输出ngrok.XXXX.com表示成功
openssl genrsa -out rootCA.key 2048
openssl req -x509 -new -nodes -key rootCA.key -subj "/CN=$NGROK_DOMAIN" -days 5000 -out rootCA.pem
openssl genrsa -out device.key 2048
openssl req -new -key device.key -subj "/CN=$NGROK_DOMAIN" -out device.csr
openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 5000
```

之后会在 ngrok 目录下生成 root,device 等六个文件。 然后需要拷贝到配置的目录中，在编译的时候会使用这些文件。

```
cp -r rootCA.pem assets/client/tls/ngrokroot.crt
cp -r device.crt assets/server/tls/snakeoil.crt
cp -r device.key assets/server/tls/snakeoil.key
```

到这个地方，证书生成已经复制的准备[工作](https://www.funet8.com/tag/jobs)就已经完成了。

### 生成[服务器](https://www.funet8.com/tag/server)的ngrokd 

```
make release-server
```

这样就会在bin目录下生成ngrokd 这个文件,就是我们ngrok的[服务器](https://www.funet8.com/tag/server)程序

### 编译客户端ngrok(不同系统不同的命令如下) 

```
32位linux客户端: GOOS=linux GOARCH=386 make release-client
64位linux客户端: GOOS=linux GOARCH=amd64 make release-client
32位windows客户端: GOOS=windows GOARCH=386 make release-client
64位windows客户端: GOOS=windows GOARCH=amd64 make release-client
32位mac平台客户端:GOOS=darwin GOARCH=386 make release-client
64位mac平台客户端:GOOS=darwin GOARCH=amd64 make release-client
ARM平台linux客户端: GOOS=linux GOARCH=arm make release-client
```

我这里是64位linux和64位windows客户端编译

```
GOOS=linux GOARCH=amd64 make release-client
GOOS=windows GOARCH=amd64 make release-client
```

依次执行这2个命令之后就会在bin目录里面生成所有的客户端文件，客户端平台是文件夹的名字，客户端放在对应的目录下，当前Linux平台客户端就直接在bin目录下一个ngrok的程序

### 配置启动服务器 

- httpAddr 是访问普通的http使用的端口号，用后面用 [子域名.ngrok.XXXX.com](http://xn--eqrt2grvd.ngrok.XXXX.com) 来访问服务
- httpsAddr 是访问的https使用的端口号,同上，只不过是需要https的服务访问才用这个端口(一般用不上)
- tunnelAddr 是ngrok通道的端口号，这个端口是Ngrok用来通信的，所以这个端口在服务器上和客户端上设置必须要对应才可以正常的链接，默认端口是4443

完整命令:

```
bin/ngrokd -domain="$NGROK_DOMAIN" -httpAddr=":80" -httpsAddr=":443" -tunnelAddr=":4443"
```

我使用的

```
bin/ngrokd -domain="$NGROK_DOMAIN" -httpAddr=":80"
nohup /data/ngrok/bin/ngrokd -domain="ngrok.XXXX.com" -httpAddr=":8000" -httpsAddr=":443" -tunnelAddr=":4443" &
不输出 nohup.out
nohup /data/ngrok/bin/ngrokd -domain="ngrok.XXXX.com" -httpAddr=":8000" -httpsAddr=":443" -tunnelAddr=":4443" >/dev/null 2>&1 &
```

查看端口情况

```
netstat -tunpl |grep ngrokd
tcp        0      0 0.0.0.0:8000                0.0.0.0:*                   LISTEN      28558/ngrokd
tcp        0      0 0.0.0.0:4443                0.0.0.0:*                   LISTEN      28558/ngrokd
tcp        0      0 0.0.0.0:443                 0.0.0.0:*                   LISTEN      28558/ngrokd
```

其中NGROK_DOMAIN对应的就是一开始设置过的域名地址。

要注意我这里使用的是8000端口。

**启动客户端**

linux客户端：
 下载客户端：文件 /data/ngrok/bin/ngrok
 在192.168.1.6客户端上操作：
 新建配置文件：

```
mkdir /data/ngrok
vi /data/ngrok/ngrok_8000.cfg
填写一下内容
server_addr: "ngrok.XXXX.com:4443"
trust_host_root_certs: false
vi /data/ngrok/ngrok_8082.cfg
填写一下内容
server_addr: "ngrok.XXXX.com:4443"
trust_host_root_certs: false
将在服务器中生成的ngrok文件上传目录中/data/ngrok/
chmod +x /data/ngrok/ngrok
nohup /data/ngrok/ngrok -log=/data/ngrok/ngrok_8000.log -subdomain=seafiles -config="/data/ngrok/ngrok_8000.cfg" 8000 &
nohup /data/ngrok/ngrok -log=/data/ngrok/ngrok_8082.log -subdomain=down -config="/data/ngrok/ngrok_8082.cfg" 8082 &
netstat -tunpl |grep ngrok
tcp        0      0 127.0.0.1:4040          0.0.0.0:*               LISTEN      20609/ngrok
```

日志： -log=/data/ngrok/ngrok_8000.log 是记录ngrok的日志，如果前期调试的时候加上这个参数，如果不能访问就可以查看到底是什么问题
 子域名： -subdomain=seafiles 是定义访问的时候的子域名，现在访问 [test.ngrok.XXXX.com](http://test.ngrok.XXXX.com) 就可以访问到这一台机器上8000端口的服务

```
ngrok
Tunnel Status online
Version 1.7/1.7
Forwarding https://test.ngrok.XXXX.com -> 127.0.0.1:80
Forwarding http://test.ngrok.XXXX.com -> 127.0.0.1:80
Web Interface 127.0.0.1:4040
Conn 0
Avg Conn Time 0.00ms
```

online是绿色的 表示连接成功!

到这里不出意外的话就会启动成功了,访问test.ngrok.XXXX.com的时候就是你本地的ip了.你可以通过apache或nginx配置test.ngrok.XXXX.com域名指定你的目录开始使用啦~

你可以访问127.0.0.1:4040来看到所有对test.ngrok.XXXX.com的请求~

参考网站

https://www.centos.bz/2017/11/centos下ngrok服务器搭建及ngrok客户端使用/