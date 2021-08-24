<template>
  <div id="app">
    <router-view></router-view>            <!--路由出口-->
    <MainTabbar></MainTabbar>              <!--对tabbar和tabbaritem再进行一层封装，总的tabbar组件入口-->
  </div>
</template>

<script>
import MainTabbar from './components/conten/MainTabbar.vue'

export default {
  name: 'App',
  components: { 
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
