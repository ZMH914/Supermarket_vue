<template>
    <div class="recommends">
        <div v-for="item in recommends" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
        type: Array,
        default() {
            return []
        }
    }
  }
}
</script>

<style>
 .recommends {
     display: flex;
     width: 100%;
     font-size: 12px;
     text-align: center;
     padding: 10px 0 20px;
     border-bottom: 8px solid #eee;
 }

 .recommends-item {
     flex: 1;
 }

 .recommends-item img {
     width: 60px;
     height: 60px;
     margin-bottom: 5px;
     
 }
</style>
