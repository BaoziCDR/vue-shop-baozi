<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登录页</h1>
    </v-header>
    <section>
      <mt-field
        label="账号"
        placeholder="请输入账号"
        type="text"
        v-model="account"
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
      @click="login">登录
    </mt-button>
    <mt-button
      plain
      size="large"
      @click="goRe">去注册
    </mt-button>

  </div>
</template>

<script>
  import Header from '@/common/_header.vue'
  import {Toast} from 'mint-ui'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      'v-header': Header
    },
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      // 登录按钮
      login() {
        if (this.account !== "" && this.password !== "") {
          this.$api({
            method: 'post',
            url: '/UserLoginServlet',
            params: {
              account: this.account,
              password: this.password
            }
          }).then((response) => {
            if (response.data.result == "success") {
              let ss = new Date().getSeconds()
              let hh = new Date().getHours();
              console.log(response.data.user.account + "x" + Math.random() * (ss + 5) * hh)
              Toast('登录成功,存储token,跳转网页');
              this.$store.commit('CHANGE_TOKEN', response.data.user.account + "x" + Math.random() * (ss + 5) * hh);
              this.$store.commit('SAVE_USERINFO', response.data.user);
              setTimeout(() => {
                this.$router.replace({
                  path: 'user'
                })
              }, 1000);
            } else {
              Toast(response.data.result);
            }

          }).catch(function (error) {
            alert(error)
          })
        } else {
          Toast('账号密码不能为空');
        }
      },
      goRe() {
        this.$router.replace({
          path: 'register'
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .login {
    > section {
      .tip {
        padding: 6vw 3vw;
        color: rgb(224, 145, 71);
        letter-spacing: 2px;
        font-size: 16px;
      }
    }
  }
</style>
