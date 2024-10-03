import Vue from 'vue'
import Router from 'vue-router'
import AccountModule from '@/components/AccountModule'
import PayementModule from '../components/PayementModule'
import ClientModule from '../components/ClientModule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account',
      redirect: '/account/list/all'
    },
    {
      path: '/client',
      redirect: '/client/list/all'
    },
    {
      path: '/laon',
      redirect: '/loan/list/all'
    },
    {
      path: '/advisor',
      redirect: '/advisor/list/all'
    },
    {
      path: '/payement',
      redirect: '/payement/list/all'
    },
    {
      path: '/account/:action/:id',
      name: 'Account',
      component: AccountModule,
      props: true
    },
    {
      path: '/client/:action/:id',
      name: 'Client',
      component: ClientModule,
      props: true
    },
    {
      path: '/advisor/:action/:id',
      name: 'Advisor',
      props: true
    },
    {
      path: '/loan/:action/:id',
      name: 'Loan',
      props: true
    }, {
      path: '/payement/:action/:id',
      name: 'Payement',
      component: PayementModule,
      props: true
    }
  ]
})
