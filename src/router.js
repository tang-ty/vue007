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
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
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
        // {path: '/home/newsinfo/:id', component:NewsInfo},
        {path: '/home/newsinfo1', component:NewsInfo1},
        {path: '/home/newsinfo2', component:NewsInfo2},
        {path: '/home/newsinfo3', component:NewsInfo3},
        {path:'/home/photolist', component:PhotoList},
        {path:'/home/photoinfo', component:PhotoInfo},
        // {path:'/home/photoinfo/:id', component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodsinfo',component:GoodsInfo},
        // {path:'/home/goodsinfo/:id',component:GoodsList}
        // {path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'}
        {path:'/home/goodsdesc',component:GoodsDesc,name:'goodsdesc'},
        // {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'}
        {path:'/home/goodscomment',component:GoodsComment,name:'goodscomment'}
        // {path:'/home/goodscomment/:id',component:Goodsomment,name:'goodscomment'}

    ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类叫做 router-link-active

})
// 把路由暴露出去
export default router