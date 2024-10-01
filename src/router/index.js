import Vue from 'vue'
import Router from 'vue-router'
import AccountModule from '@/components/AccountModule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account',
      redirect: '/account/list/all'
    },
    {
      path: '/account/:action/:id',
      name: 'Account',
      component: AccountModule,
      props: true
    }
  ]
})
