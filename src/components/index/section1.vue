<template lang="html">
  <section class="section1">
    <h1 class="section1-title">
      每日精品
      <i class="icon-right"></i>
    </h1>
    <ul class="section1-list">
      <li v-for="k in list" :key="k.id">
        <router-link :to="{name:'详情页',params:{id:k.id}}">
          <img v-lazy="k.img[0]" alt="">
        </router-link>
      </li>
    </ul>
  <div  class="section1-banner">
    <img v-lazy="banner">
  </div>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

export default {
  data() {
    return {
      banner: "http://localhost:8080/img/HOME/section1.png"
    }
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}

</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1 {
  .pt();
  .section1-title {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
    .fz(font-size, 40);
    color: #333;
    position: relative;

    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }

  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 50%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      a,
      img {
        width: 100%;
        display: block;
      }
    }
  }

  .section1-banner {
    display: block;
    width: 100vw;
    img {
      width: 100%;
      height: 24vw;
    }
  }
}
</style>
