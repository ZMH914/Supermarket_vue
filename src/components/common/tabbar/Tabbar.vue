<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color:  rgb(230 230 230 / 100%);
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 10;
}
</style>
