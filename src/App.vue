<template>
  <div id="app">
    <tabbar>
      <tabbaritem>
        <img slot="item-icon-active" src="./assets/img/tabbar/主页 (1).svg">
        <img slot="item-icon" src="./assets/img/tabbar/主页.svg" alt="主页">
        <div slot="item-text">主页</div>
      </tabbaritem>
      <tabbaritem>
        <img slot="item-icon-active" src="./assets/img/tabbar/分类 (1).svg">
        <img slot="item-icon" src="./assets/img/tabbar/分类.svg" alt="分类">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem>
        <img slot="item-icon-active" src="./assets/img/tabbar/购物车 (1).svg">
        <img slot="item-icon" src="./assets/img/tabbar/购物车.svg" alt="购物车">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem>
        <img slot="item-icon-active" src="./assets/img/tabbar/我的 (1).svg">
        <img slot="item-icon" src="./assets/img/tabbar/我的.svg" alt="我的">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
import Tabbaritem from './components/tabbar/Tabbaritem.vue'

export default {
  name: 'App',
  components: { 
    Tabbar,
    Tabbaritem 
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
