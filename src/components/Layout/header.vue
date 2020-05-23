<template>
  <div class="layout-header">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >

        <a-menu-item v-for="header in headers" :key="header">{{header}}</a-menu-item>
        <a-button @click.native="logout">退出</a-button>
      </a-menu>

    </a-layout-header>

  </div>
</template>

<script>
export default {
  name: 'layout-header',
  data () {
    return {
      headers: [
        1,
        2,
        3
      ]
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      // window.localStorage.clear()
      this.$router.push('/login')
    }
  },
  props: {
    msg: String
  }
}
</script>
