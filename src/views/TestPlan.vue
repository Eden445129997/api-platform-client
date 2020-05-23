<template>
    <div class="TestPlanPage">
      <!-- 输入框 -->
      <InputSearch v-on:updateData="updateDataList" style="display:inline-block; margin: 10px 30px 0px 10px"></InputSearch>
      <!-- 新增按钮 -->
      <a-button type="primary" @click="showDrawer"> <a-icon type="plus" /> 新增 </a-button>
      <!-- 分割线 -->
      <a-divider />
      <!-- 表格 -->
      <Table v-bind:columns="columns" v-bind:dataList="dataList"></Table>
      <!-- 抽屉组件 -->
      <drawer ref="drawer" :draweConfig="draweConfig"></drawer>
    </div>
</template>

<script>
import { getTestPlanByName } from '@/utils/apiObj'
import InputSearch from '@/components/InputSearch'
import Table from '@/components/Table'
import Drawer from '@/components/Drawer/index.vue'

const columns = [
  { title: '序号', width: 100, dataIndex: 'key', key: 'key', fixed: 'left' },
  { title: '所属项目id', width: 150, dataIndex: 'project_id', key: 'project_id' },
  { title: '计划名', width: 150, dataIndex: 'plan_name', key: 'plan_name' },
  { title: '描述', dataIndex: 'text', key: '1' },
  { title: '创建人', dataIndex: 'creater', key: '2' },
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
  name: 'TestPlan',
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
      const res = await getTestPlanByName(keyword)
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
    }
  }
}
</script>
