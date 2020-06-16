<template lang="html">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="k in swiperData" :key="k.id">
        <div>
          <img :src="k.imgPath">
        </div>
      </mt-swipe-item>
    </mt-swipe>

</template>

<script>
export default {
  data() {
    return {
      swiperData: [
        "https://dummyimage.com/800x400/04a1f7/FFF.png",
        "https://dummyimage.com/800x400/04a1f7/FFF.png",
        "https://dummyimage.com/800x400/04a1f7/FFF.png"
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
