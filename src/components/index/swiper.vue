<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(k,i) in swiperData" :key="i">
        <router-link :to="{name:'详情页',params:{id:k.id}}">
          <img :src="k.img">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>

</template>

<script>
export default {
  data() {
    return {
      swiperData: [{
        img : "http://localhost:8080/img/HOME/swiper1.jpg",
        id : 1
      },{
        img : "http://localhost:8080/img/HOME/swiper2.jpg",
        id : 19
      },{
        img : "http://localhost:8080/img/HOME/swiper3.jpg",
        id : 19
      }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

.mint-swipe {
  width: 100%;
  height:50vw;
  a,img {
    display: block;
    width: 100%;
    height:100%;
  }
}
</style>
