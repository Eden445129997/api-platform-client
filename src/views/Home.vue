<template>
  <div class="Home">
    <!-- <el-button type="info" @click="logout">退出</el-button> -->
    <a-layout>

      <!-- 头部布局 -->
      <!-- <LayoutHeader/> -->

      <!-- 头部以下的整体布局 -->
      <a-layout>

        <!-- 侧边栏布局 -->
        <!-- <layoutsider/> -->
        <a-layout-sider width="200" style="background: #fff">

          <div class="logo">
            <!-- 测试平台Logo -->
            <img src="@/assets/logo.png" alt="">
          </div>

          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >

            <a-sub-menu v-if="menus[0].display">
              <span slot="title"><a-icon type="cluster"/>{{menus[0].fatherMenu}}</span>
              <a-menu-item>
                <span>
                  <a-icon type="gold"/>
                  <router-link to="/home/project">工程配置</router-link>
                </span>
              </a-menu-item>

              <a-menu-item>
                <span>
                  <a-icon type="global"/>
                  <router-link to="/home/drawer">环境配置</router-link>
                </span>
              </a-menu-item>
            </a-sub-menu>

            <a-menu-item v-if="menus[1].display">
              <span>
                <a-icon type="api"/>
                <router-link to="/home/about">接口配置</router-link>
              </span>
            </a-menu-item>

            <a-sub-menu v-if="menus[2].display">
              <span slot="title"><a-icon type="folder"/>测试</span>
              <a-menu-item>
                <span>
                  <a-icon type="folder-add"/>
                  <router-link to="/home/testPlan">测试计划</router-link>
                </span>
              </a-menu-item>
              <a-menu-item>
                <span>
                  <a-icon type="folder-open"/>
                  <router-link to="/home/hello">测试用例</router-link>
                </span>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/home/hello">测试细节</router-link>
              </a-menu-item>
              <!-- <a-menu-item v-for="childrenMenu in menus[2].childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item> -->
            </a-sub-menu>

            <a-menu-item v-if="menus[3].display">
              <span>
                <a-icon type="pie-chart"/>
                <router-link to="/home/hello">测试报告</router-link>
              </span>
            </a-menu-item>
            <a-menu-item v-if="menus[3].display">
              <span>
                <a-icon type="api"/>
                <router-link to="/home/hello">报告细节</router-link>
              </span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>

        <!-- 内容布局 -->
        <!-- <layoutpadding/> -->
        <a-layout style="padding: 0px 24px 24px">

          <!-- 面包屑 -->
          <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb">{{breadcrumb}}</a-breadcrumb-item>
          </a-breadcrumb> -->

          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: '20px 0px', minHeight: '800px', width:'100%'}"
          >

            <!-- 标签页 -->
            <a-tabs>
              <a-tab-pane key="1" tab="Tab 1">
                <!-- 路由页面 -->
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </a-tab-pane>
              <a-tab-pane key="2" tab="Tab 2">
              </a-tab-pane>
              <a-tab-pane key="3" tab="Tab 3">
              </a-tab-pane>
              <a-button slot="tabBarExtraContent">
                自定义按钮
              </a-button>
            </a-tabs>

            <!-- <router-link :to="{path:'/login'}"> login </router-link> -->
            <!-- <keep-alive>
              <router-view></router-view>
            </keep-alive> -->

          </a-layout-content>
        </a-layout>

      </a-layout>

    </a-layout>
  </div>
</template>

<script>
// import LayoutHeader from '@/components/Layout/header'
// import Layoutsider from '@/components/Layout/sider'
// import Layoutpadding from '@/components/Layout/padding'

export default {
  name: 'Home',
  data () {
    return {
      menus: [
        {
          fatherMenu: '工程',
          childrenMenu: [
            '工程配置',
            '环境配置'
          ],
          display: true
        },
        {
          fatherMenu: '接口配置',
          childrenMenu: [
          ],
          display: true
        },
        {
          fatherMenu: '测试计划',
          childrenMenu: [
            '测试集合', '测试用例', '测试细节'
          ],
          display: true
        },
        {
          fatherMenu: '测试报告',
          childrenMenu: [
            '报告细节'
          ],
          display: true
        }
      ],
      jumpLinkUrl: '/home/about'
    }
  },
  methods: {
    jumpLink () {
      this.$router.push({ path: '/home/about' })
    }
  },
  components: {
    // LayoutHeader
    // Layoutsider,
    // Layoutpadding
  }
}
</script>

<style lang="less" scoped>
// #components-layout-demo-top-side-2 .logo {
//   width: 120px;
//   height: 31px;
//   background: rgba(255, 255, 255, 0.2);
//   margin: 16px 28px 16px 0;
//   float: left;
// }
</style>
