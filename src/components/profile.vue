<template>
  <div>
    <h2>个人资料</h2>
    <p>姓名：{{this.$route.query.name}}</p>
    <p>年龄：{{this.$route.query.age}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style>

</style>
