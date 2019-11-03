<template>
    <div class="goodsdesc-container">
        <h3>{{ goodslist.title }}</h3>
        <hr>
        <div class="content" v-html="goodslist.content"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // info:{} // 图文数据
            goodslist:{
                title:'荣耀MagicBook 2019 第三方Linux版 14英',
                content:'<p>本产品全国联保，享受三包服务，质保期为：主机2年如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！(注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。)</p><img src= "https://img14.360buyimg.com/n0/jfs/t1/54757/34/11430/51129/5d847105E046ad638/f8a64f9ddf3e59bc.jpg" alt=""><p>京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p><img src= "https://img14.360buyimg.com/n0/jfs/t1/61041/40/10824/30701/5d847106E5527536b/eed0e0997d13338b.jpg" alt=""><p>凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！</p><p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p><img src= "https://img14.360buyimg.com/n0/jfs/t1/47003/1/11332/113756/5d847105E76dbf102/01b59b9ceff03e16.jpg" alt=""><p>客户购买京东自营商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）</p><img src= "https://img14.360buyimg.com/n0/jfs/t1/59012/26/11293/65474/5d847106Efcbef98a/93bce8b641066840.jpg" alt=""><p>京东上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东重要的经营资源，未经许可，禁止非法转载使用。注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p><img src= "https://img14.360buyimg.com/n0/jfs/t1/51250/5/11281/77392/5d847106Eca52b7af/c85381d642513571.jpg" alt="">',
            }
           
        };
    },
    created() {
        // this.getGoodsDesc();
    },
    methods: {
        // getGoodsDesc(){
        //     this.$http.get("api/goods/getdesc" + this.$route.params.id).then(result => {
        //         if(result.body.status === 0 ){
        //              this.info = result.body.message[0];
        //         }
        //     })
        // }
    },
}
</script>
<style lang="scss">
.goodsdesc-container{
    h3{
        font-size:16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        padding: 4px;
        img{
            width:100%;
        }
    }
}
</style>