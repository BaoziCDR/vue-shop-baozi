<template lang="html">
  <section class="content">
    <div class="img-wrap" v-if="view">
      {{ view.content }}
    </div>
  </section>

</template>

<script>
import {mapState} from "vuex";

export default {
  computed:mapState({
    view: state => state.detail.productDatas.view,
  })
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    margin-top: 10px;
    border-top: 20px solid #F8FCFF;
    .img-wrap {
    height: 120vw;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
