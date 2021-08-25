<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import {getHomeMultidata} from '@/network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    //请求数据
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style>
 .home-nav{
   background-color: var(--color-tint);
   text-align: center;
   color: #fff;
 }

</style>
