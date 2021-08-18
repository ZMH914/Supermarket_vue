<template>
  <div>
    <h2>Home</h2>
    <p>我是首页</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      path: '/home/news'
  }
  },
  activated() {                      //跳转到组件时调用，启用keepalive时才有效，deactivted同理，离开路由时调用
    this.$router.replace(this.path)
  },
  beforeRouteLeave (to,from,next) {   //组件内路由守卫，离开路由前保存路由路径
    this.path = this.$route.path
    next()
  }
}
  
</script>

<style>

</style>
