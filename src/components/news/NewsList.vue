<template>
    <div>
       <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="/home/newsinfo/ + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dataFormat(YYYY-MM-DD) }}</span>
                                <span>点击： {{ item.click }}次</span>
                            </p>
						</div>
					</router-link>
				</li> -->
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://img11.360buyimg.com/n7/jfs/t1/81912/26/12479/112272/5d9f5706E70cc2b76/7e9383d9db6930ea.jpg">
						<div class="mui-media-body">
							<h1>【爆款11CD预售】11月1日可领300优惠券???</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-10-12 15:32:45</span>
                                <span>点击： 2220次</span>
                            </p>
						</div>
					</router-link>
				</li>
					<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo1">
						<img class="mui-media-object mui-pull-left" src="https://img14.360buyimg.com/n7/jfs/t1/76479/5/10865/71531/5d831e66E2e2ebc53/d65c20d4a7fdff94.jpg">
						<div class="mui-media-body">
							<h1>超轻薄金属机身，12nm制程CPU哟！</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-10-13 12:00:00</span>
                                <span>点击： 1320次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo2">
						<img class="mui-media-object mui-pull-left" src="https://img10.360buyimg.com/n7/jfs/t1/50602/38/11334/178809/5d84543bEa0754884/9b485dc7e5be6861.jpg">
						<div class="mui-media-body">
							<h1>外星人智控中心,G模式一键散热...</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-09-06 01:42:12</span>
                                <span>点击： 909次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo3">
						<img class="mui-media-object mui-pull-left" src="https://img11.360buyimg.com/n7/jfs/t1/42514/11/1912/262553/5cc7e219Ee6a3fb7b/f7b38dfa82781d9b.jpg">
						<div class="mui-media-body">
							<h1>爆款新品，升级物理四核CPU</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-07-12 10:44:45</span>
                                <span>点击： 243次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://img13.360buyimg.com/n7/jfs/t1/94450/22/26/277538/5da5a578Ed25355e5/ac735afe41f470e2.jpg">
						<div class="mui-media-body">
							<h1> 联想ThinkPad 翼480（4VCD）英特尔酷睿i5</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-06-06 16:06:45</span>
                                <span>点击： 7659次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo1">
						<img class="mui-media-object mui-pull-left" src="https://img14.360buyimg.com/n7/jfs/t1/20503/22/7189/262553/5c677d9eE589967cd/92ad3733087d670c.jpg">
						<div class="mui-media-body">
							<h1>【新品晒单就送荣耀耳机】,赠送新机咨询服务！</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-05-12 13:22:34</span>
                                <span>点击： 5674次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo2">
						<img class="mui-media-object mui-pull-left" src="https://img13.360buyimg.com/n7/jfs/t1/74230/2/2256/259322/5d091dd1Ec77a19b8/b51079da9fdc4a50.jpg">
						<div class="mui-media-body">
							<h1>14英寸轻薄笔记本电脑 冰原银</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-02-23 17:24:45</span>
                                <span>点击： 23465次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo3">
						<img class="mui-media-object mui-pull-left" src="https://img14.360buyimg.com/n7/jfs/t1/55775/24/4404/258672/5d22ac54Eb9c813d3/3647150d10a60a97.jpg">
						<div class="mui-media-body">
							<h1>【重磅产品】【国民轻薄本普及风暴】</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-01-08 20:22:12</span>
                                <span>点击： 7542次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://img12.360buyimg.com/n7/jfs/t1/61564/7/10785/243704/5d844b3fE66cc2175/aa1469d8e8ab0298.jpg">
						<div class="mui-media-body">
							<h1>【爆款推荐】八代i5，银色金属机身</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018-09-09 09:09:09</span>
                                <span>点击： 96543次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo1">
						<img class="mui-media-object mui-pull-left" src="https://img14.360buyimg.com/n7/jfs/t1/72213/11/6742/204515/5d4d0ddcE0ac07468/23b8e25408585b07.jpg">
						<div class="mui-media-body">
							<h1>【预售开启,预定享惊爆价】双硬盘</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018-04-01 00:00:00</span>
                                <span>点击： 34897次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo2">
						<img class="mui-media-object mui-pull-left" src="https://img10.360buyimg.com/n7/jfs/t1/66627/34/13035/303790/5da825c6E4e6a1651/d1d6cd5c7c33695a.jpg">
						<div class="mui-media-body">
							<h1>拯救者新品上市，1T固态</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018-03-16 08:00:00</span>
                                <span>点击： 7543次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo3">
						<img class="mui-media-object mui-pull-left" src="https://img10.360buyimg.com/n7/jfs/t10696/105/2929909656/163006/4bdb2993/5cdbb57aNa503e4a9.jpg">
						<div class="mui-media-body">
							<h1>【灵越10nm10代CPU新品】大容量空间站</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018-03-15 12:30:00</span>
                                <span>点击： 586次</span>
                            </p>
						</div>
					</router-link>
				</li>
                <li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="https://img10.360buyimg.com/n7/jfs/t1/96619/20/62/145366/5da698f0E855891b0/6982769042d8f508.jpg">
						<div class="mui-media-body">
							<h1>【10月18日限时抢,领满2000减200元优惠券】</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2018-1-12 09:31:34</span>
                                <span>点击： 1502次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>

    </div>
</template>
<script>
// import { Toast } from 'mint-ui';
// export default {
//     data(){
//         return(){
//             newslist:[] //新闻列表
//         };
//     },
//     created() {
//         this.getNewsList();
//     },
//     meyhods:{
//         getNewsList(){
//             // 获取新闻列表
//             this.$http.get("api/getnewslist").then(result => {
//                 if(result.body.status === 0){
//                     // 如果没有失败，应该把数据保存到 data 上
//                     this.newslist = result.body.message;
//                 }else{
//                     Toast("获取新闻列表失败！");
//                 }
//             })
//         }
//     }
// }

</script>
<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
           font-size: 12px;
           color: #226aff;
           display: flex;
           justify-content: space-between;
        }
    }
}
</style>