# AdGuard搭建去广告公共DNS



> AdGuard Home官方下载：https://github.com/AdguardTeam/AdGuardHome/releases

## 可根据自己的平台下载最新版本。CentOS 7 安装方法如下：

```
#下载AdGuard Home
wget https://github.com/AdguardTeam/AdGuardHome/releases/download/v0.108.0-b.4/AdGuardHome_linux_amd64.tar.gz
备用下载
wget http://js.funet8.com/centos_software/AdGuardHome_linux_amd64.tar.gz
#解压
tar -zxvf AdGuardHome_linux_amd64.tar.gz
#进入AdGuardHome目录
cd AdGuardHome
#放行3000端口（AdGuardHome初始化需要使用）
#firewalld放行3000端口
firewall-cmd --zone=public --add-port=3000/tcp --permanent
firewall-cmd --reload
#iptables放行3000端口
iptables -A INPUT -p tcp --dport 3000 -j ACCEPT
service iptables save

#启动AdGuard Home
./AdGuardHome
```

浏览器打开http://IP+3000,根据提示完成安装，首次初始化会要求设置账号、密码，下次登录需要使用。

![image-20220322133805305](https://imgoss.xgss.net/picgo/image-20220322133805305.png?aliyun)

![image-20220322133957199](https://imgoss.xgss.net/picgo/image-20220322133957199.png?aliyun)

![image-20220322134052172](https://imgoss.xgss.net/picgo/image-20220322134052172.png?aliyun)

## 配置方案

```
Router

此设置将自动覆盖连接到您的家庭路由器的所有设备，您不需要手动配置它们。

    打开您的路由器配置界面。通常情况下，您可以通过浏览器访问地址（如 http://192.168.0.1/ 或 http://192.168.1.1 ）。打开后您可能需要输入密码以进入配置界面。如果您不记得密码，通常可以通过路由器上的重置按钮来重设密码。但是，请注意，如您进行此操作，您最可能会失去所有路由器的配置。如果您的路由器需要通过特定的应用进行这一操作，请将相关应用程序安装到您的手机或计算机上并使用它设置您的路由器。
    找到路由器的 DHCP/DNS 设置页面。您会在 DNS 这一单词旁边找到两到三行允许输入的输入框，每一行输入框分为四组，每组允许输入一到三个数字。
    请在此处输入您的 AdGuard Home 服务器地址。
    在某些类型的路由器上无法设置自定义 DNS 服务器。在此情况下将 AdGuard Home 设置为 DHCP 服务器，可能会有所帮助。否则您应该查找如何根据特定路由器型号设置 DNS 服务器的使用手册。

Windows

    通过开始菜单或 Windows 搜索功能打开控制面板。
    点击进入 ”网络和 Internet“ 后，再次点击进入 “网络和共享中心”
    在窗口的左侧点击「更改适配器设置」。
    选择您正在连接的网络设备，右击它并选择「属性”」。
    在列表中找到 ”Internet 协议版本 4 (TCP/IPv4)“ ，选择并再次点击 ”属性“ 。
    选择“使用下面的 DNS 服务器地址”，并输入您的 AdGuard Home 服务器地址。
    
Android

    在安卓主屏幕菜单中点击设置。
    点击菜单上的 ”无线局域网“ 选项。在屏幕上将列出所有可用的网络（蜂窝移动网络不支持修改 DNS ）。
    长按当前已连接的网络，然后点击 ”修改网络设置“ 。
    在某些设备上，您可能需要选中 ”高级“ 复选框以查看进一步的设置。您可能需要调整您安卓设备的 DNS 设置，或是需要将 IP 设置从 DHCP 切换到静态。
    将 DNS 1 和 DNS 2 的值改为您的 AdGuard Home 服务器地址。    
```



## 额外设置

为了方便管理，可以继续输入命令 ./AdGuardHome -s install 安装为服务，然后就可以使用下面的命令来进行管理了。

```
#启动
systemctl start AdGuardHome
#开机自启
systemctl enable AdGuardHome
#重启
systemctl restart AdGuardHome
#停止
systemctl stop AdGuardHome
```

DNS默认使用53(TCP/UDP)端口进行通信，因此别忘记放行53端口，否则DNS无法正常使用。如果安装了宝塔面板，可在面板内操作。

```
#firewalld放行53端口
firewall-cmd --zone=public --add-port=53/tcp --permanent
firewall-cmd --zone=public --add-port=53/udp --permanent
firewall-cmd --reload
#iptables放行53端口
iptables -A INPUT -p tcp --dport 53 -j ACCEPT
iptables -A INPUT -p udp --dport 53 -j ACCEPT
service iptables save
```

参考：

https://www.ixigua.com/6841132261996233223

https://www.ceer.cc/39