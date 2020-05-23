<template>
    <div class="ProjectForm">
      <a-form :form="form" layout="vertical" hide-required-mark>
        <!-- 第一行 -->
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="工程名">
              <a-input
                v-decorator="[
                  '工程名',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <!-- 第二行 -->
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="负责人">
              <a-input
                v-decorator="[
                  '负责人',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <!-- 第三行 -->
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="描述">
              <a-textarea
                v-decorator="[
                  '描述',
                  {
                    rules: [{ required: true, message: 'Please enter url description' }],
                  },
                ]"
                style="width: 100%"
                :rows="4"
                placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <!-- 底部区域按钮 -->
      <!-- <div
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
      </div> -->

    </div>
</template>

<script>
import { projectViews } from '@/utils/apiObj'

export default {
  name: 'ProjectForm',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      form: this.$form.createForm(this)
      // form: {
      //   project_name: '',
      //   text: '',
      //   project_leader: '',
      //   status: '1'
      // }
    }
  },
  methods: {
    async updateDataList (form) {
      // console.log(keyword)
      const res = await projectViews('post', this.$refs.form)
      console.log(res.data)
      // console.log(res.data)
    }
  }
}
</script>
