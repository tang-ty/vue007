<template>
    <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="#">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dataFormat(YYYY-MM-DD) }}</span>
                                <span>点击： {{ item.click }}次</span>
                            </p>
						</div>
					</a>
				</li> -->
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for=" item in List " :key=" item.id ">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src=" item.img ">
						<div class="mui-media-body">
							{{ item.title }}
							<p class='mui-ellipsis'>{{ item.content }}</p>
						</div>
					</a>
				</li>
			</ul>
            <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default{
    data() {
        return {
             List:[
                 {id:1, img:'http://img5.imgtn.bdimg.com/it/u=3375420028,3970488305&fm=26&gp=0.jpg', title:'迷@我漫', content:'哎，又想换新的了'},
                
                 ],
             moreList:[
                  {id:1, img:'http://img5.imgtn.bdimg.com/it/u=3375420028,3970488305&fm=26&gp=0.jpg', title:'迷@我漫', content:'哎，又想换新的了'},
                  {id:2, img:'http://img1.imgtn.bdimg.com/it/u=3161173044,2244678317&fm=26&gp=0.jpg', title:'心&新', content:'表示，看得起，买不起。'},
                  {id:3, img:'http://img3.imgtn.bdimg.com/it/u=575482484,3110667457&fm=26&gp=0.jpg', title:'你愁啥', content:'不管咋样，期待。。。'},
                  {id:4, img:'http://img0.imgtn.bdimg.com/it/u=3854164330,3005590920&fm=26&gp=0.jpg', title:'我是一个平凡人', content:'这个，到时候，可以去体验店体验一下吧'},
                  {id:5, img:'http://img5.imgtn.bdimg.com/it/u=1715333485,2556360718&fm=26&gp=0.jpg', title:'天知道', content:'当然，我也有这个想法，不管咋样，先看看再说'},
                  {id:6, img:"http://img5.imgtn.bdimg.com/it/u=4248235115,2201748940&fm=26&gp=0.jpg", title:"@匿名人士", content:"好高科技呀！坐等ing"},
                  {id:7, img:"http://img5.imgtn.bdimg.com/it/u=324013775,2946570240&fm=26&gp=0.jpg", title:"11@99", content:"表示，哥穷，“买不起~~”"},
                  {id:8, img:"http://img2.imgtn.bdimg.com/it/u=2604881976,4272289404&fm=26&gp=0.jpg", title:"我是你大爷", content:"还没有出来吗？真想体验一下，是啥感觉的"},
                  {id:9, img:"http://img5.imgtn.bdimg.com/it/u=2884107401,3797902000&fm=26&gp=0.jpg", title:"哈哈", content:"估计快了，我也想体验一下"},
                  {id:10, img:"http://img3.imgtn.bdimg.com/it/u=3864086826,2415830551&fm=26&gp=0.jpg", title:"我家的二哈", content:"我等~~~"}
                 ]
        }
    },
    methods: {
        getMore(){ 
                this.List =this.moreList;
            //  this.$http.get("../../../static/pinglun.json").then(result => {
            //      console.log(result.body)
            //     var result = result.body
            //     if(result.status === 0){
            //          this.List = this.List.concat(result.pinglun)
            //     }else{
            //          Toast("获取评论失败！");
            //     }
            // });
            
    }
}
// import { Toast } from 'mint-ui'
// export default {
//     data() {
//         return {
//             pageIndex:1
//         };
//     },
//     created() {
//         this.getComments();
//     },
//     methods: {
//         getComments(){
//             this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
//                 if(result.body.status === 0){    
//                   //this.comments = result.body.message;
//                   //每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据 
//                   this.comments = this.comments.concat(result.body.message)

//                 } else {
//                     Toast("获取评论失败！");
//                 }
//             });
//         },
//             getMore(){
//                 // 加载更多
//                 this.pageIndex ++;
//                 this.getComments();
//             }
//     },
//     props: ["id"]
// }
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
    }
</style>