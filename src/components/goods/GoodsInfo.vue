<template>
    <div class="goodsinfo-container">
       <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
       </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper></swiper>
						<!-- <swiper ::lunbotuList="lunbotu"></swiper> -->
					</div>
				</div>
			</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{ goodslist.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{ goodslist.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodslist.sell_price }}</span>
                        </p>
                        <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodslist.stock_quantity"></numbox></p>
                        <!--//当数据是异步获取时 <p>购买数量:<numbox @getcount="getSelectedCount" :max = "goodsinfo.stock_quantity"></numbox></p> -->
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                            <!-- 分析： 如何实现加入购物车时候，拿到选择的数量 -->
                            <!-- 1. 经过分析发现：按钮属于 goodsinfo 页面，数字属于 numberbox 组件 -->
                            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面中 获取到选中的商品数量值 -->
                            <!-- 3. 怎么解决这个问题：涉及到了子组件向父组件传值了（事件调用机制） -->
                            <!-- 4. 事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当作参数 传递给这个方法 -->
                        </p>
					</div>
				</div>
			</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodslist.goodsno }}</p>
                        <p>库存情况：{{ goodslist.stock_quantity }}件</p>
                        <p>上架时间：{{ goodslist.add_time }}</p>

					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
                    <!-- <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button> -->
                    <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
                    <!-- <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button> -->
                </div>
			</div>
    </div>
</template>
<script>
// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'
// 导入 数字选择框 组件
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return {
            // id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data ，方便后期调用
            // lunbotu:[], //轮播图的数据
            // goodsinfo:{} //获取到的商品的信息
            goodslist:{
                 add_time:'2019-09-30 00:00:00',
                 goodsno:'5D23992214404',
                 market_price:5699.00,
                 sell_price:5499.00,
                 stock_quantity:79,
                 title:'荣耀MagicBook 2019 第三方Linux版 14英'
            },
            ballFlag:false, //控制小球的隐藏和显示的标识符
            selectedCount:1 // 保存用户选中的商品数量，默认为1
            
        };
    },
    methods: {
        // getLunbotu() {
        //     this.$http.get("api/getthumiages"+ this.id).then(result => {
        //         if(result.body.status === 0){
        //             this.lunbotu = result.body.message;
        //         }
        //     });
        // },
        // getGoodsInfo(){
        //     // 获取商品的信息
        //     this.$http.get('api/goods/getinfo/' + this.id).then(result => {
        //         if(result.body.status === 0){
        //             this.goodsinfo = result.body.message[0];
        //         }
        //     })
        // },
        goDesc(){
            // 点击使用编程式导航跳转到图文介绍页面
            this.$router.push("/home/goodsdesc");
            // this.$router.push({name:"/home/goodsdesc",params:{id}});
        },
        goComment(){
            // 点击跳转到 评论页面
              this.$router.push("/home/goodscomment");
            // this.$router.push({name:"/home/goodscomment",params:{id}});
        },
        addToShopCar(){
            // 添加到购物车
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            // 小球动画优化思路：
            // 1. 先分析 导致动画不准确的本质原因： 我们把小球最终位移到的位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
            // 2. 只要分辨率和测试的时候不一样，或者 滚动条有一定的滚动距离之后，问题就出现了；
            // 3. 因此，我们经过分析，得到结论：不能把位置的横纵坐标直接写死了，而是应该根据不同情况，动态计算这个坐标值；
            // 4. 经过分析，得出解题思路：先得到徽标的横纵坐标，再得到 小球的 横纵坐标，然后让y值求差，x值也求差，得到的结果，就是横纵坐标要位移的距离；
            // 5. 如何 获取 徽标和小球的位置？？？ domOdject,getBoundingClientRect()

            // 获取小球的在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取 徽标 在页面中的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate( ${xDist}px, ${yDist}px )`;
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
            this.selectedCount = count;
            // 测试
            // console.log("父组件拿到的数量值为：" + this.selectedCount);
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
.now_price{
    color:red;
    font-size: 16px;
    font-weight: bold;
}
.mui-card-footer{
    display:block;
    button{
        margin:15px 0;
    }
}
.ball{
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99; 
    top:420px;
    left: 135px;
}
</style>