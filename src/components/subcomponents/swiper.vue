<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用 v-for 循环的话，一定要使用 key-->
            <!-- 将来，谁使用此轮播图组件，谁为我们传递 lunbotulist -->
            <!-- 此时，lunbotulist 应该是 父组件向子组件传值来设置 -->
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>
                <img src="https://img10.360buyimg.com/n7/jfs/t1/50602/38/11334/178809/5d84543bEa0754884/9b485dc7e5be6861.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img11.360buyimg.com/n7/jfs/t30694/301/1591311118/339939/7d80788b/5ce62d9fNcab3d86b.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img10.360buyimg.com/n7/jfs/t30793/103/1346966530/224527/7fb88c1f/5cdd05f8N43aa3831.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img11.360buyimg.com/n7/jfs/t28813/348/1626694903/339283/acb621b/5ce62dc9Ncd46d877.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="https://img14.360buyimg.com/n7/jfs/t1/79896/8/14260/164362/5dba5d38Ed081aa0f/f3cb42c80a85f125.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    // props:["lunbotuList","isfull"]
}
</script>
<style lang="scss" scoped>
 .mint-swipe{
        text-align: center;
        height: 230px;
    }
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>