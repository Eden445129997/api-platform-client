<template>
  <div class="Drawer">
    <!-- <a-button type="primary" @click="showDrawer"> <a-icon type="plus" /> 抽屉 </a-button> -->
    <a-drawer
      :width="720"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      :title="innerDraweConfig.title"
      :visible="innerDraweConfig.visible"
      :placement="innerDraweConfig.placement"
      :closable="innerDraweConfig.closable"
      :mask="innerDraweConfig.mask"
      :maskClosable="innerDraweConfig.maskClosable"
    >
      <ProjectForm v-if="innerDraweConfig.projectForm"></ProjectForm>

      <!-- 底部区域按钮 -->
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>

  </div>
</template>

<script>
import ProjectForm from './modules/ProjectForm'

export default {
  name: 'Drawer',
  props: ['draweConfig'],
  components: {
    ProjectForm
  },
  data () {
    return {
      form: this.$form.createForm(this),
      innerDraweConfig: {
        // 抽屉顶部展示标题
        title: 'Create a new account',
        // drawer是否可见
        visible: false,
        // 抽屉方向 'top' | 'right' | 'bottom' | 'left'
        placement: 'right',
        // 蒙层展示效果
        mask: true,
        // 蒙层的关闭效果
        maskClosable: false,
        // 关闭按钮
        closable: true,
        // 根据父组件给的展示对应的form表单
        projectForm: false
      }
    }
  },
  mounted () {
    // 父组件可以通过draweConfig的属性达到自定义控件效果
    if (this.hasKey('visible')) {
      this.innerDraweConfig.visible = this.draweConfig.visible
      console.log('visible')
    }
    if (this.hasKey('placement')) {
      this.innerDraweConfig.placement = this.draweConfig.placement
      console.log('placement')
    }
    if (this.hasKey('mask')) {
      this.innerDraweConfig.mask = this.draweConfig.mask
      console.log('mask')
    }
    if (this.hasKey('maskClosable')) {
      this.innerDraweConfig.maskClosable = this.draweConfig.maskClosable
      console.log('maskClosable')
    }
    if (this.hasKey('closable')) {
      this.innerDraweConfig.closable = this.draweConfig.closable
      console.log('closable')
    }
    // 打印对象所有的属性
    // console.log(Object.keys(this.draweConfig))
    // console.log(this.innerDraweConfig.inputConfig)
    // 项目form表单
    if (this.hasKey('projectForm')) {
      this.innerDraweConfig.projectForm = this.draweConfig.projectForm
      console.log('projectForm')
    }
  },
  methods: {
    showDrawer () {
      this.innerDraweConfig.visible = true
    },
    onClose () {
      this.innerDraweConfig.visible = false
    },
    // 判断draweConfig是否存在属性
    hasKey (property) {
      // console.log(this.draweConfig)
      return Object.prototype.hasOwnProperty.call(this.draweConfig, property)
    }
  }
}
</script>
