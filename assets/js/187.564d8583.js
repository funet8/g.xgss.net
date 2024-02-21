(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{768:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux服务器局域网通过一台iptables计算机桥接上网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux服务器局域网通过一台iptables计算机桥接上网"}},[s._v("#")]),s._v(" linux服务器局域网通过一台iptables计算机桥接上网")]),s._v(" "),t("h2",{attrs:{id:"需求实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求实现"}},[s._v("#")]),s._v(" 需求实现")]),s._v(" "),t("p",[s._v("最近上了两天mysql服务器，没有分配公网ip，所以无法访问公网的一些资源。但是里面有些服务需要公网才能实现。")]),s._v(" "),t("p",[s._v("这是需求：其实功能使用iptables来实现SNAT转发，可以让无公网IP的服务器与公网通信")]),s._v(" "),t("p",[s._v("服务器A，双网卡")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("系统： centos\nIP:192.168.20.178\nIP2:XX.XX.XX.XXX\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("服务器B，单网卡")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IP:192.168.20.200\n\n要实现B通过A上公网\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"在a上操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在a上操作"}},[s._v("#")]),s._v(" 在A上操作")]),s._v(" "),t("h3",{attrs:{id:"_1-开启其转发功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启其转发功能"}},[s._v("#")]),s._v(" 1.开启其转发功能")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# vi /etc/sysctl.conf\n开启转发\nnet.ipv4.ip_forward=1\n# echo 1 > /proc/sys/net/ipv4/ip_forward\n#sysctl -p（使之立即生效）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_2-对iptables进行规制的设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-对iptables进行规制的设置"}},[s._v("#")]),s._v(" 2.对iptables进行规制的设置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("iptables -F     #清除掉之前所有的iptables规则（生产环境谨慎使用）\niptables -P INPUT ACCEPT        #允许接收数据包\niptables -P FORWARD ACCEPT      #允许发送数据包\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("iptables -t nat -A POSTROUTING -s 192.168.20.0/24 -o em1 -j MASQUERADE      #在有外部IP的网口上做NAT\nservice iptables save\nservice iptables restart\nservice iptables status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3-重启网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启网络"}},[s._v("#")]),s._v(" 3.重启网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/etc/init.d/network restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"在服务器b上操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在服务器b上操作"}},[s._v("#")]),s._v(" 在服务器B上操作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# vi /etc/sysconfig/network-scripts/ifcfg-em2\n修改：\nGATEWAY=192.168.20.178\nDNS1=114.114.114.114\n重启网络：\n# service network restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("再ping www.baidu.com 看能否ping通")]),s._v(" "),t("h2",{attrs:{id:"走过的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#走过的坑"}},[s._v("#")]),s._v(" 走过的坑")]),s._v(" "),t("p",[s._v("1.在执行第二步“对iptables进行规制的设置”设置的时候，由于原服务器有iptables的规则，不能直接iptables -F\n就在/etc/sysconfig/iptables 跟本地对照记录。\n删除了“-A FORWARD -j REJECT --reject-with icmp-host-prohibited ”这条记录，而找到原因的时候是在本地搭建好了，\n先在本地的虚拟机实现了该功能，同样的iptables记录可以")]),s._v(" "),t("p",[s._v("2.B服务器还要配置一个DNS")]),s._v(" "),t("p",[s._v("参考：\nhttps://blog.csdn.net/hbhswxy2007/article/details/48462959\nhttps://blog.csdn.net/hiccupzhu/article/details/51073557")])])}),[],!1,null,null,null);a.default=n.exports}}]);