(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{741:function(s,a,n){"use strict";n.r(a);var e=n(17),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"在centos-7下构建安卓android编译环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在centos-7下构建安卓android编译环境"}},[s._v("#")]),s._v(" 在CentOS 7下构建安卓Android编译环境")]),s._v(" "),n("p",[s._v("根据安卓开发的需求实现流程")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.安卓开发工程师本机开发\n2.提交Git仓库-master分支\n3.jenkins手动打包(可实现自动)，进入后台 http://192.168.1.8:9091/\n执行任务:\n打包服务器拉取最新git仓库代码\n进入项目目录执行\n./gradlew :launcher:assembleRelease\n4.将生成的apk包cp到 http://android.XXXX.ltd WEB目录，安卓研发下载apk包\n5.测试\n6.上线投放\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("分三篇文章讲解")]),s._v(" "),n("p",[s._v("1."),n("a",{attrs:{href:"https://g.xgss.net/kaiyuan/android/1.Centos7-Android-software.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS7下构建安卓Android编译环境"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("2."),n("a",{attrs:{href:"http://g.xgss.net/devops/CentOS-7-Install-Jenkins.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS7下安装Jenkins"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("3."),n("a",{attrs:{href:"http://g.xgss.net/kaiyuan/android/3.Centos7-Android-jenkins.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("基于centos7的jenkins安卓自动打包"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("img",{attrs:{src:"http://imgoss.xgss.net/picgo/android.png?aliyunoss",alt:"在 CentOS7 下构建 Android 编译环境"}})]),s._v(" "),n("p",[s._v("在 Android Studio 之外，还可以通过 Gradle Script 来编译 Android 项目并构建和测试应用。\n本文是一个备忘录，以记录我在 x86_64 GNU/Linux 系统 CentOS Linux release 7.8.2003 下折腾 Android 编译环境的一个过程。")]),s._v(" "),n("p",[s._v("本文将会安装以下组件：")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Git\nJDK 1.8\nGo 1.14.7\nAndroid SDK\n  Android NDK\nRust 1.45.0\n  Android Targets:\n    armv7-linux-androideabi\n    aarch64-linux-android\n    i686-linux-android\n    x86_64-linux-android\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("以下的所有过程均是在 root 用户下操作。")]),s._v(" "),n("h3",{attrs:{id:"_1-安装-git-和-jdk-1-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-git-和-jdk-1-8"}},[s._v("#")]),s._v(" 1. 安装 Git 和 JDK 1.8")]),s._v(" "),n("p",[s._v("这两个组件发行版自带，通过以下命令即可安装。与此同时，再安装一些其他必要的组件 wget 和 unzip。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel wget unzip git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("完成后通过以下命令验证 JDK 版本号。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ java -version\nopenjdk version "1.8.0_252"\nOpenJDK Runtime Environment (build 1.8.0_252-b09)\nOpenJDK 64-Bit Server VM (build 25.252-b09, mixed mode)\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ javac -version\njavac 1.8.0_252\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_2-安装-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-go"}},[s._v("#")]),s._v(" 2. 安装 Go")]),s._v(" "),n("p",[s._v("目前 Go 的最新版是 1.14.7。安装过程如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ GO_VERSION=1.14.7\n$ wget -O /tmp/go${GO_VERSION}.tar.gz http://js.funet8.com/centos_software/go${GO_VERSION}.linux-amd64.tar.gz\n$ tar -C /usr/local -xzf /tmp/go${GO_VERSION}.tar.gz\n$ rm -fv /tmp/go${GO_VERSION}.tar.gz\n$ export PATH=/usr/local/go/bin:$PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("完成后通过以下命令验证 Go 版本号。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ go version\ngo version go1.14.7 linux/amd64\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"_3-安装-android-sdk-及-android-ndk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-android-sdk-及-android-ndk"}},[s._v("#")]),s._v(" 3. 安装 Android SDK 及 Android NDK")]),s._v(" "),n("p",[s._v("假设 "),n("code",[s._v("ANDROID_HOME")]),s._v(" 路径是 "),n("code",[s._v("/data/sdk")]),s._v("。安装过程如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ mkdir -p /data/sdk && cd /data/sdk\n$ wget http://js.funet8.com/centos_software/commandlinetools-linux-6609375_latest.zip\n$ unzip -q commandlinetools-linux-6609375_latest.zip\n$ rm -fv commandlinetools-linux-6609375_latest.zip\n$ export PATH=/data/sdk/tools/bin:$PATH\n$ [ -z "${ANDROID_HOME}" ] && export ANDROID_HOME=/data/sdk\n$ yes | sdkmanager --sdk_root=${ANDROID_HOME} --licenses\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("通过 "),n("code",[s._v("sdkmanager")]),s._v(" 来安装一些组件。一条命令一步到位。如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ sdkmanager --sdk_root=${ANDROID_HOME} "platform-tools" "platforms;android-30" "platforms;android-29" "ndk-bundle" "ndk;21.0.6113669" "build-tools;29.0.2"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("完成后，确认已安装的列表。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sdkmanager --sdk_root=${ANDROID_HOME} --list\nInstalled packages:\n  Path                 | Version      | Description                     | Location             \n  -------              | -------      | -------                         | -------              \n  build-tools;29.0.2   | 29.0.2       | Android SDK Build-Tools 29.0.2  | build-tools/29.0.2/  \n  ndk-bundle           | 21.3.6528147 | NDK                             | ndk-bundle/          \n  ndk;21.0.6113669     | 21.0.6113669 | NDK (Side by side) 21.0.6113669 | ndk/21.0.6113669/    \n  patcher;v4           | 1            | SDK Patch Applier v4            | patcher/v4/          \n  platform-tools       | 30.0.3       | Android SDK Platform-Tools      | platform-tools/      \n  platforms;android-29 | 4            | Android SDK Platform 29         | platforms/android-29/\n  platforms;android-30 | 1            | Android SDK Platform 30         | platforms/android-30/\n  tools                | 2.1.0        | Android SDK Tools 2.1           | tools/               \nAvailable Packages:\n  以下省略\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"_4-安装-rust-及其它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-rust-及其它"}},[s._v("#")]),s._v(" 4. 安装 Rust 及其它")]),s._v(" "),n("p",[s._v("目前 Rust 的最新版是 1.45.0。安装过程如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ export RUSTUP_HOME=/usr/local/rustup CARGO_HOME=/usr/local/cargo\n$ RUST_VERSION=1.45.0\n$ RUSTARCH='x86_64-unknown-linux-gnu'\n$ wget -O /tmp/rustup-init \"https://static.rust-lang.org/rustup/archive/1.21.1/${RUSTARCH}/rustup-init\"\n$ chmod 755 /tmp/rustup-init\n$ /tmp/rustup-init -y --no-modify-path --profile minimal --default-toolchain $RUST_VERSION\n$ rm -fv /tmp/rustup-init\n$ chmod -R a+w ${RUSTUP_HOME} ${CARGO_HOME}\n$ export PATH=/usr/local/cargo/bin:$PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("完成后通过以下命令验证 Rust 及组件的版本号。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ rustup --version\nrustup 1.21.1 (7832b2ebe 2019-12-20)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ cargo --version\ncargo 1.45.0 (744bd1fbb 2020-06-15)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ rustc --version\nrustc 1.45.0 (5c1f21c3b 2020-07-13)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Rust 安装以下 Android Targets:")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("armv7-linux-androideabi\naarch64-linux-android\ni686-linux-android\nx86_64-linux-android\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("安装过程如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ rustup install stable\n$ rustup default stable\n$ rustup target add armv7-linux-androideabi\n$ rustup target add i686-linux-android\n$ rustup target add aarch64-linux-android\n$ rustup target add x86_64-linux-android\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_5-持久化环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-持久化环境变量"}},[s._v("#")]),s._v(" 5. 持久化环境变量")]),s._v(" "),n("p",[s._v("上面的安装步骤是通过 export 来定义系统 PATH 的，在退出当前登录后就会丢失设置。\n因此需要持久化一些环境变量。\n编辑 "),n("code",[s._v("~/.bash_profile")]),s._v(" 文件。添加 "),n("code",[s._v("ANDROID_HOME")]),s._v("，"),n("code",[s._v("RUSTUP_HOME")]),s._v("，"),n("code",[s._v("CARGO_HOME")]),s._v(" 的定义以及增加 "),n("code",[s._v("PATH")]),s._v(" 定义。\n最后呈现内容如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# .bash_profile\n\n# Get the aliases and functions\nif [ -f ~/.bashrc ]; then\n. ~/.bashrc\nfi\n\n# User specific environment and startup programs\n\nexport ANDROID_HOME=/data/sdk RUSTUP_HOME=/usr/local/rustup CARGO_HOME=/usr/local/cargo\n\nPATH=$PATH:$HOME/bin:$ANDROID_HOME/tools/bin:/usr/local/go/bin:/usr/local/cargo/bin\n\nexport PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"_6-编译-android-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-编译-android-项目"}},[s._v("#")]),s._v(" 6. 编译 Android 项目")]),s._v(" "),n("p",[s._v("这里选一个比较简单的项目来练手："),n("a",{attrs:{href:"https://github.com/shadowsocks/v2ray-plugin-android",target:"_blank",rel:"noopener noreferrer"}},[s._v("v2ray-plugin-android"),n("OutboundLink")],1),s._v("。\n编译过程如下。")]),s._v(" "),n("div",{staticClass:"language-bsh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git clone https://github.com/shadowsocks/v2ray-plugin-android.git\n$ cd v2ray-plugin-android\n$ git submodule update --init --recursive\n$ ./gradlew assembleRelease\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("完成后，编译好的 apk 文件位于 "),n("code",[s._v("app/build/outputs/apk/release")]),s._v(" 路径下。\nAndroid 系统要求所有 apk 必须先使用证书进行数字签名，然后才能安装到设备上或进行更新。\n因此这些 apk 文件还不能被直接拿来安装。\n至于如何签名，请参考以下链接，过程省略。\nhttps://developer.android.com/studio/publish/app-signing")]),s._v(" "),n("h3",{attrs:{id:"_7-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-总结"}},[s._v("#")]),s._v(" 7. 总结")]),s._v(" "),n("p",[s._v("当你习惯于用命令行做事的时候，你会发现效率往往会有很大的提升。编译代码亦是如此。")])])}),[],!1,null,null,null);a.default=t.exports}}]);