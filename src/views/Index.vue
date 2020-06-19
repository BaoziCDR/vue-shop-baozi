<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-swiper />
    <v-service/>
    <v-section1 :list="loadList(`1`)" />
    <v-section2 :list="loadList(`2`)" />
    <v-baseline/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Swiper from '@/components/index/swiper.vue'
import Service from '@/components/index/service.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
export default {
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-service': Service,
    'v-section1': Section1,
    'v-section2': Section2,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: [],
      loading: true
    }
  },
  beforeCreate() {
    this.$api({
      method: 'get',
      url: '/getAllGoods'
    }).then((response) => {
      this.datas = response.data;
    }).catch(function(error) {
      alert(error)
    })
  },
  computed: {
    loadList() {
      return (isShow) => {
        let newData = [];
        if (this.datas != null) {
          this.datas.forEach(item => {
            if (item.isShow == isShow) {
              newData.push(item);
            }
          });
          return newData;
        }
      }
    }
  }
}
</script>



<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
}
</style>
