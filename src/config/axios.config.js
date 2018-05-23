
import axios from 'axios'
import ip from '@/config/ip.config'
import Qs from 'qs'

const config = process.env.NODE_ENV === 'production' ? 'production' : 'dev'
axios.defaults = {
  url: '/login',
  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: ip[config]
}

export default axios
