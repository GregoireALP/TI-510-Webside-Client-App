import Vue from 'vue'
import Router from 'vue-router'
import AccountModule from '@/components/AccountModule'
import ClientModule from '../components/ClientModule'
import HomeModule from '../components/HomeModule.vue'
import LoginModule from '../components/LoginModule.vue'
import SendPayementModule from '../components/SendPayementModule.vue'
import AboutUsModule from '../components/AboutUs.vue'
import LoanModule from '../components/LoanModule.vue'
import AdvisorModule from '../components/AdvisorModule.vue'

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
      component: AdvisorModule,
      props: true
    },
    {
      path: '/loan/:action/:id',
      name: 'Loan',
      component: LoanModule,
      props: true
    },
    {
      path: '/send-payement/:id',
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
