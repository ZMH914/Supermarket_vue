<template>
  <tabbar>
    <tabbaritem path="/home" activeColor="blue">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="主页">
      <div slot="item-text">主页</div>
    </tabbaritem>
    <tabbaritem path="/catgory" activeColor="blue">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="分类">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activeColor="blue">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="购物车">
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activeColor="blue">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="我的">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar.vue'
import Tabbaritem from '../common/tabbar/Tabbaritem.vue'

export default {
  name: 'MainTabbar',
  components: { 
    Tabbar,
    Tabbaritem 
  }
}
</script>

<style scoped>

</style>