<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-view></router-view>

    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>
    <button @click="userClick">User</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhan'
    }
  },
  methods: {
    homeClick() {                              
      // this.$router.push('/home')
      this.$router.replace('/home')           //通过代码方式进行路由跳转
      console.log('homeclick')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutclick')
    },
    userClick() {
      // this.$router.push('/user' + userId)
      this.$router.replace('/user/'+this.userId)
      console.log('userclick')
    }
  }
}
</script>

<style>

.router-link-active{
  color: cadetblue;
}

</style>
