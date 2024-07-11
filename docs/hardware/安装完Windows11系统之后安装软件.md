# 我安装完Windows11系统之后的操作



# 如标题所示

上次的办公电脑是2021年



# 系统激活



开源地址： https://github.com/massgravel/Microsoft-Activation-Scripts



## PowerShell（推荐）



打开你的 Windows，右键单击 Windows 开始菜单并选择 PowerShell 或终端（不是 CMD）。复制并粘贴如下代码，然后按回车键。

```
irm https://get.activated.win | iex

```


按照屏幕上的说明轻松完成激活过程。

![image-20240706151840211](https://imgoss.xgss.net/picgo/image-20240706151840211.png?aliyun)



# win11启动administrator账号

由于安装的时候没有启动administrator账号，需要启用管理员账号

方法一：使用命令提示符

  1. 打开开始菜单，搜索“命令提示符”并右键点击“以管理员身份运行”。

     

  2. 在命令提示符窗口中，输入以下命令并按下回车键：

     ```
     net user administrator /active:yes
     系统会显示“命令成功完成”的提示，表示管理员账户已经成功激活。
     ```

  3. 重新启动电脑，登录界面将会出现管理员账户选项。


# 磁盘管理

DiskGenius

重新分区等，

基础配置：

1.把桌面、下载等移动到非C盘系统盘

# 安装常用软件

## 聊天软件 or 办公

- [x] 微信

  微信的文件管理

  ![image-20240711140237497](https://imgoss.xgss.net/picgo/image-20240711140237497.png?aliyun)

- [x] QQ（或者腾讯TIM）

- [x] 钉钉

- [x] 搜狗输入法，删除默认输入法

- [x] 网易邮箱大师

- [x] 好压

- [x] 百度网盘 、 阿里云盘

- [x] RaiDrive  https://www.raidrive.com/

- [x] xmind

- [x] 迅雷   https://www.xunlei.com/

# mysoft 目录的软件

- [x] Photoshop
- [x] BCompare
- [x] FlashFXP.exe
- [x] MobaXterm
- [x] Nox
- [x] OfficeBox官方绿色版
- [x] scrcpy
- [x] v2（敏感）rayN
- [x] 格式工厂
- [x] Tiny RDM （导出旧数据，导入数据）

## 浏览器

- [x] Chrome浏览器，登录账号同步信息
- [x] 火狐浏览器，登录账号同步信息
- [x] 360浏览器，登录账号同步信息



由于阿里云换了浏览器登录账号，需要使用手机号或者刷脸验证，这时候就要从旧的电脑导出cookie导入到新的电脑浏览器中

使用火狐浏览器的cookie-editor在阿里云的登录页导出cookie，再在新电脑的浏览器中导入cookie。



## 常用软件

- [x] PotPlayer

  

# 编程软件

- [x] git   https://git-scm.com/  配置ssh秘钥

```
  git命令行界面：
  git config --global user.name "your_github_username"
  git config --global user.email "your_github_email"
  生成密钥：
  ssh-keygen -t rsa

  cd 
  cd .ssh
  cat id_rsa.pub   # 把本机的公钥填到gitee和github中，实现免密码登录。
  cat id_rsa

```

  

- [x] Sourcetree  。  https://www.sourcetreeapp.com/  

- [x] VS Code  https://code.visualstudio.com/

  vscode设置中文：

  ```
   安装之后打开软件 ，CTRL+SHIFT+P 搜索 “configure language”
  
  在弹出的搜索框中输入【configure language】，然后选择搜索出来的【Configure Display Language】
  
  ```

  

  

- [x] BCompare

- [x] SwitchHosts

- [x] Navicat   Navicat Premium Lite 是官方推出的免费版本 https://www.navicat.com.cn/download/navicat-premium-lite

  连接可以导出，再导入

- [x] vnc viewer  导出导入连接

- [x] SecureCRT

- [x] 加密软件 -V3.8S_Client

  ```
  地址： 192.168.1.254
  端口： 8020
  yxkj_liuxingxing
  
  ```

  

  



# 文件同步

- [ ] FreeFileSync 定时将重要文件夹备份到移动硬盘，添加定时任务

- [x] ngrok 内网穿透

- [x] 连接 共享

  ```
  \\192.168.1.10\落地页资源共享
  输入用户名和密码
  
  \\192.168.1.50\技术部
  
  账号：jishubu
  密码：ch****jsb74**
  
  ```

  



# 文档编辑



- [x] Typora+PicGo  配置图床  https://g.xgss.net/software/Typora_PicGo_Gitee_markdown_pic.html

- [x] nodepad--
- [x] WPS
- [x] 有道云笔记

# 其他软件

- [x] Nox

- [x] vmware  VMware 虚拟机正式对个人免费  https://www.iplaysoft.com/vwmare-free.html

  将之前旧的虚拟机移动到新的

- [x] Billfish 和 Eagle（收费）  https://www.billfish.cn/

  

- [ ] python3.10

- [x] PotPlayer   http://potplayer.tv/?lang=zh_CN

- [x] Adobe Reader

# 删除自带输入法

点击开始菜单，打开设置。
在设置中找到并点击“时间和语言”。
在“时间和语言”菜单中，点击“语言&区域”。
在语言选项中，找到你想要删除的输入法，点击其右侧的三个点，然后选择“删除”。
如果你电脑只有一个输入法，需要先添加一个其他的输入法，然后再删除不需要的输入法。



