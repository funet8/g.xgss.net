(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{817:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安卓手机上安装linux开源模拟器-termux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安卓手机上安装linux开源模拟器-termux"}},[s._v("#")]),s._v(" 安卓手机上安装Linux开源模拟器-Termux")]),s._v(" "),t("h2",{attrs:{id:"什么是termux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是termux"}},[s._v("#")]),s._v(" 什么是Termux")]),s._v(" "),t("p",[s._v("Termux是一款基于 Android 平台的开源 Linux 终端模拟器，使用 pkg(apt) 进行软件包的管理。最重要的是，它无需手机 root 权限，因此，绝大多数 Android 都可以运行。")]),s._v(" "),t("p",[s._v("Termux本质上是一个终端模拟器加上一套Linux的最小系统。这里的系统指的是用户态的系统，最终还是要运行在下面的Linux内核上的，而且受到Android系统本身的安全限制。比如在没有root的系统上无法访问特定路径或者没有写入权限。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/Termux.gif?aliyun",alt:"Termux"}})]),s._v(" "),t("h2",{attrs:{id:"termux可以做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#termux可以做什么"}},[s._v("#")]),s._v(" Termux可以做什么")]),s._v(" "),t("p",[s._v("目前来说，它能做一些简单的 Linux 任务")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("享受 Bash 和 Zsh\n运行 Nginx,MySQL，Redis 等服务器软件\n使用 Vim 编辑文件\n通过 SSH 访问服务器\n使用 GCC 和 Clang 编译代码\n使用 Git 检查项目\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"一、安装termux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装termux"}},[s._v("#")]),s._v(" 一、安装Termux")]),s._v(" "),t("p",[s._v("无需多言，首先你需要一个按说手机，再下载按说app。")]),s._v(" "),t("p",[s._v("开源地址： https://github.com/termux/termux-app")]),s._v(" "),t("p",[s._v("APP下载地址： https://github.com/termux/termux-app/releases")]),s._v(" "),t("p",[s._v("https://f-droid.org/en/packages/com.termux/")]),s._v(" "),t("p",[s._v("下载对应版本，由于笔者手机是arm 64位的，这边下载 ‘termux-app_v0.118.0 github-debug_arm64-v8a.apk’")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220616175542234.png?aliyun",alt:"image-20220616175542234"}})]),s._v(" "),t("h2",{attrs:{id:"二、环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、环境准备"}},[s._v("#")]),s._v(" 二、环境准备")]),s._v(" "),t("p",[s._v("打开 Termux 以后，就是一个全屏的命令行界面。虽然可以用手机的触摸键盘输入命令，但还是推荐使用蓝牙键盘。")]),s._v(" "),t("p",[s._v("安装之后的命令行界面：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220616180543026.png?aliyun",alt:"image-20220616180543026"}})]),s._v(" "),t("h2",{attrs:{id:"三、更新系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、更新系统"}},[s._v("#")]),s._v(" 三、更新系统")]),s._v(" "),t("p",[s._v("更新一下系统，保证使用最新版本。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接远程仓库，获取软件包信息")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地已经安装的软件包")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 sl 软件包")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sl\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行，上面命令安装测试包sl，然后运行。如果一切正常，会显示一个火车的命令行动画。")]),s._v("\n\n$ sl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"四、访问本机存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、访问本机存储"}},[s._v("#")]),s._v(" 四、访问本机存储")]),s._v(" "),t("p",[s._v("手机 App 默认只能访问自己的数据，如果要访问手机的存储，需要请求权限。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ termux-setup-storage\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v('执行上面的命令以后，会跳出一个对话框，询问是否允许 Termux 访问手机存储，点击"允许"。')]),s._v(" "),t("p",[s._v("这会在当前目录下生成一个storage子目录，它是手机存储的符号链接，后文下载文件就是到这个目录去下载。")]),s._v(" "),t("h2",{attrs:{id:"五、软件包管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、软件包管理"}},[s._v("#")]),s._v(" 五、软件包管理")]),s._v(" "),t("p",[s._v("除了apt命令，Termux 还提供pkg命令进行软件包管理。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 安装软件包\n\n$ pkg install [package name]\n\n# 卸载软件包\n\n$ pkg uninstall [package name]\n\n# 列出所有软件包\n\n$ pkg list-all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("其实，"),t("code",[s._v("pkg")]),s._v("的"),t("a",{attrs:{href:"https://github.com/termux/termux-packages/issues/2151#issuecomment-486184252",target:"_blank",rel:"noopener noreferrer"}},[s._v("底层"),t("OutboundLink")],1),s._v("就是"),t("code",[s._v("apt")]),s._v("，只是运行前会执行一次"),t("code",[s._v("apt update")]),s._v("，保证安装的是最新版本。所以，"),t("code",[s._v("apt install sl")]),s._v("基本等同于"),t("code",[s._v("pkg install sl")]),s._v("。")]),s._v(" "),t("p",[s._v("Termux 支持的软件包清单，可以到"),t("a",{attrs:{href:"https://github.com/termux/termux-packages/tree/master/packages",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("查看。")]),s._v(" "),t("h2",{attrs:{id:"六、node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、node-js"}},[s._v("#")]),s._v(" 六、Node.js")]),s._v(" "),t("p",[s._v("下面，安装 Node.js。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("安装完成后，就可以运行 JavaScript 脚本了。比如，新建一个脚本"),t("code",[s._v("hello.js")]),s._v("。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("$ apt install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y vim"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("python\n\n$ vim hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hello.js")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("p",[s._v("然后，执行这个脚本。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" hello.js\nhello world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"七、架设-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、架设-server"}},[s._v("#")]),s._v(" 七、架设 Server")]),s._v(" "),t("p",[s._v("现在，通过 Node.js 运行 HTTP Server。")]),s._v(" "),t("p",[s._v("首先，安装 npm 模块"),t("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("http-server")]),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g http-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("然后，运行 Server。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ http-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("正常情况下，命令行会提示 Server 已经在 8080 端口运行了，并且还会提示外部可以访问的 IP 地址。")]),s._v(" "),t("p",[s._v("举例来说，手机的局域网 IP 是 192.168.2.6，那么我们通过桌面电脑的浏览器访问"),t("code",[s._v("http://192.168.2.6:8080")]),s._v("，就可以看到 Termux 的根目录了。进入下面的"),t("code",[s._v("storage")]),s._v("子目录，就可以下载手机文件了。")]),s._v(" "),t("h2",{attrs:{id:"八、python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、python"}},[s._v("#")]),s._v(" 八、Python")]),s._v(" "),t("p",[s._v("不使用 Node.js，而使用其他方法架设 HTTP Server 也是可以的。下面演示 Python 的方法。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python\n$ python -m http.server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("p",[s._v("然后，桌面电脑就可以访问手机了。")]),s._v(" "),t("h2",{attrs:{id:"九、安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、安装nginx"}},[s._v("#")]),s._v(" 九、安装nginx")]),s._v(" "),t("h3",{attrs:{id:"安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ pkg install nginx \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx"}},[s._v("#")]),s._v(" 启动nginx")]),s._v(" "),t("p",[s._v("默认是启动的如果关闭的话输入命令nginx启动")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"nginx常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用命令"}},[s._v("#")]),s._v(" nginx常用命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nginx -s quit //优雅停止nginx，有连接时会等连接请求完成再杀死worker进程\n\nnginx -s reload //优雅重启，并重新载入配置文件nginx.conf\n\nnginx -s reopen //重新打开日志文件，一般用于切割日志\n\nnginx -v //查看版本\n\nnginx -t //检查nginx的配置文件\n\nnginx -h //查看帮助信息\n\nnginx -V //详细版本信息，包括编译参数\n\nnginx -c filename //指定配置文件\n\npkg files nginx 查看nginx路径\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("浏览器输入127.0.0.1:8080看到以下界面即成功")]),s._v(" "),t("h3",{attrs:{id:"查看ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看ip"}},[s._v("#")]),s._v(" 查看ip")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ifconfig\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Termux 是非常强大的工具，除了上面的方法，还可以架设 "),t("a",{attrs:{href:"http://www.termuxtutorials.ga/2018/06/how-to-install-apache2-in-termux-termux.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Apache 服务器"),t("OutboundLink")],1),s._v("，或者通过其他途径（FTP、SSH、Rsync）访问手机，这里就不详细介绍了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);