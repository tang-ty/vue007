<template>
    <div class="goods-list">
        <!-- 在网页中，有两种跳转方式： -->
        <!-- 方式一: 使用 a 标签的形式叫做标签跳转 -->
        <!-- 方式二：使用window.location.href 的形式，叫做编程式导航 -->
       <router-link class="goods-item" to="/home/goodsinfo" tag="div">
           <img src="https://img13.360buyimg.com/n7/jfs/t1/94450/22/26/277538/5da5a578Ed25355e5/ac735afe41f470e2.jpg" alt="">
           <h1 class="title">荣耀MagicBook 2019 第三方Linux版 14英</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥3999.00</span>
                   <span class="old">￥4399.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩160件</span>
               </p>
           </div>
       </router-link>
       <div class="goods-item">
           <img src="https://img10.360buyimg.com/n7/jfs/t1/63295/39/3474/195375/5d1ac2abEb354c329/f102adb9e5e3ffe3.jpg" alt="">
           <h1 class="title">联想(Lenovo)拯救者Y7000 2019英特尔酷</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥5699.00</span>
                   <span class="old">￥5699.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩620件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img11.360buyimg.com/n7/jfs/t1/74274/16/2371/233375/5d099429E25d545c3/162fbb8724aa6590.jpg" alt="">
           <h1 class="title">惠普（HP）战66 二代 14英寸轻薄笔记本</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥5199.00</span>
                   <span class="old">￥5299.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩110件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img11.360buyimg.com/n7/jfs/t1/60164/31/13723/154708/5db1c5a4E58ac7c69/9bc5a916790dd9d9.jpg" alt="">
           <h1 class="title">华为MateBook X Pro</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥9699.00</span>
                   <span class="old">￥9699.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩1210件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img11.360buyimg.com/n7/jfs/t28813/348/1626694903/339283/acb621b/5ce62dc9Ncd46d877.jpg" alt="">
           <h1 class="title">华硕飞行堡垒7</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥6499.00</span>
                   <span class="old">￥6599.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩1130件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img12.360buyimg.com/n7/jfs/t1/59077/19/12831/317031/5d9dd19cE2306aeef/dbb464c6fa2b50ca.jpg" alt="">
           <h1 class="title">联想拯救者</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥8699.00</span>
                   <span class="old">￥8899.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩2110件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img13.360buyimg.com/n7/jfs/t1/78112/18/14128/425868/5db842baE84bd11bf/4d36dbe55645aada.jpg" alt="">
           <h1 class="title">小米Ruby</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥4299.00</span>
                   <span class="old">￥4499.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩1110件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img12.360buyimg.com/n7/jfs/t1/46062/18/7693/150705/5d55321eE03dd4990/0dc7b362e811dda3.jpg" alt="">
           <h1 class="title">联想威6系列</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥4799.00</span>
                   <span class="old">￥4899.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩2143件</span>
               </p>
           </div>
       </div>
       <div class="goods-item">
           <img src="https://img11.360buyimg.com/n7/jfs/t1/53784/18/13821/204162/5da8282cEa4e382ee/03e54d36d4ded2eb.jpg" alt="">
           <h1 class="title">戴尔灵越 fit</h1>
           <div class="info">
               <p class="price">
                   <span class="new">￥5199.00</span>
                   <span class="old">￥5399.00</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩110件</span>
               </p>
           </div>
       </div>
       <!-- <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button> -->
       <mt-button type="danger" size="large" class="goodsBtn">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        // data 是往自己组件内部，挂载一些私有数据的
        return{
            pageindex:1, //分页的页数
            goodslist:[] // 存放商品列表的数组
        };
    },
    created() {
        // this.getGoodsList();
    },
    methods:{
        // getGoodsList(){
        //     // 获取商品列表
        //     this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result => {
        //         if(result.body.status === 0){
        //             // this.goodslist = result.body.message;
        //             this.goodslist = this.goodslist.concat(result.body.message)
        //         }
        //     });
        // },
        // getMore(){
        //     this.pageindex ++;
        //     this.getGoodsList();
        // },
        // goDetail(id) {
        //     // 使用js的形式进行路由导航

        //     // 注意：一定要区分 this.$route 和 this.$router 这两个对象，
        //     // 其中：this.$route是路由【参数对象】，所有路由中的参数，params,query都属于它
        //     // 其中：this.$router 是一个路由【导航对象】，用它可以方便的使用 js 代码，实现路由的前进、后退、跳转到新的 URL 地址
        //     console.log(this);
        //     // 1. 最简单的
        //     this.$router.push("/home/goodsinfo/" + id);
        //     // 2. 传递对象
        //     this.$router.push({path:"/home/goodsinfo/" + id});
        //     // 3. 传递命名的路由
        //     this.$router.push({name:"GoodsInfo",params:{id}});
        // }
    }
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
            line-height: 16px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .new{
                    color:red;
                    font-weight: blod;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
    .goodsBtn{
        margin-top: 15px; 
    }
}
</style>