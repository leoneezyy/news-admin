import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

// 注册路由插件
Vue.use(Router)

// 创建路由对象
export default new Router({
    // 可忽略，默认声明， 主要是带#号和不带#号的区别，没有好坏之分
    mode: 'history',

    // 可忽略
    base: process.env.BASE_URL,

    // 路由的配置
    routes: [
        { path: '/login', component: Login },
    ]
})