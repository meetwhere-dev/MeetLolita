<template>
  <div class="home">
    <PageHeader title="Home"/>
    <div class="imgStack">
      <div class="imgStackItem"
      :key="index"
      v-for="(item, index) in imgStackItem"
      :class="isHoverImgStackItem == index ? 'on': ''"
      @mouseover="isHoverImgStackItem = index">
        <div class="imgStackItemBlock" :style="{ transform: 'translateX(' + item.positionX +')' }">
          <a href="" >
            <img referrerpolicy="no-referrer" :src="item.path" alt="">
          </a>
          <div class="imgInfo">
            <h3> 这是标题</h3>
            <p>这是说明</p>
            <p>这是说明</p>
            <p>这是说明</p>
          </div>
        </div>
      </div>
    </div>
      <!-- Swiper -->
    <SwiperWrap :imgStackItem="imgStackItem" />
    <h1 style="margin:50px auto 30px auto">排名</h1>
    <Range :isSelf="0"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PageHeader from './PageHeader.vue'
import Range from './Range.vue'
import Footer from './Footer.vue'
import SwiperWrap from './SwiperWrap.vue'
// import axios from 'axios'
export default {
  data: function () {
    return {
      isHoverImgStackItem: 4,
      // imgStackItem: [],
      imgStackItem: [
        {
          path: 'https://wx2.sinaimg.cn/large/83776be6gy1gfsx9pnip7j20u0190e81.jpg',
          positionX: '-50px'
        },
        {
          path: 'https://wx1.sinaimg.cn/mw1024/83776be6gy1gf6shbd3xaj20u0190npd.jpg',
          positionX: '-50px'
        },
        {
          path: 'https://wx2.sinaimg.cn/large/83776be6gy1gez6wteegmj21111jknpd.jpg',
          positionX: '-70px'
        },
        {
          path: 'https://wx3.sinaimg.cn/large/83776be6gy1gctojjkk41j20u0190x6p.jpg',
          positionX: '-60px'
        },
        {
          path: 'https://wx3.sinaimg.cn/large/83776be6gy1gdowch30rzj20u0190b29.jpg',
          positionX: '-80px'
        }
      ]
    }
  },
  name: 'Home',
  computed: {
    range4: function () {
      return [...Array(5).keys()]
    }
  },
  components: {
    PageHeader,
    Range,
    Footer,
    SwiperWrap
  },
  mounted () {
    this.$axios
      .get('test')
      .then(res => {
        console.log(res)
        // const temp = res.data.map(item => {
        //   return {
        //     path: require(item.path),
        //     positionX: item.positionX
        //   }
        // })
        this.imgStackItem = res.data
      })
      .catch(res => {
        console.log('axios出错了')
      })
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  @media screen and (min-width: 800px){
      display: none;
  }
}

.imgStack{
  @media screen and (max-width: 800px){
      display: none;
  }
  box-shadow:0px -4px hsl(var(--base-hue), 50%, 50%);
  max-width: 1000px;
  width: calc(100% - 40px);
  margin: auto;
  display: flex;
  background-color: hsl(var(--base-hue), 40%, 20%);
  .imgStackItem{
    height: 420px;
    width: 140px;
    background-repeat:no-repeat;
    background-size:280px 420px;
    background-position: center;
    transition: all .3s;
    overflow: hidden;
    .imgStackItemBlock{
      display: flex;
      transition: all .3s;
      img{
        height: 420px;
        width: 280px;
      }
      .imgInfo{
        width: 160px;
        white-space: nowrap;
      }
      // text-align: left;
    }
  }
  .on{
    width: 440px;
    .imgStackItemBlock{
      transform: translateX(0px)!important;
    }
  }
}

</style>
