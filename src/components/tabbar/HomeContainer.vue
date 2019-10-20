<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>
                <img src="http://img4.imgtn.bdimg.com/it/u=1239342993,1766155915&fm=11&gp=0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://img3.imgtn.bdimg.com/it/u=4263349545,985435528&fm=26&gp=0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://img4.imgtn.bdimg.com/it/u=1886160216,3205352834&fm=26&gp=0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://img2.imgtn.bdimg.com/it/u=544206800,1861269762&fm=26&gp=0.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://img5.imgtn.bdimg.com/it/u=2709011329,1001196856&fm=11&gp=0.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 到 六宫格 的改造工程 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		        <img src="../../images/menu1.png" alt="">
		         <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		          <img src="../../images/menu2.png" alt="">
		          <div class="mui-media-body">图片分享</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		          <img src="../../images/menu3.png" alt="">
		          <div class="mui-media-body">商品购买</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		          <img src="../../images/menu4.png" alt="">
		          <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="../../images/menu5.png" alt="">
		           <div class="mui-media-body">视频专区</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		           <img src="../../images/menu6.png" alt="">
		           <div class="mui-media-body">联系我们</div>
                </a>
            </li>    
		 </ul> 
        <!-- <h1>HomeContainer.vue</h1> -->
    </div>
</template>
<script>
// import { Toast } from 'mint-ui'
//     export default{
//         data(){
//             return {
//                 lunbotuList:[] // 保存轮播图的数组
//             };
//         },
//         created(){
//             this.getLunbotu();
//         },
//         methods:{
//             getLunbotu(){
//                 // 获取轮播图数据的方法
//                 this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
//                     // console.log(result.body);
//                     if(result.body.status === 0){
//                         // 成功了
//                         this.lunbotuList = result.body.message;
//                     }else{
//                         // 失败了
//                         Toast("加载轮播图失败。。。");
//                     }
//                 })
//             }
//         }
//     }
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }
   .mui-grid-view.mui-grid-9{
       background-color: #fff;
       border: none;
       img{
           width: 60px;
           height: 60px;
       }
       .mui-media-body{
           font-size: 13px;
       }
   }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
</style>