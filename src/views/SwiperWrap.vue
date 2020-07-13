<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide :key="index" v-for="(item, index) in imgStackItem">
      <img referrerpolicy="no-referrer" width="60%" height="60%" :src="item.path" alt="">
      <div class="imgInfo">
        <h3> 这是标题</h3>
        <p>这是说明</p>
        <p>这是说明</p>
        <p>这是说明</p>
      </div>
    </swiper-slide>
    <div class="swiper-scrollbar"  slot="scrollbar"></div>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  props: ['imgStackItem'],
  data: function () {
    return {
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        scrollbar: {
          el: '.swiper-scrollbar'
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(2, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  // width: 100%;
  // height: 500px;
}
.swiper-slide {
  text-align: left;
  font-size: 18px;
  background: hsl(var(--base-hue),10%,15%);

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: left;
  -webkit-box-align: center;
  -ms-flex-align: center;
  // -webkit-align-items: center;
  // align-items: center;
}
</style>
