// 1. 导入 vue-router 包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import NewsInfo1 from './components/news/NewsInfo1.vue'
import NewsInfo2 from './components/news/NewsInfo2.vue'
import NewsInfo3 from './components/news/NewsInfo3.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes:[ //配置路由规则的
        {path:'/',redirect:'/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/newslist', component:NewsList},
        {path: '/home/newsinfo', component:NewsInfo},
        {path: '/home/newsinfo1', component:NewsInfo1},
        {path: '/home/newsinfo2', component:NewsInfo2},
        {path: '/home/newsinfo3', component:NewsInfo3}
    ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类叫做 router-link-active

})
// 把路由暴露出去
export default router