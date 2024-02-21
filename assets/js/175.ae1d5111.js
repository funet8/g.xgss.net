(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{755:function(a,s,t){"use strict";t.r(s);var n=t(17),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"一文读懂cdn和cdn实现的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一文读懂cdn和cdn实现的原理"}},[a._v("#")]),a._v(" 一文读懂CDN和CDN实现的原理")]),a._v(" "),t("h1",{attrs:{id:"什么是cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是cdn"}},[a._v("#")]),a._v(" 什么是CDN")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/20201014cdn.jpg?aliyun",alt:"20201014cdn"}})]),a._v(" "),t("p",[t("a",{attrs:{href:"https://baike.baidu.com/item/CDN/420951",target:"_blank",rel:"noopener noreferrer"}},[a._v("百度百科CDN"),t("OutboundLink")],1),a._v("的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。")]),a._v(" "),t("p",[a._v("CDN简单的来说就是存储一些静态文件的一台或多台服务器，通过复制，缓存等方式，将文件保存其中。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/731c3dfcc0ff4cdda666f331139a793a.jpg?aliyun",alt:"731c3dfcc0ff4cdda666f331139a793a"}})]),a._v(" "),t("h2",{attrs:{id:"如果没有cdn会怎么样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果没有cdn会怎么样"}},[a._v("#")]),a._v(" 如果没有CDN会怎么样？")]),a._v(" "),t("p",[a._v("图片各种加载不出来，视频总在加载，淘宝无法下单、直播卡顿、优酷爱奇艺转圈圈等")]),a._v(" "),t("h2",{attrs:{id:"cdn会加速什么文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn会加速什么文件"}},[a._v("#")]),a._v(" CDN会加速什么文件？")]),a._v(" "),t("p",[a._v("css，html，jpg，png，apk，mp4等媒体都属于静态文件，也就是说用户发送的请求不会影响静态文件的内容，")]),a._v(" "),t("p",[a._v("而jsp，php等文件就不属于静态文件，因为他们的内容会因我们的请求而发生改变（回源）。")]),a._v(" "),t("h2",{attrs:{id:"cdn如何实现加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn如何实现加速"}},[a._v("#")]),a._v(" CDN如何实现加速？")]),a._v(" "),t("p",[a._v("通常情况下，我们所要的数据都是从主服务器中获取，但假如我们的主服务器在南方，而访问用户在北方，那么访问速度就会相对变慢，变慢的原因有很多，例如传输距离，运营商，带宽等等因素，而使用CDN技术的话，我们会将CDN节点分布在各地，当用户发送请求到达服务器时，服务器会根据用户的区域信息，为用户分配最近的CDN服务器。")]),a._v(" "),t("p",[a._v("可以把CDN看成主服务器在各地开的分店。例如大型的连锁超市，在深圳的用户就到最近的深圳节点去获取静态资源，北京就去北京节点获取文件")]),a._v(" "),t("h2",{attrs:{id:"cdn数据从哪里来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn数据从哪里来"}},[a._v("#")]),a._v(" CDN数据从哪里来？")]),a._v(" "),t("p",[a._v("复制，缓存，CDN服务器可以在用户请求后缓存文件，也可以主动抓取主服务器内容。")]),a._v(" "),t("h2",{attrs:{id:"cdn优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn优点"}},[a._v("#")]),a._v(" CDN优点")]),a._v(" "),t("ul",[t("li",[t("ol",[t("li",[a._v("远程加速：远程访问用户根据DNS负载均衡技术智能自动选择Cache服务器，选择最快的Cache服务器，加快远程访问的速度。")]),a._v(" "),t("li",[a._v("镜像服务：消除了不同运营商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量。镜像功能可以解决不同运营商之间无法互通的问题")]),a._v(" "),t("li",[a._v("本地Cache加速：提高了企业站点（尤其含有大量图片和静态页面站点）的访问速度，并大大提高以上性质站点的稳定性。")]),a._v(" "),t("li",[a._v("缓解源服务器压力：CDN可以实现远程镜像Cache服务器，远程用户访问时可以直接从Cache上读取数据，这样不仅可以减少服务器本身流量的消耗，对带宽不会有很多的压力。")]),a._v(" "),t("li",[a._v("带宽优化：自动生成服务器的远程Mirror（镜像）cache服务器，远程用户访问时从cache服务器上读取数据，减少远程访问的带宽、分担网络流量、减轻原站点WEB服务器负载等功能。")]),a._v(" "),t("li",[a._v("集群抗攻击：广泛分布的CDN节点加上节点之间的智能冗余机制，可以有效地预防黑客入侵以及降低各种D.D.o.S攻击对网站的影响，同时保证较好的服务质量 。")]),a._v(" "),t("li",[a._v("安全性：由于不同的访客访问的是不同的"),t("strong",[a._v("缓存服务器")]),a._v("中的内容，所以隐藏了源服务器的真实IP，使源服务器不容易收到攻击。")])])])]),a._v(" "),t("h2",{attrs:{id:"cdn缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn缺点"}},[a._v("#")]),a._v(" CDN缺点")]),a._v(" "),t("ul",[t("li",[a._v("费用成本增加")]),a._v(" "),t("li",[a._v("CDN的实施是非常复制的，工程比较庞大，建议客户选择一些技术好，口配好的提供商。如果小的CDN运营商不仅不会加速还会起到反作用。")]),a._v(" "),t("li",[a._v("会影响SEO（由于CDN的镜像功能，有可能同一个IP下出现了很多网站，导致网站的权重分散），可忽略。")]),a._v(" "),t("li",[a._v("对开发者影响：有时源服务器文件已修改，但是通过浏览器（清理浏览器缓存）依然看到的是未更新的文件。")])]),a._v(" "),t("h2",{attrs:{id:"避免cdn文件缓存的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免cdn文件缓存的方法"}},[a._v("#")]),a._v(" 避免CDN文件缓存的方法")]),a._v(" "),t("p",[a._v("1.在静态资源URL链接后加参数")]),a._v(" "),t("p",[a._v("2.刷新链接：在后台更新目标URL(阿里云CDN后台、CDN服务商提供刷新接口)")]),a._v(" "),t("p",[a._v("3.域名绑定hosts到源服务器IP，绕过CDN。")]),a._v(" "),t("h1",{attrs:{id:"cdn工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn工作原理"}},[a._v("#")]),a._v(" CDN工作原理")]),a._v(" "),t("h2",{attrs:{id:"传统访问过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统访问过程"}},[a._v("#")]),a._v(" 传统访问过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/6534548-7c8899afcd671a0c.png?aliyun",alt:"img"}})]),a._v(" "),t("p",[a._v("由上图可见，用户访问未使用CDN缓存网站的过程为:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1.用户输入访问的域名,操作系统向 LocalDns 查询域名的ip地址.\n2.LocalDns向 ROOT DNS 查询域名的授权服务器(这里假设LocalDns缓存过期)\n3.ROOT DNS将域名授权dns记录回应给 LocalDns\n4.LocalDns得到域名的授权dns记录后,继续向域名授权dns查询域名的ip地址\n5.域名授权dns 查询域名记录后，回应给 LocalDns\n6.LocalDns 将得到的域名ip地址，回应给 用户端\n7.用户得到域名ip地址后，访问站点服务器\n8.站点服务器应答请求，将内容返回给客户端.\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h2",{attrs:{id:"cdn访问过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn访问过程"}},[a._v("#")]),a._v(" CDN访问过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://imgoss.xgss.net/picgo/6534548-eaabc85f59942d23.png?aliyun",alt:"img"}})]),a._v(" "),t("p",[a._v("通过上图，我们可以了解到，使用了CDN缓存后的网站的访问过程变为：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1.用户输入访问的域名,操作系统向 LocalDns 查询域名的ip地址.\n2.LocalDns向 ROOT DNS 查询域名的授权服务器(这里假设LocalDns缓存过期)\n3.ROOT DNS将域名授权dns记录回应给 LocalDns\n4.LocalDns得到域名的授权dns记录后,继续向域名授权dns查询域名的ip地址\n5.域名授权dns 查询域名记录后(一般是CNAME)，回应给 LocalDns\n6.LocalDns 得到域名记录后,向智能调度DNS查询域名的ip地址\n7.智能调度DNS 根据一定的算法和策略(比如静态拓扑，容量等),将最适合的CDN节点ip地址回应给 LocalDns\n8.LocalDns 将得到的域名ip地址，回应给 用户端\n9.用户得到域名ip地址后，访问站点服务器\n10.CDN节点服务器应答请求，将内容返回给客户端.(缓存服务器一方面在本地进行保存，以备以后使用，二方面把获取的数据返回给客户端，完成数据服务过程)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("通过以上的分析我们可以得到，为了实现对普通用户透明(使用缓存后用户客户端无需进行任何设置)访问，需要使用DNS(域名解析)来引导用户来访问Cache服务器，以实现透明的加速服务. 由于用户访问网站的第一步就是域名解析,所以通过修改dns来引导用户访问是最简单有效的方式.")]),a._v(" "),t("h1",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[a._v("#")]),a._v(" 名词解释")]),a._v(" "),t("h2",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[a._v("#")]),a._v(" DNS")]),a._v(" "),t("p",[a._v("DNS即Domain Name System，是域名解析服务的意思。它在互联网的作用是：把域名转换成为网络可以识别的ip地址。人们习惯记忆域名，但机器间互相只认IP地址，域名与IP地址之间是一一对应的，它们之间的转换工作称为域名解析，域名解析需要由专门的域名解析服务器来完成，整个过程是自动进行的。比如：上网时输入的www.baidu.com会自动转换成为220.181.112.143。\n常见的DNS解析服务商有：阿里云解析，万网解析，DNSPod，新网解析，Route53（AWS），Dyn，Cloudflare等。")]),a._v(" "),t("h2",{attrs:{id:"cname记录-cname-record"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cname记录-cname-record"}},[a._v("#")]),a._v(" CNAME记录（CNAME record）")]),a._v(" "),t("p",[a._v("CNAME即别名( Canonical Name )；可以用来把一个域名解析到另一个域名，当 DNS 系统在查询 CNAME 左面的名称的时候，都会转向 CNAME 右面的名称再进行查询，一直追踪到最后的 PTR 或 A 名称，成功查询后才会做出回应，否则失败。\n例如，你有一台服务器上存放了很多资料，你使用docs.example.com去访问这些资源，但又希望通过documents.example.com也能访问到这些资源，那么你就可以在您的DNS解析服务商添加一条CNAME记录，将documents.example.com指向docs.example.com，添加该条CNAME记录后，所有访问documents.example.com的请求都会被转到docs.example.com，获得相同的内容。")]),a._v(" "),t("h2",{attrs:{id:"cname域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cname域名"}},[a._v("#")]),a._v(" CNAME域名")]),a._v(" "),t("p",[a._v("接入CDN时，在CDN提供商控制台添加完加速域名后，您会得到一个CDN给您分配的CNAME域名， 您需要在您的DNS解析服务商添加CNAME记录，将自己的加速域名指向这个CNAME域名，这样该域名所有的请求才会都将转向CDN的节点，达到加速效果。")]),a._v(" "),t("h2",{attrs:{id:"回源host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回源host"}},[a._v("#")]),a._v(" 回源host")]),a._v(" "),t("p",[a._v("回源host：回源host决定回源请求访问到源站上的具体某个站点。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("例子1：源站是域名源站为www.a.com,回源host为www.b.com,那么实际回源是请求到www.a.com解析到的IP,对应的主机上的站点www.b.com\n\n例子2：源站是IP源站为1.1.1.1, 回源host为www.b.com,那么实际回源的是1.1.1.1对应的主机上的站点www.b.com\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"协议回源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议回源"}},[a._v("#")]),a._v(" 协议回源")]),a._v(" "),t("p",[a._v("指回源时使用的协议和客户端访问资源时的协议保持一致，即如果客户端使用 HTTPS 方式请求资源，当CDN节点上未缓存该资源时，节点会使用相同的 HTTPS 方式回源获取资源；同理如果客户端使用 HTTP 协议的请求，CDN节点回源时也使用HTTP协议。")])])}),[],!1,null,null,null);s.default=e.exports}}]);