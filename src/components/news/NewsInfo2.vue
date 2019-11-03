<template>
    <div class="newsinfo-container">
       <h3 class="title">荣耀MagicBook Pro已在华为Vmall商城开启预约</h3>
       <p class='subtitle'>
            <span>发表时间：2019-09-06 01:42:12</span>
            <span>点击： 909次</span>
        </p>
       <hr>
       <div class="content">
           <p>Intel即将推出第九代酷睿处理器的高性能笔记本型号，也就是H系列标压版。根据目前已知的情报，Intel这一次会继续大幅跃升，最高来到8核心16线程。</p>
           <p>现在，美国亚马逊列出了微星的两款新游戏本，都配备九代酷睿的顶级型号。</p>
           <img src="http://www.ityears.com/d/file/2019/0424/1556069855703.png" alt="">
           <p> 其中，4400美元的“GT75 9SG Titan”配备旗舰型号i9-9980HK，8核心16线程，基准频率2.4GHz，睿频加速最高5.0GHz，不知道热设计功耗是否能继续维持在45W。</p>
           <p>相比之下，八代家族的旗舰型号i9-8950HK为6核心12线程，频率范围2.9-4.8GHz，热设计功耗45W，但一般游戏本很少能压制住它。</p>
           <p>2900美元的“GT75 9SF Titan”则配备酷睿i7-9750H，8核心8线程(也有的说6核心12线程)，基准频率2.6GHz，睿频加速最高4.6GHz。</p>
           <p>必然的，它们还是14nm工艺产物，能压榨到如此程度Intel也真是不容易。</p>
           <img src="http://www.ityears.com/d/file/2019/0424/1556069855827.jpg" alt="">
　　       <p> 其他配置方面，i9-9980HK搭配的是RTX 2080显卡、64GB DDR4-2666内存、512GB PCIe SSD、1TB SSD、17.3寸4K屏。</p>
          <p>其他配置方面，i9-9980HK搭配的是RTX 2080显卡、64GB DDR4-2666内存、512GB PCIe SSD、1TB SSD、17.3寸4K屏。</p>
          <img src="http://www.ityears.com/d/file/2019/0424/1556069856553.png" alt="">
       </div> 
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