<template>
    <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbaritem'
}
</script>

<style>
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
</style>
