(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{695:function(s,e,a){"use strict";a.r(e);var n=a(17),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux基于docker部署开源onlyoffice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux基于docker部署开源onlyoffice"}},[s._v("#")]),s._v(" Linux基于Docker部署开源OnlyOffice")]),s._v(" "),a("h2",{attrs:{id:"什么是onlyoffice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是onlyoffice"}},[s._v("#")]),s._v(" 什么是OnlyOffice")]),s._v(" "),a("p",[s._v("OnlyOffice是一款强大的在线office工具，我们通过他可以让客户脱离于客户端环境，直接从web端进行文档编写。")]),s._v(" "),a("p",[s._v("这篇文章只是介绍一下onlyOffice的所需要的环境和基本使用方法（在线打开预览，在线编辑与保存）。官网：https://www.onlyoffice.com/zh/")]),s._v(" "),a("p",[s._v("也可以网盘接入onlyoffice实现word文档，excel表格, ppt演示文稿的创建，在线预览，协同编辑")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220609191708156.png?aliyun",alt:"image-20220609191708156"}})]),s._v(" "),a("h2",{attrs:{id:"系统说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统说明"}},[s._v("#")]),s._v(" 系统说明")]),s._v(" "),a("p",[s._v("官方最低配置：")]),s._v(" "),a("p",[s._v("CPU： 双核2GHz或更高")]),s._v(" "),a("p",[s._v("内存：大于2GB或更多")]),s._v(" "),a("p",[s._v("硬盘： 大于40GB")]),s._v(" "),a("p",[s._v("额外的需求至少4GB的交换")]),s._v(" "),a("p",[s._v("Docker版本：大于1.10")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("系统：centos7\nIP： 192.168.1.5\n已安装docker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"使用docker部署onlyoffice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用docker部署onlyoffice"}},[s._v("#")]),s._v(" 使用Docker部署OnlyOffice")]),s._v(" "),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),a("p",[s._v("省略")]),s._v(" "),a("h2",{attrs:{id:"运行镜像onlyoffice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像onlyoffice"}},[s._v("#")]),s._v(" 运行镜像onlyoffice")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# mkdir /data/docker\n# docker run -itd \\\n--name onlyoffice \\\n--restart always \\\n-p 8090:80 \\\n-v /data/docker/onlyoffice/log:/var/log/onlyoffice  \\\n-v /data/docker/onlyoffice/data:/var/www/onlyoffice/Data  \\\n-v /data/docker/onlyoffice/lib:/var/lib/onlyoffice \\\n-v /data/docker/onlyoffice/db:/var/lib/postgresql  \\\nonlyoffice/documentserver\n\n# docker ps\n\n阿里云下载：\n\n# docker run -itd \\\n--name onlyoffice \\\n--restart always \\\n-p 8090:80 \\\n-v /data/docker/onlyoffice/log:/var/log/onlyoffice  \\\n-v /data/docker/onlyoffice/data:/var/www/onlyoffice/Data  \\\n-v /data/docker/onlyoffice/lib:/var/lib/onlyoffice \\\n-v /data/docker/onlyoffice/db:/var/lib/postgresql  \\\nung2thfc.mirror.aliyuncs.com/onlyoffice/documentserver\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("这时候输入服务器ip:8090出现下面页面则部署成功")]),s._v(" "),a("p",[s._v("http://192.168.1.5:8090/")]),s._v(" "),a("p",[s._v("浏览器访问：http://192.168.1.5:8090/web-apps/apps/api/documents/api.js 你能看到以下页面就证明你的onlyoffice部署成功了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220322150844771.png?aliyun",alt:"image-20220322150844771"}})]),s._v(" "),a("h2",{attrs:{id:"使用-onlyoffice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-onlyoffice"}},[s._v("#")]),s._v(" 使用 onlyoffice")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec onlyoffice sudo supervisorctl start ds:example\n\ndocker exec onlyoffice sudo sed 's,autostart=false,autostart=true,' -i /etc/supervisor/conf.d/ds-example.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("点击 GO TO TEST EXAMPLE 按钮")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://imgoss.xgss.net/picgo/image-20210930133757212.png?aliyunoss",alt:"image-20210930133757212"}})]),s._v(" "),a("p",[s._v("可以上传一个文档")]),s._v(" "),a("p",[s._v("开始使用演示样本ONLYOFFICE文档编辑器,第一个基于html5的编辑。\n　　你可以上传自己的文档进行测试使用“上传文件”按钮,选择必要的文件在你的电脑。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://imgoss.xgss.net/picgo/image-20210930133918697.png?aliyunoss",alt:"image-20210930133918697"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://imgoss.xgss.net/picgo/image-20210930133941005.png?aliyunoss",alt:"image-20210930133941005"}})]),s._v(" "),a("p",[s._v("可实现多人编辑")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://imgoss.xgss.net/picgo/image-20210930134224006.png?aliyunoss",alt:"image-20210930134224006"}})]),s._v(" "),a("h2",{attrs:{id:"onlyoffice报-download-failed错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onlyoffice报-download-failed错误处理"}},[s._v("#")]),s._v(" onlyoffice报 download failed错误处理")]),s._v(" "),a("p",[s._v("导入一个文档到onlyoffice里面，报错 download failed")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230530153819349.png?aliyun",alt:"image-20230530153819349"}})]),s._v(" "),a("p",[s._v("the document could not be saved please check connection settings or contact your administrator")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230530151105959.png?aliyun",alt:"image-20230530151105959"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 进入容器\n# docker exec -it onlyoffice /bin/bash\nroot@a7df44eed360:/# \n\n打开\n/etc/onlyoffice/documentserver/default.json，向下找到 rejectUnauthorized 字段，将其值改为false。\n\n# cat /etc/onlyoffice/documentserver/default.json |grep rejectUnauthorized\n                                "rejectUnauthorized": true\n# nano /etc/onlyoffice/documentserver/default.json\n\n按Ctrl+W，然后输入你要搜索的关键字，回车确定。这将会定位到第一个匹配的文本，接着可以用Alt+W来定位到下一个匹配的文本。\n\n使用Ctrl+O来保存所做的修改\n\n按Ctrl+X 保存\n\n如果你修改了文件，下面会询问你是否需要保存修改。输入Y确认保存，输入N不保存，按Ctrl+C取消返回。如果输入了Y，下一步会让你输入想要保存的文件名。如果不需要修改文件名直接回车就行；若想要保存成别的名字（也就是另存为）则输入新名称然后确 定。这个时候也可用Ctrl+C来取消返回。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("重启docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" docker restart onlyoffice\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('==> /var/log/onlyoffice/documentserver/docservice/out.log <==\n[2023-05-30T07:30:53.367] [ERROR] nodeJS - postData error: docId = 192.168.1.251http___192.168.1.3_8090_example_files_192.168.1.251_new.pptx1685431845598;url = http://192.168.1.3:8090/example/track?filename=new.pptx&useraddress=192.168.1.251;data = {"key":"192.168.1.251http___192.168.1.3_8090_example_files_192.168.1.251_new.pptx1685431845598","status":1,"users":["uid-1"],"actions":[{"type":1,"userid":"uid-1"}]}\nError: connect ETIMEDOUT 192.168.1.3:8090\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1107:14)\n\n==> /var/log/onlyoffice/documentserver/converter/out.log <==\n[2023-05-30T07:31:00.408] [ERROR] nodeJS - error downloadFile:url=http://192.168.1.3:8090/example/download?fileName=new.pptx&useraddress=192.168.1.251;attempt=1;code:ETIMEDOUT;connect:null;(id=192.168.1.251http___192.168.1.3_8090_example_files_192.168.1.251_new.pptx1685431845598)\nError: connect ETIMEDOUT 192.168.1.3:8090\n    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1107:14)\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"给onlyoffice导入字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给onlyoffice导入字体"}},[s._v("#")]),s._v(" 给onlyoffice导入字体")]),s._v(" "),a("p",[s._v("win10系统提取中文字体的方法：控制面板——搜字体——查看安装的字体——再在搜索栏输入中文 2个字，这些就是需要的中文字体了。OO首次加载会比较慢，因为加载中文字体，一般达到50M以上。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230529175531189.png?aliyun",alt:"image-20230529175531189"}})]),s._v(" "),a("p",[s._v("搜索中文")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20230529175602973.png?aliyun",alt:"image-20230529175602973"}})]),s._v(" "),a("p",[s._v("清除字体")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker exec -it onlyoffice /bin/bash\ncd /var/www/onlyoffice/documentserver/core-fonts/\nls\nrm -rf *\nls\ncd /usr/share/fonts/\nrm -rf *\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("选择好自己要的字体，打包发送到onlyoffice容器里：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker cp ./fonts/ onlyoffice:/usr/share/fonts/truetype/custom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在docker容器里面执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker exec -it onlyoffice /bin/bash\n/usr/bin/documentserver-generate-allfonts.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("//将当前文件夹C:\\Users\\Administrator\\下的winfont文件夹内的字体全部拷贝到容器的文件夹/usr/share/fonts/truetype中")])])}),[],!1,null,null,null);e.default=t.exports}}]);