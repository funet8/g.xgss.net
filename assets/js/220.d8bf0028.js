(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{799:function(s,e,a){"use strict";a.r(e);var t=a(17),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos7安装web服务脚本lnmp和vsftpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装web服务脚本lnmp和vsftpd"}},[s._v("#")]),s._v(" Centos7安装WEB服务脚本LNMP和vsftpd")]),s._v(" "),a("p",[s._v("本文主要介绍笔者经常用到的shell脚本，在centos7系统下安装LNMP和FTP，还有redis和docker，主要针对服务器的。\nL=Linux(这里系统Centos7)，N=Nginx（Yum安装 nginx），M=Mysql(这里安装MariaDB-10.2.9)，P=PHP7和PHP8")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/shell.webp.jpg?aliyun",alt:"shell.webp"}})]),s._v(" "),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),a("p",[s._v("脚本说明：\n1.yum 安装nginx")]),s._v(" "),a("p",[s._v("2.将nginx主配置改为 /etc/nginx/nginx.conf")]),s._v(" "),a("p",[s._v("3.nginx的子站点配置防止目录：/data/conf/sites-available/")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# wget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/centos7_intall_php7.3/CentOS7.x_Nginx.sh\n# sh CentOS7.x_Nginx.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"安装openresty-与nginx二选一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装openresty-与nginx二选一"}},[s._v("#")]),s._v(" 安装openresty（与Nginx二选一）")]),s._v(" "),a("p",[s._v("脚本说明：\n1.源码包安装openresty-1.19.9.1")]),s._v(" "),a("p",[s._v("2.将nginx主配置改为 /etc/nginx/nginx.conf")]),s._v(" "),a("p",[s._v("3.nginx的子站点配置防止目录：/data/conf/sites-available/")]),s._v(" "),a("p",[s._v("4.配置WAF")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# wget https://gitee.com/funet8/waf/raw/master/CentOS7_install_openresty.sh\n\n# sh CentOS7_install_openresty.sh    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"安装php7-3-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装php7-3-7"}},[s._v("#")]),s._v(" 安装php7.3.7")]),s._v(" "),a("p",[s._v("脚本说明：")]),s._v(" "),a("p",[s._v("1.下载PHP7.3.3源码包安装")]),s._v(" "),a("p",[s._v("2.安装openssl、memcache、phpredis扩展")]),s._v(" "),a("p",[s._v("3.修改配端口7300，时区、PHP进程数等。")]),s._v(" "),a("p",[s._v("4.安装目录 /usr/local/php7.3 ，用户 www。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("端口:7300\nwget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/centos7_intall_php7.3/CentOS7_Install_PHP7.3_PHPFPM.sh\n上传安装包\nsh CentOS7_Install_PHP7.3_PHPFPM.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"安装php8-0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装php8-0-8"}},[s._v("#")]),s._v(" 安装php8.0.8")]),s._v(" "),a("p",[s._v("脚本说明：")]),s._v(" "),a("p",[s._v("1.下载php-8.0.8源码包安装")]),s._v(" "),a("p",[s._v("2.安装 phpredis、zip扩展")]),s._v(" "),a("p",[s._v("3.修改配置，端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget  https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/centos7_install_php8/centos7_install_php8.sh\n端口:8100\nsh centos7_install_php8.sh\n\n将PHP改为PHP8\nrm /usr/bin/php\ncp -a /data/php-8.0.8/bin/php8.0  /usr/bin/php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"安装vsftpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vsftpd"}},[s._v("#")]),s._v(" 安装Vsftpd")]),s._v(" "),a("p",[s._v("功能介绍：")]),s._v(" "),a("p",[s._v("1.创建常用目录")]),s._v(" "),a("p",[s._v("2.yum安装vsftpd，开放iptables的端口")]),s._v(" "),a("p",[s._v("3.修改配置，默认用户 yxkj_web，密码 Password123，22端口改为62920。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# wget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/shell/3-CentOS7.x_Vsftp.sh\n修改参数\n# sh 3-CentOS7.x_Vsftp.sh\n\n\n增加用户\n# wget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/shell/3-CentOS6_7_Vsftp_Add_User.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"安装mariadb数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mariadb数据库"}},[s._v("#")]),s._v(" 安装MariaDB数据库")]),s._v(" "),a("p",[s._v("脚本说明：")]),s._v(" "),a("p",[s._v("1.下载MariaDB-10.2.9 RPM安装包。")]),s._v(" "),a("p",[s._v("2.移除所有原有的mysql软件包和配置文件")]),s._v(" "),a("p",[s._v("3.创建用户和用户组 mysql，端口 3306")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("安装数据库\n# wget https://gitee.com/funet8/MYSQL/raw/master/RPM_Install_MariaDB/RPM_Install_MariaDB-Centos7-more-port.sh\n# sh RPM_Install_MariaDB-Centos7-more-port.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"安装mariadb多端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mariadb多端口"}},[s._v("#")]),s._v(" 安装MariaDB多端口")]),s._v(" "),a("p",[s._v("多端口脚本说明：\n端口： 61920 61921 61922 61923 61924\n数据库文件目录： /data/mysql/$port\n数据库配置目录： /data/mysql/etc/\n数据库慢查询目录： /data/mysql/slowQuery/\n数据库配置：   /data/mysql/etc/$port.cnf")]),s._v(" "),a("p",[s._v("默认用户： star_user 密码： Passwd123")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# wget https://gitee.com/funet8/MYSQL/raw/master/more-mysql-instance/more-mysql-instance.sh\n\n# sh more-mysql-instance.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"安装redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装redis"}},[s._v("#")]),s._v(" 安装redis")]),s._v(" "),a("p",[s._v("1.下载 redis源码包")]),s._v(" "),a("p",[s._v("2.修改端口63920，数据持久化目录： /data/redis/${redis_port}")]),s._v(" "),a("p",[s._v("3.默认密码：q7N3swPfFfsdfs4fyPBqN4Zd1")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/shell/CentOS7.x_Redis_install.sh\n修改redis密码\nsh CentOS7.x_Redis_install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),a("p",[s._v("脚本说明")]),s._v(" "),a("p",[s._v("1.yum安装 docker")]),s._v(" "),a("p",[s._v("2.修改docker镜像默认存储位置 /data/docker/images")]),s._v(" "),a("p",[s._v("3.中国官方镜像加速")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget https://gitee.com/funet8/centos6_LANP_dockerfile/raw/master/shell/CentOS6_7_intall_docker.sh\nsh CentOS6_7_intall_docker.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);