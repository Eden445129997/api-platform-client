<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home></Home> -->
  </div>
</template>

<script>
// import LayoutHeader from '@/components/layout/header'
// import Layoutsider from '@/components/layout/sider'
// import Login from './views/Login'
// import Home from '@/views/Home'

export default {
  name: 'app',
  data () {
    return {
      islogin: true
    }
  },
  methods: {
  },
  components: {
    // LayoutHeader,
    // Layoutsider,
    // Login,
    // Home
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
