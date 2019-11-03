<template>
    <div>
       <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <!-- <div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ?  'mui-active' : '']" v-for="item in cates" :key="item.id" @click = "getPhotoListByCateId(item.id)">
							{{ item.title }}
						</a>
                    </div>     -->
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							成都
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
					</div>
				</div>
			</div>
            <!-- 图片列表区域 -->
           <ul class="photo-list">
             <!-- <router-link v-for="item in list" :key = "item.id" :to="'/home/photoinfo' + item.id" tag="li"></router-link> -->
             <router-link v-for="item in list" :key = "item.id" to="/home/photoinfo" tag="li">
                <img v-lazy="item.img">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.describe }}</div>
                </div>
             </router-link>
           </ul>
    </div>
</template>
<script>
// 1. 导入 mui 的js文件
import mui from '../../lib/mui/js/mui.js'
export default {
    data() {
        return {
            // cates:[], // 所有分类的列表数组
            list:[
                {id:1,img:'https://img14.360buyimg.com/n1/s450x450_jfs/t1/20503/22/7189/262553/5c677d9eE589967cd/92ad3733087d670c.jpg',title:' ThinkPad',describe:'联想ThinkPad 翼480（0UCD）英特尔酷睿i5 14英寸轻薄笔记本电脑（i5-8250U 8G 256GSSD 2G独显）冰原银'},
                {id:2,img:'https://img14.360buyimg.com/n0/jfs/t1/59505/10/10964/77392/5d84723aE737176a1/e3b98a463d9cca57.jpg',title:'戴尔（DELL）',describe:'戴尔（DELL）灵越燃5000 5493-1505/1305轻薄本14英寸办公学生手提笔记本电脑 i5-1035G1 8GB 256G固态+1T定制 【十代新品】皓月银 高性能核显 高清屏'},
                {id:3,img:'https://img14.360buyimg.com/n0/jfs/t1/61835/2/14003/112046/5db24e6dEaf0f4c71/3af12677b95d4775.jpg',title:' AVITA',describe:'AVITA轻薄笔本电脑13.3英寸女生超薄本多彩手提电脑上网本学生办公家用娱乐固态便携本 i5-8250u/8G/256G固态/都市红'},
                {id:4,img:'https://img14.360buyimg.com/n0/jfs/t1/56324/20/14147/398612/5dafc47aE81240613/aaa3d5c93e68afa9.jpg',title:' 小米（MI）',describe:'小米笔记本游戏本15.6英寸手提轻薄笔记本电脑高清窄边框独显高清吃鸡LOL王者荣耀2019新款学生男 2019款i7-9750H 16/512 6G独显'},
                {id:5,img:'https://upload-images.jianshu.io/upload_images/13914403-b1633a1adec59aa6.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp',title:'笔记本电脑入门知识',describe:'很多大学生都在用笔记本电脑，但对于笔记本电脑的一些基本常识却是一点都没有，其实这也很正常，大多数人都把它当做工具，只有专业人士或者爱好者才会去研究它。'},
                {id:6,img:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=558763261,3040547494&fm=173&app=25&f=JPEG?w=541&h=485&s=798C3472CD82624718F990C30000E0B1',title:'买笔记本电脑前必备基础知识',describe:'关于笔记本电脑的类型选购（重点）--- 笔记本电脑一般大致分为三种'},
                {id:7,img:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3125065619,2520959918&fm=173&app=49&f=JPEG?w=640&h=853&s=662020E4DE8C075F0D98719A03007090',title:'很多人不知道的购买电脑配件的知识，值得学习',describe:'我们日常生活中工作和娱乐需要而现在有很多人越来越喜欢DIY电脑，但又不知道该怎么买配件，不过没事，我们今天就来教大家如何购买和需要注意的事项'},
                {id:8,img:'http://img4.imgtn.bdimg.com/it/u=1866392744,1473595010&fm=15&gp=0.jpg',title:'怎样整理和保养笔记本电脑？',describe:'电脑是工作和娱乐的工具，正确的保养和整理方法可以提高效率，同时也能提高电脑的寿命，那么该怎样整理和保养呢？'},
                {id:9,img:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1069412849,1849582202&fm=173&s=A173CF341B114DCC2640A1CF0300F0B1&w=640&h=905&img.JPEG',title:'吴亦凡鹿晗王俊凯 这些代言笔记本电脑和手机的明星们！',describe:'记本电脑和手机都是大众必须拥有的消费品，特别是年轻消费群体是最大客户群，所以这些实力雄厚的厂家都会找小鲜肉明星来做代言，这些明星的粉丝群体大多数都是年轻人。'},

            ]
        }  
    },
    created() {
        // this.getAllCategory();
        // 默认进入页面，就主动请求 所有图片列表的数据
        //  this.getPhotoListByCateId(0);
    },
    mounted() { 
        // 当组件中 DOM 结构被渲染好并放到页面中后，会执行这个 钩子函数
        // 如果要操作元素了，最好在 mounted 里面，因为，这里的 DOM 元素 是最新的
       // 2. 初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        }); 
    },
     methods: {
        //  getAllCategory(){
        //     //  获取所有的图片分类
        //     this.$http.get("api/getimgcategory").then(result => {
        //         if(result.body.status === 0){
        //             // 手动拼接出一个最完整的分类
        //             result.body.message.unshift({title:"全部",id:0});
        //             this.cates = result.body.message;
        //         }
        //     });
        //  },
            // getPhotoListByCateId(cateId){
            //     // 根据 分类id，获取图片列表
            //      this.$http.get("api/getimgcategory").then(result => {
            //         if(result.body.status === 0){
            //             this.list = result.body.message;
            //         }
            //      });
            // }
     }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        img{
            width: 100%;
            vertical-align: middle;
        }
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,0.4);
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
                max-height: 80px;
            }
        }
    }
}

</style>