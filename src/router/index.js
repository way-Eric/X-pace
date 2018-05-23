import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Center from '@/view/layout/home'
import Base from '@/view/layout/newData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index,
      redirect: '/home/center',
      children: [
        {
          path: 'center',
          name: 'Center',
          component: Center
        },
        {
          path: 'base',
          name: 'Base',
          component: Base
        }
      ]
    }
  ]
})
