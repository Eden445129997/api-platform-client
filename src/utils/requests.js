import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { message } from 'ant-design-vue'

// 根路径，这是为了配合代理做的设置
// 本地环境服务
const BASE_URL = 'localhost/'

const requests = axios.create({
  // 根路径
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;',
    'auth': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODk3ODY4NTUsImJhY2tfdXNlcl9pZCI6NDMsImlzcyI6InFpYW9rdV9iYWNrIn0.2qblJDRLoN1v7GJNTdp8Y72V-H0EgiH0brjioINR6BoeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODk4MDM0MDMsImJhY2tfdXNlcl9pZCI6NDMsImlzcyI6InFpYW9rdV9iYWNrIn0.IojVNZkOqWrPuzFyF0hysb0Vt85Dvc98IFbcVrsVFzs'
  },
  changeOrigin: true, // 允许跨域
  timeout: 3000, // 超时配置3秒
  responseType: 'json', // 响应数据格式
  responseEncoding: 'utf8' // 响应数据编码
})

// request拦截器
requests.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token--['Access-Token']为自定义key 请根据实际情况自行修改
      config.headers['Access-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log('加载超时')
    console.log(error)
    return Promise.reject(error)
  }
)

// respone拦截器
requests.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // message.success(response.data) // 这里会展示数据里面的text
      // message.success(response.status)
      return response
    } else {
      message.error(response.status)
      return response
    }
  },
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log(error)// for debug
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default requests
