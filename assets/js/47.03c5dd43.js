(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{631:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库硬盘空间可用小于90-解决的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库硬盘空间可用小于90-解决的方案"}},[s._v("#")]),s._v(" 数据库硬盘空间可用小于90%解决的方案")]),s._v(" "),a("h2",{attrs:{id:"一-问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-问题描述"}},[s._v("#")]),s._v(" "),a("strong",[s._v("一.问题描述")])]),s._v(" "),a("p",[s._v("我司在某云的MySQL数据库占硬盘空间大于90%，RDS空间总空间为 700G，表A分析之后。某渠道统计的表有5亿，单表空间超过350G。")]),s._v(" "),a("p",[s._v("服务器架构：一主多从。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/mysql-kongjian.webp.jpg?aliyun",alt:"mysql-kongjian.webp"}})]),s._v(" "),a("p",[s._v("报警截图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808191051773.png?aliyun",alt:"image-20220808191051773"}})]),s._v(" "),a("h2",{attrs:{id:"二-处理流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-处理流程"}},[s._v("#")]),s._v(" "),a("strong",[s._v("二.处理流程")])]),s._v(" "),a("h3",{attrs:{id:"_1-解决方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决方法一"}},[s._v("#")]),s._v(" 1.解决方法一：")]),s._v(" "),a("p",[s._v("钞能力，增加RDS硬盘空间，剧终！但是会有大表查询效率问题，数据到达一定量还是需要会出现同样的问题。")]),s._v(" "),a("h3",{attrs:{id:"_2-解决方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方法二"}},[s._v("#")]),s._v(" 2.解决方法二：")]),s._v(" "),a("ol",[a("li",[s._v("备份表A（mysqldump、xtrabackup等）")]),s._v(" "),a("li",[s._v("跟研发沟通，新建相同表结构B，将业务数据写入表B中，跑一段时间无问题。【实际业务中，将此表按月分表】")]),s._v(" "),a("li",[s._v("截断表A，释放硬盘空间（不会导致主从延迟）。")]),s._v(" "),a("li",[s._v("定时任务：定期备份删除过期数据。")])]),s._v(" "),a("h3",{attrs:{id:"涉及到的知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#涉及到的知识点"}},[s._v("#")]),s._v(" 涉及到的知识点：")]),s._v(" "),a("p",[s._v("mysql备份（鄙视一下某云，某云备份居然还要收费）。")]),s._v(" "),a("p",[s._v("截断表是否会导致主从延迟（不会）。")]),s._v(" "),a("h3",{attrs:{id:"表空间分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表空间分析"}},[s._v("#")]),s._v(" "),a("strong",[s._v("表空间分析")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808191309186.png?aliyun",alt:"image-20220808191309186"}})]),s._v(" "),a("h2",{attrs:{id:"mysqldump-备份命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump-备份命令"}},[s._v("#")]),s._v(" mysqldump 备份命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqldump -u 用户名 -h 数据库地址 -p '密码' --opt 数据库名 表名 > /data/备份文件名.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("备份表的时候报错：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqldump: Error 2013: Lost connection to MySQL server during query when dumping table `XXXXX` at row: 686431\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("有报错，于是发工单，某云客服推荐使用DMS导出")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808191804226.png?aliyun",alt:"image-20220808191804226"}})]),s._v(" "),a("p",[s._v("备份的时候影响小部分性能，**但是免费居然超过免费额度。**本着能免费，为啥要收费呢， 真的是无语了，浪费几个小时！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("导出失败: 您当前使用的数据库实例管控模式为“自由操作”，已超出免费额度1,000,000。如您需要继续操作请调整实例管控模式为“稳定变更”、“安全协同”后再进行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808191908156.png?aliyun",alt:"image-20220808191908156"}})]),s._v(" "),a("p",[s._v("域名是修改数据库配置，再用mysqldump 将表导出。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("net_read_timeout：30\nnet_write_timeout：60\n\n于是把这个参数修改为：\n\nnet_read_timeout：288000\nnet_write_timeout：288000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("修改数据库配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808192112459.png?aliyun",alt:"image-20220808192112459"}})]),s._v(" "),a("p",[s._v("再用mysqldump导出数据库，等了将近十几个小时之后终于备份成功，大小为193G")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqldump -u 用户名 -h 数据库地址 -p '密码' --opt 数据库名 表名 > /data/备份文件名.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"新上一张表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新上一张表"}},[s._v("#")]),s._v(" "),a("strong",[s._v("新上一张表")])]),s._v(" "),a("p",[s._v("实际在跟研发沟通，按月来做分表。比如：表名+日期  table_2208")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/image-20220808192123971.png?aliyun",alt:"image-20220808192123971"}})]),s._v(" "),a("h3",{attrs:{id:"截断表之后的硬盘总大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截断表之后的硬盘总大小"}},[s._v("#")]),s._v(" "),a("strong",[s._v("截断表之后的硬盘总大小")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgoss.xgss.net/picgo/wps9.jpg?aliyun",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"删除表和截断表命令之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除表和截断表命令之间的区别"}},[s._v("#")]),s._v(" "),a("strong",[s._v("删除表和截断表命令之间的区别")])]),s._v(" "),a("p",[s._v("表删除包括表的定义和关联对象（规则、索引、约、触发器、主键，等）。很明显，一旦表被删除，那么表中包含的所有的数据行都会被一同删除。")]),s._v(" "),a("p",[s._v("truncate 命令则仅仅删除了表中所有的数据行。表的结构和所有的索引仍然继续存在，直到你输入删除表的命令（如上所述）。绑定到列上的规则、默认值、约束仍然继续绑定，并且触发器也仍然起作用。")]),s._v(" "),a("p",[s._v("截断表命令还会回收所有索引的分配页。")]),s._v(" "),a("p",[s._v("截断表的执行速度与不带where子句的delete（删除）命令相同，甚至比它还要快。delete（删除） 一次删除一行数据，并且将每一行被删除的数据都作为一个事务记录日志；而truncate （截断）表则回收整个数据页，只记录很少的日志项。delete（删除）和truncate（截断）都会回收被数据占用的空间，以及相关的索引。只有表的拥有者可以截断表。")])])}),[],!1,null,null,null);t.default=r.exports}}]);