(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{715:function(s,a,e){"use strict";e.r(a);var n=e(17),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"免费企业知识管理工具-牵牛电子帮助手册安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免费企业知识管理工具-牵牛电子帮助手册安装"}},[s._v("#")]),s._v(" 免费企业知识管理工具—牵牛电子帮助手册安装")]),s._v(" "),e("p",[s._v("最近一直在找一个能代替语雀的知识管理工具，直到看到‘牵牛’，今天给大家分享一下安装方法，比较时候搭建 帮助文档、产品帮助中心等。")]),s._v(" "),e("p",[s._v("今天就用docker-compose安装牵牛知识文档系统。")]),s._v(" "),e("h2",{attrs:{id:"牵牛是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#牵牛是什么"}},[s._v("#")]),s._v(" 牵牛是什么？")]),s._v(" "),e("p",[s._v("牵牛一款企业知识管理工具，通过独立的知识库空间，结构化地组织在线协作文档，实现企业知识的积累和沉淀，促进知识的高度复用和流通。")]),s._v(" "),e("h2",{attrs:{id:"牵牛官网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#牵牛官网"}},[s._v("#")]),s._v(" 牵牛官网")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://fx.beebox.cc/eman/official",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://fx.beebox.cc/eman/official"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"帮助文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帮助文档"}},[s._v("#")]),s._v(" 帮助文档")]),s._v(" "),e("p",[s._v("https://fx.beebox.cc/eman/pub/a/n6sY7W6rn")]),s._v(" "),e("h2",{attrs:{id:"docker私有化部署网址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker私有化部署网址"}},[s._v("#")]),s._v(" Docker私有化部署网址")]),s._v(" "),e("p",[s._v("https://hub.docker.com/r/beeboxcc/eman-app")]),s._v(" "),e("h2",{attrs:{id:"安装环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),e("p",[s._v("系统： centos7 （其他支持docker和docker-compose都可以）")]),s._v(" "),e("p",[s._v("IP: 192.168.1.15")]),s._v(" "),e("p",[s._v("docker 和 docker-compose 版本最好是最新的，本人使用1.13.1 和 1.18.0的都报错了，无奈升级版本才能")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n# docker -v （此版本不支持，一定要升级）\nDocker version 1.13.1, build 7d71120/1.13.1\n\n升级docker后\n# docker -v\nDocker version 24.0.6, build ed223bc\n\n# docker-compose -v （此版本不支持，一定要升级）\ndocker-compose version 1.18.0, build 8dd22a9\n\n# docker-compose -v\nDocker Compose version v2.22.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[s._v("#")]),s._v(" 拉取镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull beeboxcc/eman-app:latest\ndocker pull beeboxcc/eman-web:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("大陆地区的速度简直不忍直视，下了几个小时还没好。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230926161932021.png?aliyun",alt:"image-20230926161932021"}})]),s._v(" "),e("p",[s._v("用香港的服务器下载，再导出导入")]),s._v(" "),e("h2",{attrs:{id:"在香港服务器拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在香港服务器拉取镜像"}},[s._v("#")]),s._v(" 在香港服务器拉取镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull beeboxcc/eman-app:latest\ndocker pull beeboxcc/eman-web:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"导出镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出镜像"}},[s._v("#")]),s._v(" 导出镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# docker images\nREPOSITORY                                                     TAG                 IMAGE ID            CREATED             SIZE\ndocker.io/beeboxcc/eman-app                                    latest              7b39786dd8cd        3 months ago        2.44 GB\ndocker.io/beeboxcc/eman-web                                    latest              2e966ec26bd5        3 months ago        193 MB\n\n导出：\n# docker save docker.io/beeboxcc/eman-app:latest | gzip > eman-app_latest.tar.gz\n# docker save docker.io/beeboxcc/eman-web:latest | gzip > eman-web_latest.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"导入镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入镜像"}},[s._v("#")]),s._v(" 导入镜像")]),s._v(" "),e("p",[s._v("将文件下载再")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\n查看镜像：\n# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n\n导入：\ndocker load < eman-app_latest.tar.gz\ndocker load < eman-web_latest.tar.gz\n\n查看镜像：\n# docker images\nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ndocker.io/beeboxcc/eman-app   latest              7b39786dd8cd        3 months ago        2.44 GB\ndocker.io/beeboxcc/eman-web   latest              2e966ec26bd5        3 months ago        193 MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"编写docker-compose-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写docker-compose-yml"}},[s._v("#")]),s._v(" 编写docker-compose.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi docker-compose.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("说明： 根据需要编写 docker-compose.yml 文件")]),s._v(" "),e("p",[s._v("这里我把eman-web的端口改成 81，因为nginx占用80端口，如果不改可以直接用ip访问。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('version: "3.7"\n\nnetworks:\n  eman:\n    driver: bridge\n\nservices:\n  postgresql:\n    image: "abcfy2/zhparser:14-alpine"\n    container_name: postgresql\n    hostname: postgresql\n    restart: always\n    ports:\n      - "5432:5432"\n    environment:\n      TZ: Asia/Shanghai\n      POSTGRES_PASSWORD: admin\n      POSTGRES_DB : emandb\n    volumes:\n      - ./data/postgresql-data:/var/lib/postgresql/data\n    networks:\n      - eman\n  redis:\n    image: "bitnami/redis:6.2"\n    container_name: redis\n    hostname: redis\n    restart: always\n    ports:\n      - "6379:6379"\n    environment:\n      TZ: Asia/Shanghai\n      REDIS_PASSWORD: admin\n    networks:\n      - eman\n  eman-web:\n    image: beeboxcc/eman-web\n    container_name: eman-web\n    hostname: eman-web\n    restart: always\n    environment:\n      TZ: Asia/Shanghai\n    ports:\n      - "81:80"\n    depends_on:\n      - eman-app\n    links:\n      - eman-app:eman-app\n    networks:\n      - eman\n\n  eman-app:\n    image: beeboxcc/eman-app\n    container_name: eman-app\n    hostname: eman-app\n    restart: always\n    environment:\n      POSTGRESQL_HOST: postgresql\n      POSTGRESQL_PORT: 5432\n      POSTGRESQL_USER: postgres\n      POSTGRESQL_PASSWORD: admin\n      REDIS_HOST: redis\n      REDIS_PORT: 6379\n      REDIS_PASSWORD: admin\n      TZ: Asia/Shanghai\n    volumes:\n      - ./data/eman-app:/project-files\n    networks:\n      - eman\n    depends_on:\n      - postgresql\n    links:\n      - postgresql:postgresql\n      - redis:redis\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br")])]),e("p",[s._v("在 docker-compose.yml 文件夹执行命令 docker compose up -d 等待执行完成后,可以访问 $ip/eman")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# docker-compose up -d\n \n 报错：\n# docker-compose up -d\nERROR: Version in "./docker-compose.yml" is unsupported. You might be seeing this error because you\'re using the wrong Compose file version. Either specify a supported version (e.g "2.2" or "3.3") and place your service definitions under the `services` key, or omit the `version` key and place your service definitions at the root of the file to use version 1.\nFor more on the Compose file format versions, see https://docs.docker.com/compose/compose-file/\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"重新安装docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重新安装docker-compose"}},[s._v("#")]),s._v(" 重新安装docker-compose")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# yum remove docker-compose\n\n# sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\n# sudo chmod +x /usr/local/bin/docker-compose\n\n# /usr/local/bin/docker-compose -v\nDocker Compose version v2.22.0\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("再次执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# docker-compose up -d\n\n✔ e2a4ef11f57c Download complete                                                                                                         157.2s \nmissing signature key\n原来是docker版本太低的问题，升级docker版本\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230926173337274.png?aliyun",alt:"image-20230926173337274"}})]),s._v(" "),e("h2",{attrs:{id:"访问牵牛"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问牵牛"}},[s._v("#")]),s._v(" 访问牵牛")]),s._v(" "),e("p",[s._v("浏览器访问：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://192.168.1.15/eman\n\n默认管理员账户密码为 \nadmin@eman.com\n123456\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230928113318688.png?aliyun",alt:"image-20230928113318688"}})]),s._v(" "),e("p",[s._v("登陆完成后可以在右上角企业名称单击,会有弹出菜单")]),s._v(" "),e("p",[s._v("企业设置: 用于修改企业信息")]),s._v(" "),e("p",[s._v("用户管理：用于本地管理用户重置密码等 用户操作空间需要先在空间设置-成员管理-邀请成员-搜索并添加成员，然后分配对应权限后才可以进行操作")]),s._v(" "),e("h2",{attrs:{id:"使用域名访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用域名访问"}},[s._v("#")]),s._v(" 使用域名访问")]),s._v(" "),e("p",[s._v("配置nginx代理")]),s._v(" "),e("p",[s._v("假设域名：  eman.3xxx.com")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n        listen       80;\n        server_name  eman.3xxx.com;\n        #root /data/web/;\n\n        access_log /data/wwwroot/log/eman.3xxx.com-access.log;\n        error_log /dev/null;\n\n        location / {\n                index  index.html index.htm index.php;\n                proxy_pass      http://192.168.1.15:81;\n                proxy_redirect off;\n                proxy_set_header Host $host;\n                proxy_set_header X-Real-IP $remote_addr;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("绑定hosts： "),e("code",[s._v("192.168.1.15 eman.3xxx.com")]),s._v(" 再用域名访问 "),e("code",[s._v("http://eman.3xxx.com/eman/login")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231017164026677.png?aliyun",alt:"image-20231017164026677"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);