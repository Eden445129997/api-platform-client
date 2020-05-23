<template>
  <div class="layout-padding">
    <a-layout style="padding: 0px 24px 24px">

      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb">{{breadcrumb}}</a-breadcrumb-item>
      </a-breadcrumb>

      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '600px', width:'1650px'}"
      >
        <!-- <router-link :to="{path:'/login'}"> login </router-link> -->
        <router-view></router-view>

      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
// import eventbus from '@/utils/eventbus'

export default {
  name: 'layout-padding',
  data () {
    return {
      breadcrumbs: [
        'Home',
        'List',
        'App'
      ]
    }
  },
  created: () => {
    // 使用外部总线
    // eventbus.$on('jump-link', (jumpLinkUrl) => {
    //   const $this = this
    //   console.log(jumpLinkUrl)
    //   $this.$router.push({ path: jumpLinkUrl })
    // })

    // this.$on('jump-link', (jumpLinkUrl) => {
    //   console.log(jumpLinkUrl)
    //   this.$router.push({ path: jumpLinkUrl })
    // })
  },
  methods: {
  },
  props: {
    msg: String
  }
}
</script>
