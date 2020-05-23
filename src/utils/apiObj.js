import requests from '@/utils/requests'

export function login (data) {
  return requests({
    url: 'platform/login/',
    method: 'get'
    // data
  })
}

export function logout () {
  return requests({
    url: 'platform/logout/',
    method: 'post'
  })
}

export function projectViews (method, data) {
  return requests({
    url: '/platform/ProjectViews/',
    method: method,
    data: data
  })
}

export function getProjectByName (keyword) {
  return requests({
    url: '/platform/getProjectByName/',
    method: 'get',
    params: { keyword }
  })
}

export function getTestPlanByName (keyword) {
  return requests({
    url: '/platform/getTestPlanByName/',
    method: 'get',
    params: { keyword }
  })
}

export function getInfo (token) {
  return requests({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function videoCommentChk () {
  return requests({
    url: '/back-http/videoCommentChk/check/wait',
    method: 'post'
  })
}

// 异步封装-好像不对
// export function getInfo (token) {
//   return new Promise((resolve, reject) => {
//     requests({
//       url: '/vue-element-admin/user/info',
//       method: 'get',
//       params: { token }
//     })
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
