(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{685:function(a,s,t){"use strict";t.r(s);var n=t(17),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apollo的部署和动态配置基础使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apollo的部署和动态配置基础使用"}},[a._v("#")]),a._v(" Apollo的部署和动态配置基础使用")]),a._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，以及能实现灰度发布等实现，配置修改后能够动态推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。")]),a._v(" "),t("h2",{attrs:{id:"服务器环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境"}},[a._v("#")]),a._v(" 服务器环境")]),a._v(" "),t("h3",{attrs:{id:"测试系统介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试系统介绍"}},[a._v("#")]),a._v(" 测试系统介绍")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("系统")]),a._v(" "),t("th",[a._v("Centos7")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("java环境")]),a._v(" "),t("td",[a._v("java1.8")])]),a._v(" "),t("tr",[t("td",[a._v("数据库")]),a._v(" "),t("td",[a._v("MariaDB-10.2.9")])]),a._v(" "),t("tr",[t("td",[a._v("IP")]),a._v(" "),t("td",[a._v("192.168.1.3")])])])]),a._v(" "),t("h3",{attrs:{id:"安装java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装java"}},[a._v("#")]),a._v(" 安装java")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nmkdir /data/software/\ncd /data/software/\nwget http://js.funet8.com/centos_software/jdk-8u211-linux-x64.tar.gz\nmkdir /usr/local/java/\ntar -zxvf jdk-8u211-linux-x64.tar.gz -C /usr/local/java/\n\necho '\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_211\nexport JRE_HOME=${JAVA_HOME}/jre\nexport CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib\nexport PATH=${JAVA_HOME}/bin:$PATH\n'>> /etc/profile\nsource /etc/profile\n\nln -s /usr/local/java/jdk1.8.0_211/bin/java /usr/bin/java\n\njava -version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("h2",{attrs:{id:"下载apollo程序文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载apollo程序文件"}},[a._v("#")]),a._v(" 下载apollo程序文件")]),a._v(" "),t("p",[a._v("从github上下载相关配置文件，下载的是"),t("a",{attrs:{href:"https://github.com/apolloconfig/apollo/releases/tag/v1.9.2",target:"_blank",rel:"noopener noreferrer"}},[a._v("apollo1.9.2"),t("OutboundLink")],1),a._v("的，大家可以根据下载地址自行选择："),t("a",{attrs:{href:"https://github.com/apolloconfig/apollo/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("apollo版本下载地址"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"下载apollo数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载apollo数据库"}},[a._v("#")]),a._v(" 下载apollo数据库")]),a._v(" "),t("p",[a._v("在apollo上下载相关sql文件，并在数据库中执行。\n"),t("a",{attrs:{href:"https://github.com/apolloconfig/apollo/tree/master/scripts/sql",target:"_blank",rel:"noopener noreferrer"}},[a._v("sql下载地址"),t("OutboundLink")],1),a._v("（建议数据库版本mysql 5.7以上，如果以下会有一些语法和规范需要修改）")]),a._v(" "),t("p",[a._v("从github汇总下载：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413113929012.png?aliyun",alt:"image-20220413113929012"}})]),a._v(" "),t("h2",{attrs:{id:"安装配置并启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装配置并启动"}},[a._v("#")]),a._v(" 安装配置并启动")]),a._v(" "),t("p",[a._v("本地的虚拟机中安装配置的，大家也可以购买远程服务器安装。")]),a._v(" "),t("p",[a._v("上传服务器：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("drwxr-xr-x 4 root root 149 Apr 13 11:50 apollo-adminservice-1.9.2-github\ndrwxr-xr-x 4 root root 152 Apr 13 11:51 apollo-configservice-1.9.2-github\ndrwxr-xr-x 4 root root 131 Apr 13 11:51 apollo-portal-1.9.2-github\ndrwxr-xr-x 2 root root  58 Apr 13 11:49 mysql\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"导入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库"}},[a._v("#")]),a._v(" 导入数据库")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# mysql -u root -h192.168.1.10 -P 61920 -p123456\n# 导入数据 ApolloPortalDB\n> source /root/apolloportaldb.sql\n\n# 导入 ApolloConfigDB\n> source /root/apolloconfigdb.sql\n\nERROR 1231 (42000) at line 424 in file: '/root/apolloconfigdb.sql': Variable 'character_set_client' can't be set to the value of 'NULL'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h2",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[a._v("#")]),a._v(" 修改配置文件")]),a._v(" "),t("p",[a._v("修改这三个服务中的application-github.properties文件。\n在adminService和configService服务中将数据库配置连接到，执行apolloconfigdb.sql的数据库中。\n在portal服务中将数据库配置连接到，执行apolloportaldb.sql的数据库中。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("编辑文件并且修改数据库配置\n# vi apollo-adminservice-1.9.2-github/config/application-github.properties \nspring.datasource.url = jdbc:mysql://192.168.1.10:61920/ApolloConfigDB?characterEncoding=utf8\nspring.datasource.username = root\nspring.datasource.password = 123456\n\n# vi apollo-configservice-1.9.2-github/config/application-github.properties \nspring.datasource.url = jdbc:mysql://192.168.1.10:61920/ApolloConfigDB?characterEncoding=utf8\nspring.datasource.username = root\nspring.datasource.password = 123456\n\n# vi apollo-portal-1.9.2-github/config/application-github.properties \nspring.datasource.url = jdbc:mysql://192.168.1.10:61920/ApolloPortalDB?characterEncoding=utf8\nspring.datasource.username = root\nspring.datasource.password = 123456\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("h2",{attrs:{id:"启动相关配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动相关配置"}},[a._v("#")]),a._v(" 启动相关配置")]),a._v(" "),t("p",[a._v("先启动 "),t("strong",[a._v("configService")])]),a._v(" "),t("p",[a._v("启动示例图：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# chown www.www -R /data/wwwroot/web/apollo-1.9.2-github/\n# su -l www\n# cd /data/wwwroot/web/apollo-1.9.2-github/apollo-configservice-1.9.2-github/scripts/\n# sh startup.sh\nStarted [11613]\nWaiting for server startup..\nWed Apr 13 14:40:05 CST 2022 Server started in 20 seconds!\n\n日志地址 LOG_DIR=/opt/logs/100003171\n# chown www.www -R /opt/logs/\n# netstat -tunpl|grep java\ntcp6       0      0 :::8080                 :::*                    LISTEN      11846/java  \n服务启动了\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[a._v("浏览器访问： http://192.168.1.3:8080/")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413144343246.png?aliyun",alt:"image-20220413144343246"}})]),a._v(" "),t("p",[a._v("接着在"),t("strong",[a._v("adminService")]),a._v("和"),t("strong",[a._v("protal")]),a._v("服务中如法炮制一样，启动对应"),t("strong",[a._v("startup.sh")]),a._v("脚本")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("启动 adminService\n# cd  /data/wwwroot/web/apollo-1.9.2-github/apollo-adminservice-1.9.2-github/scripts/\n# sh ./startup.sh\n\n查看端口\n# netstat -tunpl|grep java\ntcp6       0      0 :::8090                 :::*                    LISTEN      12071/java          \ntcp6       0      0 :::8080                 :::*                    LISTEN      11846/java      \n\n启动 protal\n# cd /data/wwwroot/web/apollo-1.9.2-github/apollo-portal-1.9.2-github/scripts/\n# sh ./startup.sh \n\n开放端口（非必要）：\niptables -A INPUT -p tcp --dport 8070 -j ACCEPT\niptables -A INPUT -p tcp --dport 8090 -j ACCEPT\nservice iptables save\nsystemctl restart iptables.service\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# vi apollo-portal-1.9.2-github/config/apollo-env.properties\nlocal.meta=http://localhost:8080\ndev.meta=http://fill-in-fat-meta-server:8080\nfat.meta=http://fill-in-fat-meta-server:8080\nuat.meta=http://fill-in-uat-meta-server:8080\nlpt.meta=${lpt_meta}\npro.meta=http://fill-in-pro-meta-server:8080\n修改\nlocal.meta=http://localhost:8080\ndev.meta=http://192.168.1.3:8080\n#fat.meta=http://fill-in-fat-meta-server:8080\n#uat.meta=http://fill-in-uat-meta-server:8080\nlpt.meta=${lpt_meta}\npro.meta=http://192.168.1.3:8080\n重启服务\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("p",[a._v("浏览器访问： http://192.168.1.3:8070/")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413145243538.png?aliyun",alt:"image-20220413145243538"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413152305896.png?aliyun",alt:"image-20220413152305896"}})]),a._v(" "),t("p",[a._v("创建应用")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413152821538.png?aliyun",alt:"image-20220413152821538"}})]),a._v(" "),t("p",[a._v("新增配置")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220413152838128.png?aliyun",alt:"image-20220413152838128"}})]),a._v(" "),t("p",[a._v("验证：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('{config_server_url}/configfiles/json/{appId}/{clusterName}/{namespaceName}?ip={clientIp}\n\n# curl http://192.168.1.3:8080/configfiles/json/test001/default/application\n{"ip":"192.168.1.10","domain":"www.baidu.com"}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("Apollo搭建完成，后期再搭建Apollo多环境")])])}),[],!1,null,null,null);s.default=e.exports}}]);