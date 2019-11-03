<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.time }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <!-- <img class="preview-img" v-for="(item,index) in slide1" :src="item.src" height="100" @click="$preview.open(index,slide1)" :key="item.src"> -->
      <vue-preview :slides="slide1"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content">{{ photoinfo.content }}</div>
    <hr />
    <h3>{{ superstart.title }}</h3>
    <p>{{ superstart.content1 }}</p>
    <img :src="superstart.img1" alt />
    <p>{{ superstart.content2 }}</p>
    <img :src="superstart.img2" alt />
    <p>{{ superstart.content3 }}</p>
    <img :src="superstart.img3" alt />
    <p>{{ superstart.content4 }}</p>
    <img :src="superstart.img4" alt />
    <!-- 放置一个现成的 评论子组件 -->
    <!-- <cmt-box :id="id"></cmt-box> -->
    <cmt-box></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      // id:this.$route.params.id
      // photoinfo:{}, // 图片详情
      // list:[]  // 缩略图的数组
      photoinfo: {
        //图片详情
        title: "今夏笔记本电脑的88种选择",
        time: "2019-07-02 00:00:00",
        click: 0,
        content:
          "我们用下面20页的文章来收集并分类了目前最流行，最时尚、最有品味或者最优秀的88款笔记本电脑——它们来自国内市场上的每一个角落，它们也是国内最具人气和卖相的笔记本电脑——我们要做到就是“Collecting all”。和时装一样,全面的清点这才能让你从一个电脑外行变成能自我选购搭配的明白人。"
      },
      superstart: {
        title: "这些代言笔记本电脑和手机的明星们！",
        img1:
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1069412849,1849582202&fm=173&s=A173CF341B114DCC2640A1CF0300F0B1&w=640&h=905&img.JPEG",
        img2:
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=130422139,2581537276&fm=173&s=E9211F704F336E805EFD60C30300A0B4&w=640&h=640&img.JPEG",
        img3:
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1538737303,345580207&fm=173&s=7203D20C5E714694C22AFDD2030050BA&w=640&h=499&img.JPEG",
        img4:
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=572119672,10559472&fm=173&s=6314EB23EEF603BFDA09918F0100A091&w=640&h=496&img.JPEG",
        content1:
          "笔记本电脑和手机都是大众必须拥有的消费品，特别是年轻消费群体是最大客户群，所以这些实力雄厚的厂家都会找小鲜肉明星来做代言，这些明星的粉丝群体大多数都是年轻人，最近戴尔中国宣布，王俊凯出任戴尔品牌代言人，王俊凯现在还是OPPO明星家族成员，OPPO R11还有TFBOYS的定制版。",
        content2:
          "戴尔之前的代言人也是大名鼎鼎，那就是帅气才华以一身的吴亦凡，戴尔XPS这个品牌的吴亦凡一脸酷样，同时吴亦凡先后代言了两大手机品牌，那就是华为荣耀和小米，赵明和雷军都对吴亦凡赞赏有加。",
        content3:
          "鹿晗代言的笔记本电脑是联想小新，这款定位轻薄时尚的笔记本找鹿晗真是找对了，毕竟主打年轻群体，鹿晗去年还代言了vivo X20，据说人形立牌都被粉丝们亲切合照之类。",
        content4:
          "杨洋之前代言的则是惠普笔记本，杨洋也是OPPO明星家族成员,之前还有OPPO R9定制版。还有华为手机代言人赵丽颖同时也是华硕电脑的代言人，明星代言笔记本电脑和手机，绝对是双赢，巨大的收入和合作平台，厂家也得到了很高的人气转换。"
      },
      slide1: [
        {
          src:
            "https://img14.360buyimg.com/n0/jfs/t1/81931/14/4808/405865/5d3026cfEedc6dee2/16b1cb0cfc2269aa.jpg",
          msrc:
            "https://img14.360buyimg.com/n5/jfs/t1/81931/14/4808/405865/5d3026cfEedc6dee2/16b1cb0cfc2269aa.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://img14.360buyimg.com/n0/jfs/t1/18158/13/8635/172480/5c777ce3E301b8064/c52d4e055e3881a9.jpg",
          msrc:
            "https://img14.360buyimg.com/n5/jfs/t1/18158/13/8635/172480/5c777ce3E301b8064/c52d4e055e3881a9.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://img14.360buyimg.com/n0/jfs/t1/19056/11/8532/205511/5c777ce6Ed10063a1/6f5576f325397c85.jpg",
          msrc:
            "https://img14.360buyimg.com/n5/jfs/t1/19056/11/8532/205511/5c777ce6Ed10063a1/6f5576f325397c85.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://img14.360buyimg.com/n0/jfs/t1/17982/23/8619/222900/5c777ce5Ebef48e09/c1df6c0c9ed2966a.jpg",
          msrc:
            "https://img14.360buyimg.com/n5/jfs/t1/17982/23/8619/222900/5c777ce5Ebef48e09/c1df6c0c9ed2966a.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://img14.360buyimg.com/n0/jfs/t1/7746/37/16294/44702/5c777ce5E9040652b/32ddd7fa7b30a2a1.jpg",
          msrc:
            "https://img14.360buyimg.com/n5/jfs/t1/7746/37/16294/44702/5c777ce5E9040652b/32ddd7fa7b30a2a1.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    // this.getPhotoInfo();
    // this.getThumbs();
  },
  methods: {
    // getPhotoInfo(){
    //     // 获取图片的详情
    //     this.$http.get("api/getimageInfo/" + this.id).then(result => {
    //         if(result.body.status === 0){
    //             this.getPhotoInfo = result.body.message[0];
    //         }
    //     })
    // },
    // getThumbs(){
    //     // 获取缩略图
    //     this.$http.get("api/getthumimages/" + this.id).then(result => {
    //         if(result.body.status === 0){
    //             result.body.message.forEach(item =>{
    //                 item.w = 600;
    //                 item.h = 400;
    //             });
    //             // 把完整的数据保存到 list 中
    //             this.list = result.body.message;
    //         }
    //     })
    // }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  img {
    width: 100%;
  }
  p {
    text-indent: 1.5em;
  }
}
</style>