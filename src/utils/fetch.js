import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from './../router'


const server = axios.create({
  baseURL: 'http://api-admin.aigema.fun/api/',
  // baseURL: 'http://47.114.77.243:30981/',
  // http://api-admin.aigema.fun:30981/api/
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '222'
  },
  timeout: 20000,
  responseType: 'json',
  withCredentials: true // 允许携带cookie
})

// 请求拦截器
server.interceptors.request.use(config => {
  config.headers.Authorization = 'agmauth ' +sessionStorage.getItem('Authorization')
  return config
}, error => {
  return Promise.reject(error)
})

// 相应拦截
server.interceptors.response.use(response => {
  const res = response && response.data
  if (res.code == 200) {
    return res
  } else if (res.code == 401) {
    MessageBox.confirm('你已被登出，请重新登录', '确定登出', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      // 刷新页面，更新token
      router.push('/login')
    }).catch()
  } else {
    Message.error(res.message)
    return Promise.reject(res)
  }
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default server


