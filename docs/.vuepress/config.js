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
  host: 'localhost', // 只能使用http://localhost:8099 , 可以指定ip
  port: '8099', //端口号
  //theme: '@vuepress/blog',
  //theme: 'vuepress-theme-note',
  theme: 'reco',
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    search: true, //搜索
    searchMaxSuggestions: 10,
    nav: [
		{ text: '首页', link: '/' },
		{ text: 'Linux基础教程',
			items: [
			{ text: '基础知识', link: '/linux-basis/' },
			{ text: 'DevOps', link: '/devops/' },
			{ text: 'WEB服务', link: '/web/' },
			{ text: '文件系统', link: '/file-system/' },
			{ text: 'nginx', link: '/nginx/' },
          ]
		},
		{
		text: '开源软件',
			items: [
			{ text: '开源软件', link: '/kaiyuan/Open-Source-Software/' },
			{ text: '数据库', link: '/kaiyuan/Open-databases/' },
			{ text: '安卓相关', link: '/kaiyuan/android/' },
          ]
        },
	  { text: '服务器安全', link: '/safe/' },
	  { text: '常用软件', link: '/software/' },
	  { text: '互联网福利', link: '/internet/' },
	  { text: '调试Debug', link: '/debug/' }
    ],
	sidebar: [
	  ['/', '首页'],
	  ['/linux-basis/', '基础知识'],
	  ['/git/', 'Git服务'],
	  ['/safe/', '网络安全'],
	  ['/mysql/', '数据库'],
      ['/kaiyuan/Open-Source-Software/', '开源软件'],
	  ['/nginx/', 'Nginx'],
	  ['/shell/', 'Shell'],
    ],
	//sidebar: 'auto', // 侧边栏配置
    //sidebarDepth: 3,
	
	//代码主题
	 /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'okaidia', // default 'tomorrow'
	socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/funet8' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ],
	//留言配置
	valineConfig: {
      appId: 'iVB5aJ4Y7ApUfjsjusQ3h9k7-gzGzoHsz',// your appId
      appKey: '4TR3eWVYMnc8McyctYhqwXuo', // your appKey
    }
  }
}

