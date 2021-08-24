<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">          <!--属性绑定-->
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  data() {
    return {
      // isActive: true              //点击标志
    }
  },
  props: {                        //父传子
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {                     //点击标志,动态传入当前活跃路由路径
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {                  //文字变色标志
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;  
    font-size: 14px;
}

.tab-bar-item img{
    width: 19px;
    height: 19px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}

.activetext{
  color: rgb(0, 195, 255);
}
</style>
