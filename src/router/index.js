import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

// 通用路由
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/components/About')
      },
      {
        path: 'hello',
        component: () => import(/* webpackChunkName: "about" */ '@/components/HelloWorld')
      },
      {
        path: 'project',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Project')
      },
      {
        path: 'drawer',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Drawer')
      },
      {
        path: 'testPlan',
        component: () => import(/* webpackChunkName: "about" */ '@/views/TestPlan')
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/components/Drawer')
  }
]

export const asyncRoutes = []

// 创建路由
const createRouter = () => new VueRouter({
  mode: 'hash', // 默认，前端路由和后端路由分开
  // mode: 'history', // 合并模式，这个模式会让url变成：前端路由 + 后端路由
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// 第一次挂载的路由实例
const router = createRouter()

// 重置路由
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  /*
  to 代表将要访问的路径
  from 代表从哪个路径跳转而来
  next 是一个函数，表示放行
    next()代表放行，next('/login')代表强制跳转
  */

  if (to.path === '/login') {
    next()
  } else {
    // 如果没有token则跳转登录页，有则通过
    const tokenStr = getToken()
    // console.log(tokenStr)
    if (!tokenStr) {
      return next('/login')
    } else {
      next()
    }
  }

  // todo：权限判断，以后再加
  // if (store.getters.token) { // 判断是否有token
  //   if (to.path === '/login') {
  //     next({ path: '/' });
  //   } else {
  //     if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
  //       store.dispatch('GetInfo').then(res => { // 拉取info
  //         const roles = res.data.role;
  //         store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
  //           router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
  //           next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
  //         })
  //       }).catch(err => {
  //         console.log(err);
  //       });
  //     } else {
  //       next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next();
  //   } else {
  //     next('/login'); // 否则全部重定向到登录页
  //   }
  // }
})

export default router
