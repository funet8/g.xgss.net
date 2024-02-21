(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{651:function(s,a,n){"use strict";n.r(a);var e=n(17),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"基于linux安装私有化部署svn代码仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于linux安装私有化部署svn代码仓库"}},[s._v("#")]),s._v(" 基于Linux安装私有化部署SVN代码仓库")]),s._v(" "),n("p",[s._v("SVN作为新一代代码版本管理工具，有很多优点，管理方便，逻辑明确，安全性高，代码一致性高。SVN数据存储有两种方式，BDB（事务安全表类型）和FSFS（一种不需要数据库的存储系统），为了避免在服务器连接中断时锁住数据，FSFS是一种更安全也更多人使用的方式。SVN的运行方式也有两种，一种是独立服务器，另一种是借助apache服务，各有利弊，下面就介绍一下这两种方式各自的部署步骤。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://imgoss.xgss.net/picgo/svn.webp.jpg?aliyun",alt:"svn.webp"}})]),s._v(" "),n("h2",{attrs:{id:"_1-安装subversion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装subversion"}},[s._v("#")]),s._v(" 1.安装subversion")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# yum -y  install  subversion\n[root@localhost home]# mkdir -p /home/svn  \t\t\t\t#创建svn目录\n[root@localhost home]# chmod -R 777 /home/svn  \t\t\t#修改目录权限为777\n[root@localhost home]# svnadmin create /home/svn/repos    #创建一个svn版本仓库repos （repos 名字自己起）\n[root@localhost home]# cd /home/svn/repos/conf   \t\t    #进入repos版本仓库下的配置文件目录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_2-设置开机启动文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置开机启动文件"}},[s._v("#")]),s._v(" 2.设置开机启动文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.编辑/etc/rc.local：\n\n[root@localhost ~]# vi /etc/rc.local\n文件内容如下（在touch /var/lock/subsys/local下面添加一行）\n\n#添加：\nsvnserve    -d  -r  /home/svn\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_3-启动svn服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动svn服务"}},[s._v("#")]),s._v(" 3.启动SVN服务")]),s._v(" "),n("p",[s._v("1.启动svn服务，svn服务默认端口为3690，可以使用“netstat -netpl”命令查看服务启动是否成功：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# #svnserve  -d  -r  /home/svn\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2.添加防火墙规则，或者关闭防火墙")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost ~]# vi /etc/sysconfig/iptables\n添加以下内容：\n-A INPUT -m state --state NEW -m tcp -p tcp --dport 3690 -j ACCEPT\n保存后重启防火墙\n[root@localhost ~]# service iptables restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("svnadmin create /home/svn/gamebox\nsvnadmin create /home/svn/sdk")]),s._v(" "),n("p",[s._v("将打包过来的文件覆盖。")]),s._v(" "),n("p",[s._v("如果已经有svn在运行，可以换一个端口运行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# svnserve -d -r /home/svn/repos –listen-port 3391\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样同一台服务器可以运行多个svnserve")]),s._v(" "),n("p",[s._v("停止svn")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# killall svnserve    //停止\n# svnserve -d -r /home/svn/repos // 启动\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2.启动成功后就可以使用了\na.建议采用TortoiseSVN， 连接地址为: svn://your server address （如果指定端口需要添加端口  :端口号")]),s._v(" "),n("h2",{attrs:{id:"备份"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),n("p",[s._v("备份svn项目：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("svnadmin dump /home/svn/gamebox/ > /home/svnbak/gamebox20160525\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("恢复：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("svnadmin load /home/svn/gamebox/ < /home/svnbak/gamebox20160525\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("将原先服务器的配置文件备份后复制到新服务器中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#/opt/svn/iitshare/conf目录下\nauthz、passwd、svnserve.conf文件\n\n新建项目：\nsvnadmin create /home/svn/webgame\n\n\n修改配置：\n\n[root@zck password]# killall svnserve    //停止\n[root@zck password]# svnserve -d -r /home/svn // 启动\n\nsvn地址：\nsvn://192.168.1.9/sdk\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("参考：\nhttp://www.linuxidc.com/Linux/2014-01/95640.htm\nhttp://www.jb51.net/os/RedHat/73031.html")])])}),[],!1,null,null,null);a.default=t.exports}}]);