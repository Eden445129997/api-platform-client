<template>
  <div class="login-container">

    <el-row>
      <el-col :span="8" :offset="8">
        <h1 class='page-title'>测试平台</h1>

        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" class='login-form'>
          <!-- <h1>{{loginForm.username}}</h1> -->

          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>

          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>

        </el-form>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '111',
        password: '111111'
      },
      // 表单验证对象
      loginFormRules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(
              res => {
                this.$router.push({ path: '/home', query: this.otherQuery })
                this.$message.success('登录成功')
                this.loading = false
              }
            )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>

<style lang="less" scoped>
body{
  background-color: #eee;
}
.login-container{
  padding-top: 80px;
  .page-title{
    text-align: center;
  }
  .login-form{
    padding-top: 40px;
  }
}

.btns{
  display: flex;
  justify-content: flex-end;
}
</style>
