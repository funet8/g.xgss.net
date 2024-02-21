(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{674:function(s,a,t){"use strict";t.r(a);var r=t(17),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"群晖nas配置之搭建wordpress个人博客站点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群晖nas配置之搭建wordpress个人博客站点"}},[s._v("#")]),s._v(" 群晖NAS配置之搭建WordPress个人博客站点")]),s._v(" "),t("p",[s._v("之前写了一些ngrok和frp给群晖nas做内网穿透，今天分享一下在群晖nas下安装wordpress的教程。")]),s._v(" "),t("p",[s._v("WordPress是一个开源的内容管理系统（CMS），最初是用来搭建博客的，但后来发展成为创建各种类型网站的强大工具。它使用PHP语言和MySQL数据库构建，让用户可以轻松地创建和管理网站内容。白宫的官网也是用WordPress部署的")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/wordpress-logs.jpg?aliyun",alt:"wordpress-logs"}})]),s._v(" "),t("h2",{attrs:{id:"安装群晖-nas-上的-web-站点套件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装群晖-nas-上的-web-站点套件"}},[s._v("#")]),s._v(" 安装群晖 NAS 上的 Web 站点套件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("登录群晖 DSM（DiskStation Manager）管理界面。")])]),s._v(" "),t("li",[t("p",[s._v("打开“套件中心”，选择搜索 -> “Web station” 安装。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129094038178.png?aliyun",alt:"image-20231129094038178"}})])]),s._v(" "),t("li",[t("p",[s._v("启用 Web station 站点服务。")])])]),s._v(" "),t("h2",{attrs:{id:"安装-mariadb-mysql-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mariadb-mysql-数据库"}},[s._v("#")]),s._v(" 安装 MariaDB（MySQL）数据库")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在“控制面板”中，选择“套件中心”。")])]),s._v(" "),t("li",[t("p",[s._v("在“套件中心”中搜索并安装 MariaDB 套件。")])]),s._v(" "),t("li",[t("p",[s._v("完成安装后，打开 MariaDB，并创建一个新的数据库，记下数据库名称、用户名和密码，用于 WordPress 的数据库。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129094237126.png?aliyun",alt:"image-20231129094237126"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129094258023.png?aliyun",alt:"image-20231129094258023"}})])])]),s._v(" "),t("h2",{attrs:{id:"数据库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[s._v("#")]),s._v(" 数据库配置")]),s._v(" "),t("p",[s._v("MariaDB默认只运行nas本机访问，现在需要把开启，这个是非必须的，如果设置一定要设置一个强密码。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nmysql> use mysql;\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'star'@'%' IDENTIFIED BY 'Pwd654321' WITH GRANT OPTION;\nmysql> FLUSH PRIVILEGES ;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129100003317.png?aliyun",alt:"image-20231129100003317"}})]),s._v(" "),t("p",[s._v("使用navicat工具连接")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129100119721.png?aliyun",alt:"image-20231129100119721"}})]),s._v(" "),t("h2",{attrs:{id:"创建数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),t("p",[s._v("mysql新建wordpress数据库,")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> CREATE DATABASE wordpress_db;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("并且新建一个wordpress数据库用户，只允许 192.168.1.4 和127.0.0.1和localhost 访问")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CREATE USER 'wordpress_user'@'192.168.1.4' IDENTIFIED BY 'your_password';\nCREATE USER 'wordpress_user'@'127.0.0.1' IDENTIFIED BY 'your_password';\nCREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'your_password';\n\nGRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'192.168.1.4';\nGRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'127.0.0.1';\nGRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';\n\nFLUSH PRIVILEGES;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"安装-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-wordpress"}},[s._v("#")]),s._v(" 安装 WordPress")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在“套件中心”中搜索并安装 WordPress 套件。")])]),s._v(" "),t("li",[t("p",[s._v("完成安装后，进入 WordPress 控制面板。")])]),s._v(" "),t("li",[t("p",[s._v("在设置过程中，输入之前在 MariaDB 中创建的数据库名称、用户名和密码，连接 WordPress 到数据库。")]),s._v(" "),t("p",[s._v("这里要输入root的用户名和密码")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129101647314.png?aliyun",alt:"image-20231129101647314"}})]),s._v(" "),t("p",[s._v("输入数据库名和用户和密码")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129101521539.png?aliyun",alt:"image-20231129101521539"}})]),s._v(" "),t("p",[s._v("完成")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129101552393.png?aliyun",alt:"image-20231129101552393"}})])])]),s._v(" "),t("h2",{attrs:{id:"配置-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-wordpress"}},[s._v("#")]),s._v(" 配置 WordPress")]),s._v(" "),t("ol",[t("li",[s._v("登录 WordPress 控制面板（通常是通过浏览器输入你的 NAS IP 地址和 WordPress 目录的路径）。")]),s._v(" "),t("li",[s._v("在 WordPress 后台，你可以更改主题、添加插件、创建和管理博客文章等。")])]),s._v(" "),t("h2",{attrs:{id:"配置-web-站点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-web-站点"}},[s._v("#")]),s._v(" 配置 Web 站点")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129101757870.png?aliyun",alt:"image-20231129101757870"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"H:/typora_images/image-20231129102714134.png",alt:"image-20231129102714134"}})]),s._v(" "),t("h2",{attrs:{id:"访问你的-wordpress-站点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问你的-wordpress-站点"}},[s._v("#")]),s._v(" 访问你的 WordPress 站点")]),s._v(" "),t("p",[s._v("使用浏览器输入你设置的域名或者群晖 NAS 的 IP 地址，应该就能访问到你搭建的 WordPress 个人博客站点了。")]),s._v(" "),t("h1",{attrs:{id:"利用内网穿透域名访问wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用内网穿透域名访问wordpress"}},[s._v("#")]),s._v(" 利用内网穿透域名访问wordpress")]),s._v(" "),t("p",[s._v("这样只能用ip访问wordpress，需要用内网穿透的域名访问wordpress")]),s._v(" "),t("p",[s._v("域名： wordpress.frp.xgss.net")]),s._v(" "),t("h2",{attrs:{id:"frpc配置增加域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frpc配置增加域名"}},[s._v("#")]),s._v(" frpc配置增加域名")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('vi frpc.toml \n添加\n[[proxies]]\nname = "web3"\ntype = "http"\nlocalPort = 82\ncustomDomains = ["wordpress.frp.xgss.net"]\n重启frp服务\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"web-station中添加域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-station中添加域名"}},[s._v("#")]),s._v(" web station中添加域名")]),s._v(" "),t("p",[s._v("在web station 点击新增---\x3e选择基于端口")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129174103231.png?aliyun",alt:"image-20231129174103231"}})]),s._v(" "),t("h2",{attrs:{id:"配置backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置backend"}},[s._v("#")]),s._v(" 配置backend")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129174214221.png?aliyun",alt:"image-20231129174214221"}})]),s._v(" "),t("p",[s._v("在 web/wordpress 目录中新建一个文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi info.php\n填写以下文字：\n\n<?php\necho 'hello world';\necho phpinfo();\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("测试访问 "),t("code",[s._v("http://wordpress.frp.xgss.net/info.php")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129174412252.png?aliyun",alt:"image-20231129174412252"}})]),s._v(" "),t("h2",{attrs:{id:"官网下载-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官网下载-wordpress"}},[s._v("#")]),s._v(" 官网下载 wordpress")]),s._v(" "),t("p",[s._v("下载 wordpress-6.4.1-zh_CN.zip 解压如图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129175807797.png?aliyun",alt:"image-20231129175807797"}})]),s._v(" "),t("h3",{attrs:{id:"访问域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问域名"}},[s._v("#")]),s._v(" 访问域名")]),s._v(" "),t("p",[s._v("报错，您的PHP似乎没有安装运行WordPress所必需的MySQL扩展。请检查 PHP 扩展 mysqli 已安装并启用。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129175908764.png?aliyun",alt:"image-20231129175908764"}})]),s._v(" "),t("h3",{attrs:{id:"群晖启用mysqli扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群晖启用mysqli扩展"}},[s._v("#")]),s._v(" 群晖启用mysqli扩展")]),s._v(" "),t("p",[s._v("如图 web station ---\x3e脚本语言设置---\x3e PHP 选择你要用到的版本，选择扩展勾选 mysqli ，保存")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129183803368.png?aliyun",alt:"image-20231129183803368"}})]),s._v(" "),t("h2",{attrs:{id:"访问安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问安装"}},[s._v("#")]),s._v(" 访问安装")]),s._v(" "),t("p",[s._v("再次访问安装wordpress")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129184024526.png?aliyun",alt:"image-20231129184024526"}})]),s._v(" "),t("p",[s._v("填写数据库信息")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129184118476.png?aliyun",alt:"image-20231129184118476"}})]),s._v(" "),t("p",[s._v("填写信息")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129184435116.png?aliyun",alt:"image-20231129184435116"}})]),s._v(" "),t("p",[s._v("至此wordpress安装成功")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231129184556118.png?aliyun",alt:"image-20231129184556118"}})]),s._v(" "),t("h2",{attrs:{id:"目录权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录权限"}},[s._v("#")]),s._v(" 目录权限")]),s._v(" "),t("p",[s._v("WordPress安装插件等操作需要对网站目录拥有写入权限，而群晖设定的http用户只包含读取权限而不包含写入权限，这会导致一些操作失败或异常，所以接下来我们要调整文件夹的权限。")]),s._v(" "),t("p",[s._v("首先我们打开File Station并找到WordPress目录，然后点击“属性”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"H:/typora_images/image-20231207133430116.png",alt:"image-20231207133430116"}})]),s._v(" "),t("p",[s._v("来到这个界面，我们切换到“权限”")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231207133555332.png?aliyun",alt:"image-20231207133555332"}})]),s._v(" "),t("p",[s._v("我们选中“http”（图像为单人）并按“编辑”")]),s._v(" "),t("p",[t("img",{attrs:{src:"H:/typora_images/image-20231207133657747.png",alt:"image-20231207133657747"}})]),s._v(" "),t("p",[s._v("然后我们把“写入”部分全部打勾，完成后点击“完成”")]),s._v(" "),t("p",[t("img",{attrs:{src:"H:/typora_images/image-20231207133712027.png",alt:"image-20231207133712027"}})]),s._v(" "),t("p",[s._v("回到这个界面，我们将“应用到这个文件夹、子文件夹及文件”打上勾，然后点击“保存”")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231207133724269.png?aliyun",alt:"image-20231207133724269"}})]),s._v(" "),t("p",[s._v("设置权限部分完成啦！")]),s._v(" "),t("h2",{attrs:{id:"解决需要ftp账户密码的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决需要ftp账户密码的问题"}},[s._v("#")]),s._v(" 解决需要FTP账户密码的问题")]),s._v(" "),t("p",[s._v("但是，当我们安装插件时，我们就会碰上WordPress要求FTP账号密码这个问题")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20231207133820660.png?aliyun",alt:"image-20231207133820660"}})]),s._v(" "),t("p",[s._v("要解决这个问题，我们首先要打开File Station，并找到WordPress的目录。然后打开wp-config.php")]),s._v(" "),t("p",[s._v("在这个php文件的第86行加入如下代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("define('FS_METHOD', 'direct');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("这种方法不仅可以安装wordpress的项目，同样也可以安装任何PHP+mysql的项目。")])])}),[],!1,null,null,null);a.default=e.exports}}]);