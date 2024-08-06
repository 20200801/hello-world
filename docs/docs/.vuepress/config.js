import { defineUserConfig } from 'vuepress'
dirUrl
const dirUrl="/docs"
import { hopeTheme } from "vuepress-theme-hope";
export default {
    title: '卓思智能控制平台',
    base:   dirUrl,
    dest: `docs/.vuepress/dist`+(process.env.NODE_ENV === 'production' ? dirUrl : ''),
    //favicon
    //站点语言设置
    theme: hopeTheme({
        head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
        print: false,
    
        locales: {
            '/': {
                selectLanguageName: '简体中文',
                title: '智能控制系统',
                description: '全面集成、智能化、高效控制的先进技术平台',
            },

        },
        "metaLocales": {
            "toc": "此页内容",
            "prev": "上一页",
            "next": "下一页",
            "print": "打印"
        },

        breadcrumb: false,
        pageInfo: false,
        lastUpdated: false,
        darkmode: 'toggle',
        // layout: true,// 开启幻灯片风格
        backToTop: true,
        navbarIcon: false,
        navbarLayout: { start: ["Brand"], end: ["Links", "Language", "Repo", "Outlook", "Search"] },
        navbar:
            [
                //单层
                {
                    text: '主页',
                    link: '/',
                    // 该元素将一直处于激活状态
                    activeMatch: '/',
                },
                {
                    text: '平台介绍',
                    link: "/guide/weAre",
                }
                ,
                {
                    text: '使用文档',
                    children: [{
                        text: "智能控制", link:"/smart/devices",
                    }, { text: "企业管理", link: "/tenant/tenant" }],

                },
                // {
                //     text: '官网',
                //     link: 'https://choicewell.com.cn/',
                // },
                // {
                //     text: '演示',
                //     link: 'http://iot.choicewell.com.cn/'
                // }
            ],
        sidebar: {
            '/guide/': [
                {
                    text: '平台介绍',
                    collapsable: false,
                    link: "/guide/weAre",

                    children: [
                        { text: "我们是", link: "/guide/weAre" },
                        { text: "我们有", link: "/guide/weHave" },
                    ],
                    activeMatch: "^/guide/$"
                }],
                '/tenant/': [
                    {
                        text: '企业设置',
                        collapsable: false,
                        link: "/tenant/tenant",
    
                        children: [
                            { text: "部门管理", link: "/tenant/userGroup" },
                            { text: "用户管理", link: "/tenant/user" },
                            { text: "角色管理", link: "/tenant/role" },
                            { text: "品牌配置", link: "/tenant/config" },
                            { text: "空间配置", link: "/tenant/spaceConfig" },
                            { text: "个人中心", link: "/tenant/person" },

                        ],
                        activeMatch: "^/tenant/$"
                    }],
            '/smart/': [
                {
                    text: '设备管理',
                    collapsable: false,
                    link: "/smart/devices",
                    children: [
                        { text: "网关", link: "/smart/device/gateway" },
                        { text: "子设备", link: "/smart/device/device" },
                        { text: "设备组", link: "/smart/device/deviceGroup" }
                    ],
                    activeMatch: "^/device/$"

                },
                {
                    text: '控制管理',
                    collapsable: false,
                    link: "/smart/control",
                    children: [
                        { text: "功能组", link: "/smart/control/functionGroup" },
                        {
                            text: "自动化", link: "/smart/control/automation"

                        },
                        { text: "场景", link: "/smart/control/scene" }
                    ],
                    activeMatch: "^/control/$"

                },
                {
                    text: '面板管理',
                    collapsable: false,
                    link: "/smart/panel",
                    children: [
                        { text: "面板配置", link: "/smart/panel/config" },
                        { text: "面板列表", link: "/smart/panel/page" }

                    ],
                    activeMatch: "^/control/$"

                },
                {
                    text: '空间管理',
                    collapsable: false,
                    link: "/smart/space",
                    children: [
                        { text: "空间管理", link: "/smart/space/space" }

                    ],
                    activeMatch: "^/control/$"

                }
                ,
                {
                    text: '标签管理',
                    collapsable: false,
                    link: "/smart/label"

                }
                ,
                {
                    text: '仪表盘',
                    collapsable: false,
                    link: "/smart/dashboard"

                },
                {
                    text: '数据统计',
                    collapsable: false,
                    link: "/smart/statistics"
                }
            ],
        }
    })
}