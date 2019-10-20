<template>
<!-- <div class="newsinfo-container">
       <h3 class="title">{{ newsinfo.title }}</h3>
       <p class="subtitle">
           <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
           <span>点击：{{ newsinfo.click }} 次</span>
       </p>
       <hr>
       <div class="content" v-html="newsinfo.content"></div>
    </div> -->
    <div class="newsinfo-container">
        <!-- 大标题 -->
       <h3 class="title">美亚推出超低价翻新Pixel：仅售200美元</h3>
       <!-- 子标题 -->
       <p class="subtitle">
            <span>发表时间：2019-10-12 15:32:45</span>
            <span>点击： 2220次</span>
       </p>
       <hr>
       <!-- 内容区域 -->
       <div class="content">
           <p>根据电子时报的新报告表明，微软已经和英特尔进行了合作，双方将为双屏笔记本以及同类设备开发共同的标准，并且塑造未来。而且微软与英特尔将把这些标准扩展到用可折叠笔记本电脑屏幕(具体来说是折叠屏中间的活动铰链)。</p>
           <img src="http://www.ityears.com/d/file/2019/0906/1567753382857.jpg" alt="">
           <p> 微软及其他笔记本电脑制造商推出了大量专利和概念，展示了这方面的想法。事实上，联想已经有了ThinkPad X1可折叠平板电脑原型机，戴尔的路线图表明，明      年将    推出一款双屏幕XPS电脑，当然，我们也听到了很多关于微软Surface Centaurus双屏幕笔记本电脑的消息。</p>
　　       <p> 电子时报的消息也不一定是可靠的，很有可能是微软想要敲定一些关于行业或设备标准的具体细节，有一定的道理。另外，传闻微软正在与英特尔合作开发                   Surface Centaurus，所以更广泛的合作也是存在可能的。</p>
　        <p>如果这份报告背后确认其事，我们可能很快就会看到这些标准。微软将在10月初推出一个大型的Surface发布会，Surface Centaurus有机会赢来关注和掌声。
       </p>
       </div> 
       <!-- 评论子组件区域 -->
       <!-- <comment-box ：id="this.id"></comment-box> //当有线上数据使用时可用-->
       <comment-box></comment-box>
    </div>
</template>
<script>
// 导入 评论子组件
import comment from '../subcomponents/comment.vue'
export default{
    components:{ // 用来注册子组件的节点
        'comment-box':comment
    }
}
// import { Toast } from 'mint-ui';
// export default {
//     data() {
//         return {
//             id: this.$route.params.id, //将 URL 地址中传递过来的 Id值，挂载到 data 上，方便以后调用
//             newsinfo:{} //新闻对象
//         };
//     },
//     created() {
//         this.getNewsInfo();
//     },
//     methods: {
//         getNewsInfo(){ // 获取新闻详情
//             this.$http.get('api/getnew/' + this.id).then(result => {
//                 if(result.body.status === 0){
//                     this.newsinfo = result.body.message;
//                 }else{
//                     Toast('获取新闻失败！')
//                 }
//             })

//         }
//     },
// }
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            color: red;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            p{
                text-indent: 1.5em;
            }
            img{
                width: 100%;
            }
        }
    }
</style>style