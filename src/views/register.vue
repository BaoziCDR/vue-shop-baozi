<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">注册页</h1>
    </v-header>
    <section>
      <mt-field
       label="账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
        ></mt-field>
    </section>
    <mt-button
     plain
     size="large"
     @click="register">注册</mt-button>
    <mt-button
      plain
      size="large"
      @click="goLogin">去登陆</mt-button>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'

export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      account:'',
      password:''
    }
  },
  methods:{
    // 注册按钮
    register(){
      if(this.account!=="" && this.password!=="") {
        this.$api({
          method: 'post',
          url: '/register',
          params:{
            account:this.account,
            password:this.password
          }
        }).then((response) => {
          if (response.data.result == "success"){
            Toast('注册成功,返回登录');
            setTimeout(()=>{
              this.$router.replace({
                path: 'login'
              })
            },1000);
          }else if(response.data.result == "fail" && response.data.error.password){
            Toast(response.data.error.password);
          }else if(response.data.result == "fail" && response.data.error.user){
            Toast(response.data.error.user);
          }else {
            Toast("服务器错误");
          }

        }).catch(function(error) {
          alert(error)
        })
      }else {
        Toast('账号密码不能为空');
      }
    },
    goLogin(){
      this.$router.replace({
        path: 'login'
      })
    }
  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
