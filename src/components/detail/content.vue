<template lang="html">
  <section class="content">
    <div class="img-wrap">
      我是详情！！！
    </div>
  </section>

</template>

<script>
import {mapState} from "vuex";

export default {
  data:{
    FormArr : [ {
      index : 1,
    } ]
  },
//   computed:mapState({
//     view: state => state.detail.productDatas,
//   })
  methods : {
    AddForm: function () {
      this.FormArr.push({
        index: index++,
      })
    },
  }
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
