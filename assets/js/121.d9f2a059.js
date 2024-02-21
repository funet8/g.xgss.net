(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{699:function(a,s,r){"use strict";r.r(s);var t=r(17),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"超简单的个人精美导航网站搭建-homarr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超简单的个人精美导航网站搭建-homarr"}},[a._v("#")]),a._v(" 超简单的个人精美导航网站搭建-Homarr")]),a._v(" "),r("p",[a._v("Homarr 是一个简单轻量级的服务器主页，通过可定制的浏览器主页与您的家庭服务器的 Docker 容器（即 Sonarr/Radarr ）进行交互，可帮助您在一个地方轻松访问所有服务。")]),a._v(" "),r("p",[a._v("Homarr是一个 顺滑、 现代化 的面板，它把你所有的应用和服务汇于指尖。有了Homarr，你可以在一个页面访问和控制一切。Homarr与你添加的应用无缝交互，为你提供有价值的信息并由你完全把控。安装Homarr轻松简单，并且支持多种部署方式。")]),a._v(" "),r("p",[a._v("官网： https://homarr.dev/")]),a._v(" "),r("p",[a._v("开源地址： https://github.com/ajnart/homarr")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423095038710.png?aliyun",alt:"image-20230423095038710"}})]),a._v(" "),r("h2",{attrs:{id:"官方安装教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#官方安装教程"}},[a._v("#")]),a._v(" "),r("a",{attrs:{href:"https://homarr.dev/docs/introduction/installation#installation",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方安装教程"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("https://homarr.dev/docs/introduction/installation#installation")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("docker run  \\\n  --name homarr \\\n  --restart unless-stopped \\\n  -p 7575:7575 \\\n  -v <your-path>/homarr/configs:/app/data/configs \\\n  -v <your-path>/homarr/icons:/app/public/icons \\\n  -d ghcr.io/ajnart/homarr:latest\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("p",[a._v("实际操作")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# mkdir -p  /data/docker/homarr/configs /data/docker/homarr/icons\n# docker run  \\\n  --name homarr \\\n  --restart unless-stopped \\\n  -p 7575:7575 \\\n  -v /data/docker/homarr/configs:/app/data/configs \\\n  -v /data/docker/homarr/icons:/app/public/icons \\\n  -d ghcr.io/ajnart/homarr:latest\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br")])]),r("p",[a._v("浏览器访问：浏览器访问IP+端口，笔者是http://192.168.1.8:7575")]),a._v(" "),r("h2",{attrs:{id:"nginx配置站点-可不操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置站点-可不操作"}},[a._v("#")]),a._v(" Nginx配置站点（可不操作）")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("server {\n        listen       80;\n        server_name  nav.XXX.ltd; #改成你的域名\n        #root /data/wwwroot/web/;\n        access_log /data/wwwroot/log/nav.XXX.ltd-access.log main_aliyun;\n        error_log /dev/null;\n\n        location / {\n                index index.php index.html;\n                proxy_pass      http://192.168.1.8:7575;\n                proxy_redirect off;\n                proxy_set_header Host $host;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n        }\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br")])]),r("p",[a._v("使用nav.XXX.ltd域名即可访问")]),a._v(" "),r("h1",{attrs:{id:"使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),r("h2",{attrs:{id:"_1-修改导航标题等"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改导航标题等"}},[a._v("#")]),a._v(" 1.修改导航标题等")]),a._v(" "),r("p",[a._v("设置---\x3e个性化---\x3e页面元数据")]),a._v(" "),r("p",[a._v("如图修改站点标题等信息")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423105623963.png?aliyun",alt:"image-20230423105623963"}})]),a._v(" "),r("h2",{attrs:{id:"_2-搜索改为百度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-搜索改为百度"}},[a._v("#")]),a._v(" 2.搜索改为百度")]),a._v(" "),r("p",[a._v("设置---\x3e常规---\x3eCustom")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423105856042.png?aliyun",alt:"image-20230423105856042"}})]),a._v(" "),r("p",[a._v("https://google.com/search?q= 改为  https://www.baidu.com/s?wd= 右上角的搜索框就会用百度搜索。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423105920976.png?aliyun",alt:"image-20230423105920976"}})]),a._v(" "),r("h2",{attrs:{id:"_3-备份还原配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-备份还原配置"}},[a._v("#")]),a._v(" 3.备份还原配置")]),a._v(" "),r("p",[a._v("设置---\x3e常规")]),a._v(" "),r("p",[a._v("1.下载配置")]),a._v(" "),r("p",[a._v("2.删除配置")]),a._v(" "),r("p",[a._v("3.保存一份配置")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423112840673.png?aliyun",alt:"image-20230423112840673"}})]),a._v(" "),r("h2",{attrs:{id:"_4-docker整合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-docker整合"}},[a._v("#")]),a._v(" 4.Docker整合")]),a._v(" "),r("p",[a._v("后台设置有个“启用docker集成”，打开之后会")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423112132284.png?aliyun",alt:"image-20230423112132284"}})]),a._v(" "),r("p",[a._v("打开之后会报错“你是不是忘了挂载docker socket”")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423112050551.png?aliyun",alt:"image-20230423112050551"}})]),a._v(" "),r("h3",{attrs:{id:"重新构建docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新构建docker"}},[a._v("#")]),a._v(" 重新构建docker")]),a._v(" "),r("p",[a._v("操作前一定要备份你的配置")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# docker cp homarr:/app/public/imgs /data/docker/homarr/imgs 将\n# docker rm -f homarr  # 删除homarr \n\ndocker run  \\\n  --name homarr \\\n  --restart unless-stopped \\\n  -p 7575:7575 \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v /data/docker/homarr/configs:/app/data/configs \\\n  -v /data/docker/homarr/icons:/app/public/icons \\\n  -v /data/docker/homarr/imgs:/app/public/imgs \\\n  -d ghcr.io/ajnart/homarr:latest\n \n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br")])]),r("p",[a._v("启动之后，就可以看到本机运行的所有docker容器了。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423132831204.png?aliyun",alt:"image-20230423132831204"}})]),a._v(" "),r("h2",{attrs:{id:"外链ico图片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外链ico图片"}},[a._v("#")]),a._v(" 外链ico图片")]),a._v(" "),r("p",[a._v("https://raw.githubusercontent.com/walkxcode/dashboard-icons/master/png/")]),a._v(" "),r("p",[a._v("点击链接选择外链图片。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230423150646624.png?aliyun",alt:"image-20230423150646624"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);