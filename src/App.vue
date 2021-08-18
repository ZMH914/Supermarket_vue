<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+this.userId" tag="button" replace>用户</router-link>  <!--v-bind绑定userId属性-->
     <!--路由参数传递，通过query，上面为方法一，通过绑定特殊路径属性-->
    <router-link :to="{path: '/profile' , query: {name: this.name , age: this.age }}" tag="button" replace>用户资料</router-link>
     
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>
    <button @click="userClick">User</button>
    <button @click="profileClick">profile</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 7,
      name: 'zhangdapao',
      age: 20
    }
  },
  methods: {
    homeClick() {                              
      // this.$router.push('/home')
      this.$router.replace('/home')           //通过代码方式进行路由跳转
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      // this.$router.push('/user' + userId)
      this.$router.replace('/user/'+this.userId)
    },
    profileClick() {                    //按键实现routerlink的参数传递
      // this.$router.push({path: '/profile' , query: {name: this.name , age: this.age }})
      this.$router.replace({path: '/profile' , query: {name: this.name , age: this.age }})
    }
  }
}
</script>

<style>

.router-link-active{
  color: cadetblue;
}

</style>
