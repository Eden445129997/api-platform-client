<template>
  <div class="layout-sider">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        mode="inline"
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >

        <!-- <a-sub-menu v-for="menu in menus" :key="menu.fatherMenu">
          <span slot="title"><a-icon type="user" />{{menu.fatherMenu}}</span>
          <a-menu-item v-for="childrenMenu in menu.childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item>
        </a-sub-menu> -->

        <a-sub-menu v-if="menus[0].display" @click.native="jumpLink">
          <span slot="title"><a-icon type="user"/>{{menus[0].fatherMenu}}</span>
          <!-- <router-link to="/test"><a-icon type="user" />test</router-link> -->
          <a-menu-item v-for="childrenMenu in menus[0].childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item>
        </a-sub-menu>

        <a-sub-menu v-if="menus[1].display">
          <span slot="title"><a-icon type="user" />{{menus[1].fatherMenu}}</span>
          <!-- <span slot="title"><a-icon type="user"/><router-link to="/test">test</router-link></span> -->
          <a-menu-item v-for="childrenMenu in menus[1].childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item>
        </a-sub-menu>

        <a-sub-menu v-if="menus[2].display">
          <span slot="title"><a-icon type="user"/>{{menus[2].fatherMenu}}</span>
          <a-menu-item v-for="childrenMenu in menus[2].childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item>
        </a-sub-menu>

        <a-sub-menu v-if="menus[3].display">
          <span slot="title"><a-icon type="user"/>{{menus[3].fatherMenu}}</span>
          <a-menu-item v-for="childrenMenu in menus[3].childrenMenu" :key="childrenMenu">{{childrenMenu}}</a-menu-item>
        </a-sub-menu>

      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
// import eventbus from '@/utils/eventbus'

export default {
  name: 'layout-sider',
  data () {
    return {
      menus: [
        {
          fatherMenu: '工程配置',
          childrenMenu: [
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
      console.log(this.jumpLinkUrl)
      // todo: 跳转请求对应链接的接口
      this.$emit('jump-link', this.jumpLinkUrl)
      // 外部总线
      // eventbus.$emit('jump-link', this.jumpLinkUrl)
    }
  },
  props: {
    msg: String
  }
}
</script>
