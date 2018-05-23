import Mock from 'mockjs'
import baseData from './data/baseData'

Mock.setup({
  timeout: 300
})

Mock.mock(/\/base\/data/, baseData)
