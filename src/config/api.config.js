import IP from './ip.config'
const key = process.env.NODE_ENV === 'production' ? 'production' : 'dev'
const prefix = IP[key]
const Xprefix = prefix + '/x-pace/'

const common = {
  centerData: prefix + '/center/data',
  baseData: prefix + '/base/data'
}
const api = {
  common
}

export default api
