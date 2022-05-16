module.exports = {
  title: '星哥私有教程',
  description: '星哥说事vuepress描述，包含前端、后端、运维、等技术的介绍',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'manifest', href: '/images/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.png' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  //host: '192.168.1.5', // 指定特定的IP
  host: 'localhost', // 只能使用http://localhost:8099 访问
  port: '8099', //端口号
  //theme: '@vuepress/blog',
  //theme: 'vuepress-theme-note',
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    search: false, //关闭搜索
    searchMaxSuggestions: 10,
    nav: [
      { text: '首页', link: '/' },
      { text: '帮助', link: '/guide/' },
      { text: '前端文档', link: '/qianduan/' },
	  { text: '后端文档', link: '/houduan/' },
	  { text: '安卓文档', link: '/anzhuo/' },
	  {
		text: '海外项目',
			items: [
			{ text: '海外1', link: '/haiwaiA/haiwai1/' },
			{ text: '海外2', link: '/haiwaiB/haiwai2/' }
          ]
        }
    ],
	sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
	
    /**
	//固定在侧边栏
	sidebar: [
      ['/','首页'],
      ['/帮助/','guide'],
      ['/前端文档/','前端文档1'],
    ]**/
  }
}

