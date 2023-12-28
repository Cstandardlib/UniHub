<template>
  <!-- <nav v-if="showLink"> -->
  <nav>
    <router-link to="/">UniHub</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed: {
    showLink() {
      // 根据当前路由信息判断是否显示链接
      return this.$route.path === '/';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin-top: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
