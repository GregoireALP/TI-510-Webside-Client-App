import Vue from 'vue'
import Router from 'vue-router'
import AccountModule from '@/components/AccountModule'
import ClientModule from '../components/ClientModule'
import HomeModule from '../components/HomeModule.vue'
import LoginModule from '../components/LoginModule.vue'
import SendPayementModule from '../components/SendPayementModule.vue'
import AboutUsModule from '../components/AboutUs.vue'
import AdvisorModule from '../components/AdvisorModule.vue'
import LoanApply from '../components/LoanApplyModule.vue'
import LoanManageModule from '../components/LoanManageModule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeModule,
      props: false
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginModule,
      props: false
    },
    {
      path: '/account/:client_id',
      name: 'Account',
      component: AccountModule,
      props: true
    },
    {
      path: '/client/:client_id',
      name: 'Client',
      component: ClientModule,
      props: true
    },
    {
      path: '/advisor/:client_id',
      name: 'Advisor',
      component: AdvisorModule,
      props: true
    },
    {
      path: '/loan/apply',
      name: 'LoanApply',
      component: LoanApply,
      props: false
    },
    {
      path: '/loan/manage/:client_id',
      name: 'LoanManage',
      components: LoanManageModule,
      props: true
    },
    {
      path: '/send-payement/:client_id',
      name: 'SendPayement',
      component: SendPayementModule,
      props: true
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUsModule,
      props: false
    }
  ]
})
