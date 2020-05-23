<template>
  <div class="Table">

    <a-table :columns="columns" :dataSource="dataList" :scroll="{ x: 1000 }">

      <!-- 启用按钮 -->
      <span slot="onChange">
        <a-switch default-checked @change="onChange" size="small" :checked="status"/>
      </span>
      <!-- 功能按钮 -->
      <span slot="action">
        <!-- <router-link to="/home/about">添加</router-link> -->
        <a class="ant-dropdown-link" @click="onChange"> 编辑 </a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> 更多 <a-icon type="down" /> </a>
      </span>
    </a-table>

  </div>
</template>
<script>

export default {
  name: 'Table',
  props: ['columns', 'dataList'],
  data () {
    return {
      search: '',
      status: false
      // visible: false
    }
  },
  methods: {
    editProject () {
      this.$router.push({ path: '/home/about' })
    },
    onChange (checked) {
      console.log(`a-switch to ${checked}`)
    }
  },
  mounted () {
  }
}
</script>
