<template>
  <div id="home">

    <!-- 导航条 -->
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>

    <!-- 首页推荐 -->
    <home-recommend :recommends="recommends"/>

    <!-- 本周流行 -->
    <feature-view/>

    <!-- 分类导航栏 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"/>

    <!-- 商品展示 -->
    <goods-list :goods="showGoods"/>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '../../components/conten/TabControl.vue'
import GoodsList from '@/components/conten/goods/GoodsList.vue'

import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata, 
        getHomeGoods,
        getHomeRecommend,
        } from '@/network/home.js'


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList
  },
     data() {
    return {
      banners: [],              //轮播图数据
      recommends: [],           //推荐数据
      goods: {                  //首页货物数据
        '流行': {page: 0, list: []},
        '新款': {page: 0, list: []},
        '精选': {page: 0, list: []}
      },
      currentType: '流行'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
  ,
  created() {
    //请求数据
    this.getHomeMultidata()
    //请求首页推荐数据
    this.getHomeRecommend()
    //请求首页货物数据
    this.getHomeGoods('流行')
    this.getHomeGoods('新款')
    this.getHomeGoods('精选')
  },
  methods: {

    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = '流行'
          break
        case 1:
          this.currentType = '新款'
          break
        case 2:
          this.currentType = '精选'
          break
      }
    },

    //请求轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data
      })
    },
    //请求推荐数据
    getHomeRecommend() {
      getHomeRecommend().then(res => {
        this.recommends = res.data.data
      })
    },
    //请求首页货物数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.records)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style>
#home {
  padding-bottom: 49px;
  padding-top: 44px;
}

 .home-nav {
   background-color: var(--color-tint);
   text-align: center;
   color: #fff;
   position: fixed;
   left: 0px;
   right: 0px;
   top: 0px;
   z-index: 9;
 }

</style>
