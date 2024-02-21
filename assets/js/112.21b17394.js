(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{691:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7部署开源webdav服务-实现全端文件共享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7部署开源webdav服务-实现全端文件共享"}},[s._v("#")]),s._v(" CentOS7部署开源WebDav服务，实现全端文件共享")]),s._v(" "),t("p",[s._v("服务器操作系统：Centos7.8")]),s._v(" "),t("p",[s._v("Linux下可以用Nginx或Apache来部署WebDav服务，也可以用单独的组件。")]),s._v(" "),t("p",[s._v("这里用的是一个Go语言写的WebDAV Server，Github 项目地址：https://github.com/hacdias/webdav")]),s._v(" "),t("p",[s._v("部署流程如下。")]),s._v(" "),t("h2",{attrs:{id:"_1-下载配置webdav"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载配置webdav"}},[s._v("#")]),s._v(" 1. 下载配置WebDav")]),s._v(" "),t("p",[s._v("在 /data/webdav-app下新建"),t("code",[s._v("webdav")]),s._v("目录。")]),s._v(" "),t("p",[s._v("下载并解压到指定目录，当前最新版本为 4.2.0")]),s._v(" "),t("p",[s._v("https://github.com/hacdias/webdav/releases")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data/webdav-app\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/webdav-app\n下载： "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/hacdias/webdav/releases/download/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("最新的版本号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/linux-amd64-webdav.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/hacdias/webdav/releases/download/v4.2.0/linux-amd64-webdav.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvzf linux-amd64-webdav.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("在"),t("code",[s._v("/data/webdav-app/")]),s._v("目录下新建一个配置文件"),t("code",[s._v("config.yaml")]),s._v("，内容如下")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("vim /data/webdav"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app/config.yaml\n填写以下：\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Server related settings")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15108")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cert.pem\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" key.pem\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default user settings (will be merged)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("modify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("users")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password1\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /data\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("对外服务的端口号为"),t("code",[s._v("15108")]),s._v("，需要在安全组或防火墙里放开。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221013141821514.png?aliyun",alt:"image-20221013141821514"}})]),s._v(" "),t("p",[s._v("目录"),t("code",[s._v("/data")]),s._v("用于存储"),t("code",[s._v("user1")]),s._v("的文件，需要手动创建。")]),s._v(" "),t("p",[s._v("如果有多个用户，则遵循"),t("code",[s._v("yaml")]),s._v("的文件规范，按"),t("code",[s._v("user1")]),s._v("的格式添加到下面即可。")]),s._v(" "),t("h2",{attrs:{id:"_2-添加服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加服务"}},[s._v("#")]),s._v(" 2. 添加服务")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("/usr/lib/systemd/system/")]),s._v("下新建文件"),t("code",[s._v("webdav.service")]),s._v("，内容如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/webdav.service\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WebDAV server\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/webdav-app/webdav --config /data/webdav-app/config.yaml\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"_3-启动webdav服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动webdav服务"}},[s._v("#")]),s._v(" 3. 启动WebDav服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl daemon-reload\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" webdav\nsystemctl start webdav\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查看服务状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl status webdav\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出类似如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("● webdav.service - WebDAV server\n   Loaded: loaded "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/webdav.service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Thu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-31 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":34:08 CST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 20h ago\n Main PID: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10032")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("webdav"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/webdav.service\n           └─10032 /usr/local/webdav/webdav --config /usr/local/webdav/config.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"开放防火墙端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开放防火墙端口"}},[s._v("#")]),s._v(" 开放防火墙端口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# iptables\niptables -A INPUT -p tcp --dport 15108 -j ACCEPT\nservice iptables save\nsystemctl restart iptables\n\n# firewall-cmd\nfirewall-cmd --zone=public --add-port=15108/tcp --permanent\nfirewall-cmd --reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"使用客户端连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端连接"}},[s._v("#")]),s._v(" 使用客户端连接")]),s._v(" "),t("p",[s._v("这里我使用raiDrive客户端连接")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20221013093434409.png?aliyun",alt:"image-20221013093434409"}})]),s._v(" "),t("p",[s._v("连接成功，至此可以使用客户端上传文件到webdav目录了。")]),s._v(" "),t("h2",{attrs:{id:"使用nginx反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx反向代理"}},[s._v("#")]),s._v(" 使用nginx反向代理")]),s._v(" "),t("p",[s._v("还有一个问题能不能使用nginx的443的代理，是不是更加安全呢")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n        listen 80;\n        server_name  s.test1.net;\n        access_log /data/wwwroot/log/s.test1.net-access.log main_aliyun;\n        error_log /dev/null;\n        client_max_body_size    0;\n\t\tlocation / {\n                proxy_pass      http://127.0.0.1:15108;\n                proxy_redirect off;\n                proxy_set_header Host $host;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\t\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("查看日志")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# tail -n 5 /data/wwwroot/log/s.test1.net-access.log\n192.168.1.164 - user1 [13/Oct/2022:10:20:15 +0800] "PROPFIND /wwwroot/ HTTP/1.1" 207 2383 "-" "RaiDrive/2022.6.56.0" "0.002"\n192.168.1.164 - user1 [13/Oct/2022:10:20:15 +0800] "PROPFIND /code-server/ HTTP/1.1" 207 1690 "-" "RaiDrive/2022.6.56.0" "0.005"\n192.168.1.164 - user1 [13/Oct/2022:10:20:34 +0800] "PROPFIND / HTTP/1.1" 207 3822 "-" "RaiDrive/2022.6.56.0" "0.004"\n192.168.1.164 - user1 [13/Oct/2022:10:20:34 +0800] "PROPFIND /wwwroot/ HTTP/1.1" 207 2383 "-" "RaiDrive/2022.6.56.0" "0.002"\n192.168.1.164 - user1 [13/Oct/2022:10:20:34 +0800] "PROPFIND /code-server/ HTTP/1.1" 207 1690 "-" "RaiDrive/2022.6.56.0" "0.002"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("苹果IOS系统和ios的客户端连接webdav就可以实现文件同步了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);