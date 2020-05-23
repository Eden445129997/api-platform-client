<template>
    <div class="ProjectPage">
      <!-- 输入框 -->
      <InputSearch v-on:updateData="updateDataList" style="display:inline-block; margin: 10px 30px 0px 10px"></InputSearch>
      <!-- 新增按钮 -->
      <a-button type="primary" @click="showDrawer"> <a-icon type="plus" /> 新增 </a-button>
      <!-- <a-button type="primary" @click="testrequest"> <a-icon type="plus" /> test </a-button> -->
      <!-- 分割线 -->
      <a-divider />
      <!-- 表格 -->
      <Table v-bind:columns="columns" v-bind:dataList="dataList"></Table>
      <!-- 抽屉组件 -->
      <drawer ref="drawer" :draweConfig="draweConfig"></drawer>
    </div>
</template>

<script>
import { getProjectByName, videoCommentChk } from '@/utils/apiObj'
import InputSearch from '@/components/InputSearch'
import Table from '@/components/Table'
import Drawer from '@/components/Drawer/index.vue'

const columns = [
  { title: '序号', width: 100, dataIndex: 'key', key: 'key', fixed: 'left' },
  { title: '项目', width: 150, dataIndex: 'project_name', key: 'project_name' },
  { title: '描述', dataIndex: 'text', key: '1' },
  { title: '负责人', dataIndex: 'project_leader', key: '2' },
  { title: '创建时间', dataIndex: 'create_time', key: '3' },
  {
    title: '是否启用',
    key: '4',
    scopedSlots: { customRender: 'onChange' }
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 150,
    scopedSlots: { customRender: 'action' }
  }
]

const dataList = [
]

export default {
  name: 'ProjectPage',
  components: {
    Drawer,
    InputSearch,
    Table
  },
  mounted () {
    this.updateDataList('')
  },
  data () {
    return {
      draweConfig: {
        maskClosable: true,
        projectForm: true
      },
      columns: columns,
      dataList: dataList
    }
  },
  methods: {
    // 刷新数据（请求加载，渲染）
    // async 异步函数，await接收promise对象
    async updateDataList (keyword) {
      // console.log(keyword)
      const res = await getProjectByName(keyword)
      this.setDataList(res.data)
      // console.log(res.data)
    },
    // 注入数据
    setDataList (newDataList) {
      // 清空数组
      dataList.splice(0, dataList.length)
      // 给数组设置主键，否则teble组件会报错
      for (let i = 0; i < newDataList.length; i++) {
        const key = i + 1
        newDataList[i].key = key
        dataList.push(newDataList[i])
      }
      console.log(dataList)
    },
    showDrawer () {
      this.$refs.drawer.showDrawer()
    },
    async testrequest () {
      const chkList = await videoCommentChk()
      console.log(chkList.data)
    }
  }
}
</script>
