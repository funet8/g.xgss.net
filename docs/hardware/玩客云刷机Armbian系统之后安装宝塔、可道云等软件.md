# 玩客云刷机Armbian系统之后安装宝塔、可道云等软件



## 系统优化

Armbian刷好后，我们对其进行一些优化操作。首次登录需要更改密码和创建用户。默认root用户,密码：1234

### 修改密码

```
passwd root
```



## 固定IP

由于安装完成之后IP（192.168.124.9）是路由器自动获取的，这里在把玩客云的ip改成固定的，方便管理。

![image-20221020112103701](https://imgoss.xgss.net/picgo/image-20221020112103701.png?aliyun)

参考： https://zhuanlan.zhihu.com/p/556064376

1.输入 ifconfig 命令并回车，主要看看系统这次开机之后生成的mac地址是什么：

记下这个mac地址： 00:22:82:4f:7c:e9

2.输入这个命令并回车，就是打开并修改网络配置文件interfaces：

```text
nano /etc/network/interfaces
```

修改如下

修改成我这个样子，静态IP、网关、默认dns需要你自己根据情况修改，然后mac地址要改成前面查到的。

有一行必须需要加上：pre-up /sbin/ifconfig eth0 mtu 3838

```
allow-hotplug eth0
no-auto-down eth0
iface eth0 inet static
hwaddress ether 00:22:82:4f:7c:e9
pre-up ifconfig eth0 hw ether 00:22:82:4f:7c:e9
address 192.168.124.7
netmask 255.255.255.0
gateway 192.168.124.1
dns-nameservers 192.168.124.1 114.114.114.114
pre-up /sbin/ifconfig eth0 mtu 3838
```

![image-20221020135619450](https://imgoss.xgss.net/picgo/image-20221020135619450.png?aliyun)

四、还有个默认的配置文件interfaces.default也需要修改成上面那个一样
输入命令并回车：

```shell
nano /etc/network/interfaces.default
```

把内容修改成和上面那个文件一样：

```
allow-hotplug eth0 
no-auto-down eth0 
iface eth0 inet static
hwaddress ether 00:22:82:4f:7c:e9
pre-up ifconfig eth0 hw ether 00:22:82:4f:7c:e9
address 192.168.124.7
netmask 255.255.255.0
gateway 192.168.124.1
dns-nameservers 192.168.124.1 114.114.114.114
pre-up /sbin/ifconfig eth0 mtu 3838
```

修改完后按Ctrl+O保存，再按Ctrl+X退出

再重启玩客云

```
reboot
```

待玩客云开机后，输入命令并回车查看mac地址和ip地址是否变化，没变化就成功了

```text
ifconfig
```



## 挂载硬盘

为什么要挂载硬盘，因为玩客云自带存储只有8G,系统已经用掉30%，所剩空间不多。安装可道云就是为了下载和存文件，不通过外置硬盘扩大存储空间的话还能叫云盘吗？这里我准备了一张64GB的TF卡，让玩客云开机自动挂载硬盘。
SSH连上玩客云，输入fdisk -l命令查看

```
# 显示如下内容，其中/dev/mmcblk0是我64G的TF卡

root@OneCloud:/etc/apt# fdisk -l
Disk /dev/mmcblk0: 58.6 GiB, 62914560000 bytes, 122880000 sectors
Device              Boot Start     End Sectors  Size Id Type
/dev/mmcblk1p1      16065 14964479 14948415  7.1G 83 Linux
/dev/mmcblk1boot1p1      16065 7727264 7711200  3.7G  b W95 FAT32
```

我需要将TF卡存储空间给可道云用，先将它格式化成ext4格式

```
mkfs.ext4 /dev/mmcblk0
```

格式化执行完成后，然后得到它的UUID准备做自动挂载工作，输入命令

```
blkid /dev/mmcblk0
```

得到的内容如下：

```
/dev/mmcblk0: UUID="9495d4d6-c0a1-457a-8345-af6242502a82" TYPE="ext4"
```



其中的UUID就是我们需要用的，将硬盘挂载到/www/wwwroot下，用VI命令编辑/etc/fstab文件，在最后行追加下面内容,保存，下次重启就自动挂载了硬盘。

```
vi /etc/fstab
填写：
UUID=9495d4d6-c0a1-457a-8345-af6242502a82   /www/wwwroot   ext4    defaults    0 0
```





### 修改时区

```
rm -rf /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
echo Etc/UTC > /etc/timezone
Bash
```





### 换软件源

```
# 备份原文件
cp /etc/apt/sources.list.d/armbian.list /etc/apt/sources.list.d/armbian.list.bak

# 清华源(以下是一条命令复制完整)
sudo tee /etc/apt/sources.list.d/armbian.list <<-'EOF'
deb https://mirrors.tuna.tsinghua.edu.cn/armbian/ stretch main stretch-utils stretch-desktop
EOF


# 备份原文件
cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 中科大源(以下是一条命令复制完整)
sudo tee /etc/apt/sources.list <<-'EOF'
deb http://mirrors.ustc.edu.cn/debian stretch main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stretch-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stretch-backports main contrib non-free
deb http://mirrors.ustc.edu.cn/debian-security/ stretch/updates main contrib non-free
EOF
```



### 更新软件

```
apt-get update && apt-get upgrade
```



## 宝塔面板

为了省点内存这里我安装了5.9版本的宝塔面板，当然也可以安装7.0以上的版本。面板安装完大概要1个小时，进入面板安装LNMP服务更有长达4小时的等待时间。中途可能面板还无法访问，安装完就可以打开了，建议这个时候睡一觉醒来就好了。哈哈

```
# 宝塔面板5.9版本
wget -O install.sh http://download.bt.cn/install/install-ubuntu.sh && bash install.sh


# 宝塔面板7.0版本
wget -O install.sh http://yangwenqing.com/files/Source/install_bt_ubuntu_7.0.sh && bash install.sh
Bash
```



玩客云IP:8888 即可访问宝塔面板
安装宝塔面板中SSH可能会卡掉线，看不到宝塔面板的账号和密码，可以对面板进行重置密码

一步：[宝塔Linux面板命令大全](https://www.bt.cn/btcode.html)

```
# 修改面板密码，如要改成123456
cd /www/server/panel && python tools.py panel 123456

# 执行重置密码后会显示用户名，复制登录即可
a4zpobgr
```

![img](https://imgoss.xgss.net/picgo/fd78cf95b2132ad7bec71403cf29693e.png?aliyun)




进入面板后将 Nginx PHP MySQL 三大服务安装上去,Nginx我安装了2次才安装成功，安装完就可以进行下一步的可道云安装

![img](https://imgoss.xgss.net/picgo/b4c9382d1c047089da4f1a1b204f3fe1.png?aliyun)





## 安装可道云

宝塔面板一键部署源码内置有可道云，可以从这里进去安装。

![img](https://imgoss.xgss.net/picgo/12c71aaecd97e91631b1ed82a89f8360.png?aliyun)


效果如下，嗯！还是挺流畅的。

## 安装Aria2

Aria2是一款自由、跨平台命令行界面的下载管理器，该软件根据GPLv2许可证进行分发。支持的下载协议有：HTTP、HTTPS、FTP、Bittorrent和Metalink。

```
#逗比的Aria2脚本
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/aria2.sh && chmod +x aria2.sh && bash aria2.sh

#备用脚本
wget -N --no-check-certificate https://yangwenqing.com/files/Source/aria2.sh && chmod +x aria2.sh && bash aria2.sh
```



安装完成后，如果我们想修改密码、下载文件位置、端口的话，可以使用命令bash aria2.sh，再选择修改配置即可，这里建议使用该脚本配置自动更新BT-Tracker服务器，对下载BT有加成。

```
root@OneCloud:~# bash aria2.sh

 Aria2 一键安装管理脚本 [v1.1.9]
  -- Toyo | doub.io/shell-jc4 --

    0. 升级脚本
       ————————————
    1. 安装 Aria2
    2. 更新 Aria2
    3. 卸载 Aria2
       ————————————
    4. 启动 Aria2
    5. 停止 Aria2
    6. 重启 Aria2
       ————————————
    7. 修改 配置文件
    8. 查看 配置信息
    9. 查看 日志信息
   10. 配置 自动更新 BT-Tracker服务器
       ————————————

 当前状态: 已安装 并 已启动
```





### 配置Aria2

去配置玩客云Aria2 将IP,端口跟密码填入

![img](https://imgoss.xgss.net/picgo/f66ab69d0aa494dcd259e04997089ab1.png?aliyun)

测试下载
下载OneDrive上面的资源

![img](https://imgoss.xgss.net/picgo/aaebf39652010ef100fbad6d6ccda00b.png?aliyun)

![img](https://imgoss.xgss.net/picgo/cee2a4055a01d2f452bda80f12ed955a.png?aliyun)


