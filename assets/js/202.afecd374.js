(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{786:function(s,a,e){"use strict";e.r(a);var n=e(17),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用xtrabackup将阿里云的mysql5-7备份文件恢复到自建服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用xtrabackup将阿里云的mysql5-7备份文件恢复到自建服务器"}},[s._v("#")]),s._v(" 使用XtraBackup将阿里云的MySQL5.7备份文件恢复到自建服务器")]),s._v(" "),e("p",[s._v("最近有个任务是需要把阿里云rds数据库备份再转移到ecs服务器中，本篇文章是通过官方网站上再结合自己的操作笔记备忘。")]),s._v(" "),e("p",[s._v("RDS数据库的版本是 myql5.7，ECS服务器上的版本是mysql5.7")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130155249636.png?aliyun",alt:"image-20221130155249636"}})]),s._v(" "),e("h1",{attrs:{id:"一、备份前的准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、备份前的准备"}},[s._v("#")]),s._v(" 一、备份前的准备")]),s._v(" "),e("h2",{attrs:{id:"_1-ecs安装mysql5-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ecs安装mysql5-7"}},[s._v("#")]),s._v(" 1.ECS安装mysql5.7")]),s._v(" "),e("p",[s._v("如果安装了，请忽略。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Centos7系统下编译安装Mysql5.7\n# wget https://gitee.com/funet8/MYSQL/raw/master/Mysql_Shell/CentOS7_Install_mysql5_7.sh\n# sh CentOS7_Install_mysql5_7.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_2-ecs安装percona-xtrabackup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ecs安装percona-xtrabackup"}},[s._v("#")]),s._v(" 2.ECS安装Percona XtraBackup")]),s._v(" "),e("p",[s._v("对于MySQL 5.7、5.6或5.5实例：安装"),e("a",{attrs:{href:"https://docs.percona.com/percona-xtrabackup/2.4/installation/apt_repo.html?spm=a2c4g.11186623.0.0.6e0077b8JxzrRj",target:"_blank",rel:"noopener noreferrer"}},[s._v("Percona XtraBackup 2.4"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("对于MySQL 8.0实例，安装 "),e("a",{attrs:{href:"https://docs.percona.com/percona-xtrabackup/8.0/installation/apt_repo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Percona XtraBackup 8.0"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("我这边安装Percona XtraBackup 2.4 "),e("a",{attrs:{href:"https://docs.percona.com/percona-xtrabackup/2.4/installation/yum_repo.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考网站"),e("OutboundLink")],1),s._v("：https://docs.percona.com/percona-xtrabackup/2.4/installation/yum_repo.html")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("安装percona-release配置工具：\nroot您可以通过以用户身份或使用 以下命令运行以下命令来安装 percona-release 的 yum 存储库\n# yum install -y https://repo.percona.com/yum/percona-release-latest.noarch.rpm\n\n测试存储库:\n# yum list | grep percona\n\n启用存储库：\n如果Percona XtraBackup 打算与上游 MySQL 服务器结合使用，您只需要启用tools 存储库：\n# percona-release enable-only tools\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("通过运行安装Percona XtraBackup")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# yum install -y percona-xtrabackup-24\n\n# xtrabackup -version\nxtrabackup: recognized server arguments: --datadir=/var/lib/mysql \nxtrabackup version 2.4.26 based on MySQL server 5.7.35 Linux (x86_64) (revision id: 19de43b)\nPercona XtraBackup 安装成功。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"_3-安装解压工具qpress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装解压工具qpress"}},[s._v("#")]),s._v(" 3.安装解压工具qpress")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('wget "http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1608011575185/qpress-11-linux-x64.tar"\ntar xvf qpress-11-linux-x64.tar\nchmod 775 qpress\ncp qpress /usr/bin\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h1",{attrs:{id:"二、下载备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、下载备份"}},[s._v("#")]),s._v(" 二、下载备份")]),s._v(" "),e("p",[s._v("进入RDS数据库---\x3e实例列表---\x3e备份恢复")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130112725052.png?aliyun",alt:"image-20221130112725052"}})]),s._v(" "),e("p",[s._v("复制内网地址，公网是需要收费的。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130112852629.png?aliyun",alt:"image-20221130112852629"}})]),s._v(" "),e("p",[s._v("在Linux服务器上，执行如下命令下载物理备份。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# wget -c 'http://...' -O test1_qp.xb\n\n命令：\n# wget -c 'http://rdsbak-st-v2.oss-cn-shenzhen-internal.aliyuncs.com/custins34273877/hins19034500_data_20221129104523_qp.xb?Expires=******************************************************&Region=cn-shenzhen' -O test1_qp.xb\n\n# ll -h test1_qp.xb \n-rw-r--r-- 1 root root 8.7G Nov 29 10:48 test1_qp.xb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h1",{attrs:{id:"二、解压和恢复备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、解压和恢复备份"}},[s._v("#")]),s._v(" 二、解压和恢复备份")]),s._v(" "),e("p",[s._v("1.在Linux服务器上，创建一个目录（例如/home/mysql/data）用于存放解压后的文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /home/mysql/data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2.解压压缩包。根据压缩包的后缀选择解压命令。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## 先解包\ncat test1_qp.xb | xbstream -x -v -C /home/mysql/data  【已执行】\n\n## 然后解压\n### 对于MySQL 5.6/5.7\ninnobackupex --decompress --remove-original /home/mysql/data 【已执行】\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130144623802.png?aliyun",alt:"image-20221130144623802"}})]),s._v(" "),e("p",[s._v("说明 您可以把test1和/home/mysql/data替换为实际的文件名和路径。")]),s._v(" "),e("p",[s._v("3.执行如下命令，查询解压后生成的文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ls -l /home/mysql/data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4.执行如下命令，恢复解压好的备份文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## MySQL 5.6/5.7\ninnobackupex --defaults-file=/home/mysql/data/backup-my.cnf --apply-log /home/mysql/data 【已执行】\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130145751052.png?aliyun",alt:"image-20221130145751052"}})]),s._v(" "),e("p",[s._v("1.恢复时请耐心等待，若系统返回如下类似结果，则说明备份文件已成功恢复到自建数据库。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/p47412.jpg?aliyun",alt:"img"}})]),s._v(" "),e("p",[s._v("2.若系统返回"),e("code",[s._v("xtrabackup: Unknown error 3613")]),s._v("，请将Percona XtraBackup更新到最新版本后再次尝试。")]),s._v(" "),e("p",[s._v("3.若系统返回如下报错，可以用"),e("code",[s._v("rm -rf /var/lib/mysql")]),s._v("命令清空文件夹内文件，然后用"),e("code",[s._v("chown -R mysql:mysql /var/lib/mysql")]),s._v("修改权限。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/p187242.png?aliyun",alt:"img"}})]),s._v(" "),e("p",[s._v("4.若系统返回如下报错，请参见"),e("a",{attrs:{href:"https://help.aliyun.com/document_detail/41817.html?spm=5176.19908310.help.dexternal.6fbe1450ernae5#section-ooe-3fz-r97",target:"_blank",rel:"noopener noreferrer"}},[s._v("前提条件"),e("OutboundLink")],1),s._v("中的第2项说明。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/p298939.png?aliyun",alt:"恢复失败"}})]),s._v(" "),e("h1",{attrs:{id:"三、启动mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、启动mysql"}},[s._v("#")]),s._v(" 三、启动MySQL")]),s._v(" "),e("p",[s._v("1.为避免版本问题，需修改backup-my.cnf文件，具体操作步骤如下。")]),s._v(" "),e("p",[s._v("执行如下命令，以文本方式编辑backup-my.cnf文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# vi /home/mysql/data/backup-my.cnf\n添加如下参数：\nlower_case_table_names=1\nport = 61922\ndatadir=/home/mysql/data\n        \n注释掉如下自建数据库不支持的参数：\n\n#innodb_log_checksum_algorithm\n#innodb_fast_checksum\n#innodb_log_block_size\n#innodb_doublewrite_file\n#innodb_encrypt_algorithm\n#rds_encrypt_data\n#redo_log_version\n#master_key_id\n#server_uuid\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("说明 如果自建数据库使用的是MyISAM引擎，无法兼容阿里云的InnoDB，则需要多注释掉如下参数并增加skip-grant-tables参数：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#innodb_log_checksum_algorithm=strict_crc32\n#redo_log_version=1\nskip-grant-tables\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("按Esc键，然后输入:wq并回车进行保存。")]),s._v(" "),e("p",[s._v("2.执行如下命令，修改文件属主，并确定文件所属为MySQL用户。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chown -R mysql:mysql /home/mysql/data\n\n执行如下命令，启动MySQL进程。\nmysqld --defaults-file=/home/mysql/data/backup-my.cnf --user=mysql --datadir=/home/mysql/data &\n\n关闭本地的mysql否则会报错\n[ERROR] Another process with pid 27300 is using unix socket file.\n\n\n# netstat -tunpl|grep mysql\ntcp6       0      0 :::61922                :::*                    LISTEN      9366/mysqld    \n恢复成功。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130150908531.png?aliyun",alt:"image-20221130150908531"}})]),s._v(" "),e("p",[s._v("root密码问题：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("如果您的实例版本为MySQL 5.5或5.6，需要重置root密码方可正常使用。更多信息，请参见"),e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("如果您的实例版本为MySQL 5.7或8.0，则root密码即自建库的root密码。")])]),s._v(" "),e("li",[e("p",[s._v("如果启动MySQL进程报错，可以尝试修改存储引擎。更多信息，请参见"),e("a",{attrs:{href:"https://help.aliyun.com/document_detail/41817.html?spm=5176.19908310.help.dexternal.6fbe1450ernae5#section-ohm-rf7-3mx",target:"_blank",rel:"noopener noreferrer"}},[s._v("常见问题"),e("OutboundLink")],1),s._v("。")])])]),s._v(" "),e("p",[s._v("登录MySQL数据库以验证进程启动成功")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u<源RDS实例账号> -p<对应密码>\n\n# mysql -u<源RDS实例账号> -h127.0.0.1 -P 61922 -p<对应密码>\n\nmysql -uxshd_mysql -h127.0.0.1 -P 61922 -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("进入数据库：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221130151418406.png?aliyun",alt:"image-20221130151418406"}})]),s._v(" "),e("h1",{attrs:{id:"通过binlog日志恢复数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过binlog日志恢复数据"}},[s._v("#")]),s._v(" 通过binlog日志恢复数据")]),s._v(" "),e("p",[s._v("1.下载binlog日志")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget -c 'URL路径' -O /data/tmp/binlog/mysql-bin1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2.导入数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysqlbinlog  -d 指定数据库\nmysql -f 忽略报错，强制导入\nmysqlbinlog  -d '指定数据库'  /data/tmp/binlog/mysql-bin1 | mysql -u root -P61922 -f\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h1",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),e("p",[s._v("官方帮助文档："),e("a",{attrs:{href:"https://help.aliyun.com/knowledge_detail/41817.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云-RDS MySQL物理备份文件恢复到自建数据库"),e("OutboundLink")],1),s._v(" https://help.aliyun.com/knowledge_detail/41817.html")])])}),[],!1,null,null,null);a.default=t.exports}}]);