(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{662:function(s,t,a){"use strict";a.r(t);var i=a(17),g=Object(i.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mini小主机all-in-one搭建教程1-安装esxi7-0虚拟机系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mini小主机all-in-one搭建教程1-安装esxi7-0虚拟机系统"}},[s._v("#")]),s._v(" Mini小主机All-in-one搭建教程1-安装Esxi7.0虚拟机系统")]),s._v(" "),a("h1",{attrs:{id:"硬件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件介绍"}},[s._v("#")]),s._v(" 硬件介绍")]),s._v(" "),a("p",[s._v("在狗东买的 "),a("a",{attrs:{href:"https://u.jd.com/Pq3ObYl",target:"_blank",rel:"noopener noreferrer"}},[s._v("极摩客M2"),a("OutboundLink")],1),s._v(" 到手价是2799元")]),s._v(" "),a("p",[s._v("具体配置如下： 酷睿英特尔11代标压i7 11390H  64G+1TB固态。")]),s._v(" "),a("p",[s._v("以下是安装Esxi7.0虚拟机系统的教程。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231010172521256.png?aliyun",alt:"image-20231010172521256"}})]),s._v(" "),a("h1",{attrs:{id:"安装esxi7-0虚拟机系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装esxi7-0虚拟机系统"}},[s._v("#")]),s._v(" 安装Esxi7.0虚拟机系统")]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("需要1个U盘，1G以上的就可以，用来安装Esxi系统")]),s._v(" "),a("h2",{attrs:{id:"下载镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像文件"}},[s._v("#")]),s._v(" 下载镜像文件")]),s._v(" "),a("p",[s._v("我使用的是ESXi-7.0U3G ，用写盘工具rufus直接写入到U盘内进行启动安装。")]),s._v(" "),a("p",[s._v("链接：https://pan.baidu.com/s/1_zHnAoUSn3-rfD9Tw5qflg?pwd=baji")]),s._v(" "),a("p",[s._v("提取码：baji")]),s._v(" "),a("h2",{attrs:{id:"开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[s._v("#")]),s._v(" 开机启动")]),s._v(" "),a("p",[s._v("写入完成后，开机按F7选择U盘进行启动。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/c2cb9237947f4664a528428ec2444188.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/6f48362c4007472ab21628e2bf39305d.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/b842614312bc4a6cb828df09f8d97450.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"接下来耐心等待安装程序启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接下来耐心等待安装程序启动"}},[s._v("#")]),s._v(" 接下来耐心等待安装程序启动")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/c6099e7bbc804a9997734699a7837888.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"按下回车继续下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按下回车继续下一步"}},[s._v("#")]),s._v(" 按下回车继续下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164539565.png?aliyun",alt:"image-20230914164539565"}})]),s._v(" "),a("h2",{attrs:{id:"按下f11继续下一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按下f11继续下一步"}},[s._v("#")]),s._v(" 按下F11继续下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164605530.png?aliyun",alt:"image-20230914164605530"}})]),s._v(" "),a("h2",{attrs:{id:"选择硬盘安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择硬盘安装"}},[s._v("#")]),s._v(" 选择硬盘安装")]),s._v(" "),a("p",[s._v("这里我选择安装到NVME的硬盘上所以就选择第一块硬盘，回车")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164630188.png?aliyun",alt:"image-20230914164630188"}})]),s._v(" "),a("h2",{attrs:{id:"键盘布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘布局"}},[s._v("#")]),s._v(" 键盘布局")]),s._v(" "),a("p",[s._v("选择默认即可，直接回车下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164653041.png?aliyun",alt:"image-20230914164653041"}})]),s._v(" "),a("h2",{attrs:{id:"设置账户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置账户密码"}},[s._v("#")]),s._v(" 设置账户密码")]),s._v(" "),a("p",[s._v("密码需要包含大小写和特殊符号，不然不能下一步，设置完成后回车")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164714706.png?aliyun",alt:"image-20230914164714706"}})]),s._v(" "),a("h2",{attrs:{id:"重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),a("p",[s._v("接下来按下F11后进行安装，安装完成后会自动重启。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164733480.png?aliyun",alt:"image-20230914164733480"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164746328.png?aliyun",alt:"image-20230914164746328"}})]),s._v(" "),a("h2",{attrs:{id:"esxi安装完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esxi安装完成"}},[s._v("#")]),s._v(" Esxi安装完成")]),s._v(" "),a("p",[s._v("到这里，我们的Esxi就已经安装完成了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/00db6b626d0b42a6a82f09369866171c.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164841331.png?aliyun",alt:"image-20230914164841331"}})]),s._v(" "),a("p",[s._v("输入屏幕上的IP到浏览器中，输入账户root和刚才设置的密码，即可登陆成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164913664.png?aliyun",alt:"image-20230914164913664"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914164946997.png?aliyun",alt:"image-20230914164946997"}})]),s._v(" "),a("h2",{attrs:{id:"修改exsi的ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改exsi的ip地址"}},[s._v("#")]),s._v(" 修改Exsi的IP地址")]),s._v(" "),a("p",[s._v("登录到VMware ESXi Direct控制台用户界面（DCUI）。完成ESXi服务器的安装后，将显示DCUI界面，如下所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230916164018453.png?aliyun",alt:"image-20230916164018453"}})]),s._v(" "),a("p",[s._v("请按F2键进入自定义系统设置")]),s._v(" "),a("p",[s._v("这将显示一个登录屏幕，如下图所示。输入root用户密码，然后按Enter键。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230916164053399.png?aliyun",alt:"image-20230916164053399"}})]),s._v(" "),a("p",[s._v("成功登录后，将显示系统自定义设置，如下面的屏幕快照所示。使用键盘上的箭头键选择Configure Management Network选项，然后单击Enter。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230916164109344.png?aliyun",alt:"image-20230916164109344"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230916164122241.png?aliyun",alt:"image-20230916164122241"}})]),s._v(" "),a("p",[s._v("默认情况下，第二个选项“使用动态IPv4地址和网络配置”处于选中状态，这意味着ESXi主机将从网络中的DHCP服务器获取及接收IP。使用箭头键选择第三个选项“设置静态IPv4地址和网络配置”，然后按空格键以选中该选项。之后，您可以键入静态IP地址、子网掩码和默认网关，如下图所示。配置完成后，按Enter键继续。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230916164149999.png?aliyun",alt:"image-20230916164149999"}})]),s._v(" "),a("p",[s._v("Esxi系统的安装教程到这里就结束了，基本上没有什么难度，接下来就是软路由、群晖NAS、还有Windows系统安装的教程了，我们继续。")]),s._v(" "),a("h2",{attrs:{id:"esxi激活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esxi激活"}},[s._v("#")]),s._v(" Esxi激活")]),s._v(" "),a("p",[s._v("VMware ESXi7.0许可证密钥附使用教程：https://www.downkuai.com/soft/129134.html")]),s._v(" "),a("h2",{attrs:{id:"开启远程ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启远程ssh"}},[s._v("#")]),s._v(" 开启远程SSH")]),s._v(" "),a("p",[s._v("进入web管理界面，依次点操作，服务，启用Secure shell")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230918091241899.png?aliyun",alt:"image-20230918091241899"}})]),s._v(" "),a("p",[s._v("再使用ssh远程链接工具连接。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230918091429706.png?aliyun",alt:"image-20230918091429706"}})]),s._v(" "),a("h1",{attrs:{id:"二、安装openwrt软路由系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装openwrt软路由系统"}},[s._v("#")]),s._v(" 二、安装Openwrt软路由系统")]),s._v(" "),a("h2",{attrs:{id:"下载镜像包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像包"}},[s._v("#")]),s._v(" 下载镜像包")]),s._v(" "),a("p",[s._v("首先下载软路由的懒人镜像包，解压后直接导入即可，使用非常方便，无需进行复杂的参数配置。")]),s._v(" "),a("p",[s._v("链接：https://pan.baidu.com/s/1ke3GHDvO5OmqGXJliNjtUQ?pwd=scqu")]),s._v(" "),a("p",[s._v("提取码：scqu")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/b600236e9b384f9983194d3546e23592.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"导入虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入虚拟机"}},[s._v("#")]),s._v(" 导入虚拟机")]),s._v(" "),a("p",[s._v("打开Esxi虚拟机的管理界面，点击“创建/注册虚拟机”，选择“从VOF或OVA文件部署虚拟机”，点击“下一页”")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914165158012.png?aliyun",alt:"image-20230914165158012"}})]),s._v(" "),a("h2",{attrs:{id:"输入名称下一页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入名称下一页"}},[s._v("#")]),s._v(" 输入名称下一页")]),s._v(" "),a("p",[s._v("名称可以随意输入，然后导入解压的懒人包文件，点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914165214454.png?aliyun",alt:"image-20230914165214454"}})]),s._v(" "),a("p",[s._v("选择默认的存储位置，继续下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914165247821.png?aliyun",alt:"image-20230914165247821"}})]),s._v(" "),a("p",[s._v("然后继续下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914165304738.png?aliyun",alt:"image-20230914165304738"}})]),s._v(" "),a("p",[s._v("这里提示缺少磁盘映像，无需理会，点击完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/db3d0b26646a4551a7e8fbefa9788c66.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("导入完成后，它会自己启动，到这里说明已经导入成功了，正在启动")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/db3d0b26646a4551a7e8fbefa9788c66.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"修改openwrt的ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改openwrt的ip地址"}},[s._v("#")]),s._v(" 修改Openwrt的ip地址")]),s._v(" "),a("p",[s._v("接下来我们设置一下Openwrt旁路由的ip地址，按下回车键，输入命令，")]),s._v(" "),a("p",[s._v("vi etc/config/network")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/847ebe32de1e4bf2a6335f69c7190790.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("找到option ipaddr一栏，按下i进行编辑，改成和主路由下同一网段的任意ip即可，这里我的网段是192.168.1.xx,所以给我改成192.168.1.3")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/6a0aef724e6e441dbd35e40662edc63d.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230918093338043.png?aliyun",alt:"image-20230918093338043"}})]),s._v(" "),a("p",[s._v("修改好后，按下Esc键退出编辑模式，Shift+：唤醒末行模式，然后wq命令保存退出文件编辑，继续输入命令reboot进行重启:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/86e6c7cd7d294473bda3934b850817d2.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("设置好ip后，通过刚才设置的ip地址就可以访问旁路由了，默认密码：password")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/92816cbb41c44806a2ab9462b8f4bd38.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/e685cdc068ba495883d7d6bc0100730e.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("接下来进行简单设置下，就可以正常链接网络了，首先进入网络-接口，进入lan口配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/c609c470d49146d29870451a009a11a9.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("设置ipv4网关为主路由的网关，DNS服务器114.114.114.114即可，DHCP接口忽略打钩，设置完成后点击保存应用即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/bcfb320e66c946339e2d675a614b50cf.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/05bf398ebfd94e4b8f04840d14ea63d6.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("接下来测试下网络状态，有数据进行返回说明网络正常，到这里就已经全部配置好了，需要走旁路由的设备，设置下网关就可以愉快的玩耍啦！")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/077451e1ac1148c3838115d366349b35.png?aliyun",alt:"img"}})]),s._v(" "),a("h1",{attrs:{id:"三、群晖nas系统的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、群晖nas系统的安装"}},[s._v("#")]),s._v(" 三、群晖NAS系统的安装")]),s._v(" "),a("h2",{attrs:{id:"下载镜像包-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像包-2"}},[s._v("#")]),s._v(" 下载镜像包")]),s._v(" "),a("p",[s._v("首先下载群晖的懒人镜像包，解压后直接导入，添加一块系统盘即可，使用非常方便，无需进行复杂的参数配置。链接：https://pan.baidu.com/s/1VCBo5atfVO5mlcEcDkMlLA?pwd=oxtf 提取码：oxtf")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/92615673e6b4458fb1b4f6e9c452fbe7.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"创建虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[s._v("#")]),s._v(" 创建虚拟机")]),s._v(" "),a("p",[s._v("打开Esxi虚拟机的管理界面，点击“创建/注册虚拟机”，选择“从VOF或OVA文件部署虚拟机”，点击“下一页”")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/afbd2db3829d47bebc85871ca6322cb1.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("名称可以随意输入，然后导入解压的懒人包文件，点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230914170442590.png?aliyun",alt:"image-20230914170442590"}})]),s._v(" "),a("p",[s._v("选择默认的存储空间，继续下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/f8845084f785401b9d42a7ac4f7f4598.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("因为一会需要添加一块硬盘所以，取消勾选自动打开电源选项，然后点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/5d00168b04de46f58b7b8f3eb07cce99.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("提示缺少磁盘映像，不用管他，继续点击完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/dced7f55ec814f0c80f88ede19354e03.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"编辑虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑虚拟机"}},[s._v("#")]),s._v(" 编辑虚拟机")]),s._v(" "),a("p",[s._v("右键刚才导入的虚拟机，点击编辑设置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/ae414d45eeaf4114be77a2331c0a6e76.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("点击左上角，添加硬盘，增加一块数据盘，用来存放系统使用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/093b7610b5684f95a23c3d1031d6b76b.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("可以根据自己的需求自行设置硬盘的大小")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/fd0072d0b63b4959bd0752b89fc95742.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"配置网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置网络"}},[s._v("#")]),s._v(" 配置网络")]),s._v(" "),a("p",[s._v("网络适配器的适配器类型这里修改成E1000e，设置完成后点击保存。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/81c22e565f8f47e79116957e3c82650e.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("接下来还有一个重要的地方需要设置，点击网络-编辑设置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/cfb13890ddb14343a514d3821e7567cf.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("安全这里都设置成接受，不然无法搜索到设备，设置完成后保存")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/1ac8aeadf23b405284f991ba37cd3f82.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("点击虚拟机交换机-编辑设置，安全也都全部设置为接受状态")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/3ba193e0bd584f6aa47b47015b3c3a74.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/eecf868ec6ef47ffaa2fda437aa7c29e.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("上面的步骤都设置好后，点击打开电源，出现如下的Dos界面，就说明已经启动完成了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"H:/typora_images/29d20c4970004cc79d3749e1ca91ce2a.png",alt:"img"}})]),s._v(" "),a("p",[s._v("打开Synology Assistant群晖助手软件，搜索设备，右键联机进行安装系统")]),s._v(" "),a("p",[s._v("http://soft.onlinedown.net/soft/10008842.htm")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/0a7b9051b0db4981ad847c57acd811b8.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/b8c11fadb03f4a29ba75c776a3d41b79.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("选择群晖的系统文件，点击下一步")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/c8b1eef06806418a9d9e0e728012fad2.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("勾选了解删除，然后点击继续")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/a4bcfede2297443bbd2c4dcbd2eca011.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("耐心等待安装完成，安装完成后，会自动进行重启")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/00098a79263b421f808f2669cdd5b58c.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/084362d1b4684b6fb835d8c6bcd946a7.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("安装完成后，简单设置下用户名和密码即可使用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/ac45ab019bb64144aa0e2a1bb79a4fc4.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/78ab8570825e49bebe8a1ff7eedbf181.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/f7b5f88756614b98a2e9bce015e17636.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("到这里，ESxi安装群晖的步骤已经全部完成了，是不是非常简单呢。接下来我们继续安装Windows")]),s._v(" "),a("h1",{attrs:{id:"四、windows系统的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、windows系统的安装"}},[s._v("#")]),s._v(" 四、Windows系统的安装")]),s._v(" "),a("h2",{attrs:{id:"下载镜像包-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像包-3"}},[s._v("#")]),s._v(" 下载镜像包")]),s._v(" "),a("p",[s._v("首先下Windows系统的懒人镜像包，解压后直接导入即可，使用非常方便，无需进行复杂的参数配置。链接：https://pan.baidu.com/s/15Z00suxmWmjrwzUKuOzkGQ?pwd=pjoa 提取码：pjoa")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/e698895c617748d18381ee2fe6b10f07.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"创建虚拟机-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机-2"}},[s._v("#")]),s._v(" 创建虚拟机")]),s._v(" "),a("p",[s._v("打开Esxi虚拟机的管理界面，点击“创建/注册虚拟机”，选择“从VOF或OVA文件部署虚拟机”，点击“下一页”")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/d200e9ec7ca4485f8a68770d6182a76c.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("名称可以随意输入，然后导入解压的懒人包文件，点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/d2ca9be8cdee44cb9ec51b4dd927915e.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("选择存储的分区，点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/862dfe728fff4c1a9e15b25dc712ef6e.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("继续点击下一页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/3c4fe8beb455425397dbc5018962a7f1.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("提示缺少磁盘映像，不用管他，继续点击完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/6c1b638443b0414282a0d433bc7d4262.png?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"导入完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入完成"}},[s._v("#")]),s._v(" 导入完成")]),s._v(" "),a("p",[s._v("导入完成后，系统会自己启动，首次开机比较慢耐心等待部署完成即可使用")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/116c61928c8c41058717a8153a140ebb.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/72153e9ed1aa4d7a975332eec9941fb2.png?aliyun",alt:"img"}})]),s._v(" "),a("p",[s._v("到这里，ESXi All in one的三个系统都已经全部安装完成了，软路由+群晖NAS+win11系统，日常待机CPU占用极低，整机的功率在15-20w左右，非常低根本不用考虑电费问题，我感觉可以在装个Linux和网心云系统跑跑赚赚电费也是完全可以的，后面在慢慢折腾吧。")]),s._v(" "),a("p",[s._v("以上就是本文的全部内容了，希望能帮到大家，如果大家部署期间出现无法解决的问题，欢迎到评论区互相讨论，因为系统安装起来比较复杂，所以我都制作成了懒人包，导入就可以使用，非常的方便，如果需要其他系统的懒人包欢迎大家留言我进行制作分享。如有遗漏大家也可以联系我，我讲进行补齐与修正！喜欢本教程的朋友，帮忙点赞＋收藏＋关注，感谢大家！")]),s._v(" "),a("p",[s._v("版权声明：本文为CSDN博主「李佑辰」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。")]),s._v(" "),a("p",[s._v("原文链接：https://blog.csdn.net/u012514495/article/details/128437480")])])}),[],!1,null,null,null);t.default=g.exports}}]);