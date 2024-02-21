(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{711:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"开源免费简洁美观的网盘系统z-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源免费简洁美观的网盘系统z-file"}},[s._v("#")]),s._v(" 开源免费简洁美观的网盘系统Z-File")]),s._v(" "),t("h2",{attrs:{id:"什么是zfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是zfile"}},[s._v("#")]),s._v(" 什么是zfile")]),s._v(" "),t("p",[s._v("此项目是一个在线文件目录的程序, 支持各种对象存储和本地存储, 使用定位是个人放常用工具下载, 或做公共的文件库.")]),s._v(" "),t("p",[s._v("前端基于 h5ai 的原有功能使用 Vue 重新开发、后端采用 SpringBoot, 数据库采用内嵌数据库.")]),s._v(" "),t("p",[s._v("Z-File 的功能整体上与 Cloudreve 比较相似，但 ZFile 是基于 Java 开发的，而后者是 PHP 的，大家可以根据实际情况选择。另作者也表示，Z-File 不会向多账户方向开发，代码结构会保持相对简单，所以更加适合个人自用而不是用于搭建多人网盘。")]),s._v(" "),t("h2",{attrs:{id:"系统特色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统特色"}},[s._v("#")]),s._v(" 系统特色")]),s._v(" "),t("ul",[t("li",[s._v("Docker 支持")]),s._v(" "),t("li",[s._v("文件数据库 (免安装)")]),s._v(" "),t("li",[s._v("直链功能")]),s._v(" "),t("li",[s._v("图片模式")]),s._v(" "),t("li",[s._v("文件夹密码")]),s._v(" "),t("li",[s._v("忽略文件夹")]),s._v(" "),t("li",[s._v("自定义 JS, CSS")]),s._v(" "),t("li",[s._v("自定义目录的 readme 说明文件")]),s._v(" "),t("li",[s._v("支持在线浏览文本文件, 视频, 图片, 音乐. (支持 FLV 和 HLS)")]),s._v(" "),t("li",[s._v("文件/目录二维码")]),s._v(" "),t("li",[s._v("同时挂载多个存储策略")]),s._v(" "),t("li",[s._v("缓存动态开启, "),t("s",[s._v("缓存自动刷新 (v2.2 及以前版本支持)")])]),s._v(" "),t("li",[t("s",[s._v("全局搜索 (v2.2 及以前版本支持)")])]),s._v(" "),t("li",[s._v("支持 S3 协议, 阿里云 OSS, FTP, 华为云 OBS, 本地存储, MINIO, OneDrive 国际/家庭/个人版/世纪互联版/SharePoint, , 七牛云 KODO, 腾讯云 COS, 又拍云 USS.")])]),s._v(" "),t("h2",{attrs:{id:"部署方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署方法"}},[s._v("#")]),s._v(" 部署方法")]),s._v(" "),t("h3",{attrs:{id:"系统说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统说明"}},[s._v("#")]),s._v(" 系统说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("系统：centos7\n\n配置：2C2G+100G\n\nIP：192.168.1.4\n\n软件： nginx1.16\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_1-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[s._v("#")]),s._v(" 1.安装依赖")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# yum install -y java-1.8.0-openjdk unzip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-下载项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载项目"}},[s._v("#")]),s._v(" 2.下载项目")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("我的安装目录为：/data/wwwroot/web/\nsu -l www\ncd /data/wwwroot/web/\nwget -P https://c.jun6.net/ZFILE/zfile-release.war\nmkdir z.xgss.net && unzip zfile-release.war -d z.xgss.net\nchmod +x /data/wwwroot/web/z.xgss.net/bin/*.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/data/wwwroot/web/z.xgss.net/bin/start.sh       # 启动项目\n/data/wwwroot/web/z.xgss.net/bin/stop.sh        # 停止项目\n/data/wwwroot/web/z.xgss.net/bin/restart.sh     # 重启项目\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("由于服务器8080端口被占用，所以修改端口为9000")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim /data/wwwroot/web/z.xgss.net/WEB-INF/classes/application.yml\nport: 8080 改为 9000\n再次启动项目\n/data/wwwroot/web/z.xgss.net/bin/start.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"防火墙开启端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙开启端口"}},[s._v("#")]),s._v(" 防火墙开启端口")]),s._v(" "),t("p",[s._v("根据实际端口开启9000端口，修改你自己的端口防火墙")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("iptables：\niptables -A INPUT -p tcp --dport 9000 -j ACCEPT\nservice iptables save \nsystemctl restart iptables\n\nfirewall：\nfirewall-cmd --zone=public --add-port=9000/tcp --permanent # 开放 9000 端口\nfirewall-cmd --reload                                      # 重启firewall\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("启动：\n/data/wwwroot/web/z.xgss.net/bin/start.sh")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/data/wwwroot/web/zfile/bin/start.sh \napm home: \nOPTS param: \nStarting the zfile-2.7 ...OK!\nPID: 7006\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"浏览器访问-ip-端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问-ip-端口"}},[s._v("#")]),s._v(" 浏览器访问： ip+端口")]),s._v(" "),t("p",[s._v("http://192.168.1.4:9000")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220531191554175.png?aliyun",alt:"image-20220531191554175"}})]),s._v(" "),t("p",[s._v("填写相关信息")]),s._v(" "),t("p",[s._v("进入后台")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220531191724690.png?aliyun",alt:"image-20220531191724690"}})]),s._v(" "),t("h2",{attrs:{id:"配置nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置nginx")]),s._v(" "),t("p",[s._v("域名： z.xgss.net")]),s._v(" "),t("p",[s._v("nginx配置如下，zfile的端口为84：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n\tlisten 80;\n    server_name z.xgss.net;\n    access_log /data/wwwroot/log/z.xgss.net.log main_aliyun;\n    error_log off;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://127.0.0.1:84;\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20210901102300531.png?aliyun",alt:"image-20210901102300531"}})]),s._v(" "),t("h2",{attrs:{id:"配置驱动器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置驱动器"}},[s._v("#")]),s._v(" 配置驱动器")]),s._v(" "),t("p",[s._v("支持本地存储、阿里云OSS、腾讯云COS、FTP、ONEDRIVE 七牛云等，这里显示本地存储")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20210901102720907.png?aliyun",alt:"image-20210901102720907"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20210901102629350.png?aliyun",alt:"image-20210901102629350"}})]),s._v(" "),t("h2",{attrs:{id:"参考地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考地址"}},[s._v("#")]),s._v(" 参考地址")]),s._v(" "),t("p",[s._v("演示站地址: https://zfile.jun6.net/")]),s._v(" "),t("p",[s._v("后端 github 地址: https://github.com/zhaojun1998/zfile")]),s._v(" "),t("p",[s._v("后端 github 地址: https://github.com/zhaojun1998/zfile-vue")]),s._v(" "),t("p",[s._v("部署教程地址:\nhttps://github.com/zhaojun1998/zfile")])])}),[],!1,null,null,null);a.default=n.exports}}]);