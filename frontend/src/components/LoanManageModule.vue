<template>
    <div>
        <NavbarModule/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Loan Management</h1>
                    <p>Manage your loans here</p>
                </div>
            </div>
        </div>
        <FooterModule/>
    </div>
</template>

<script>
import FooterModule from './FooterModule.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'LoanManageModule',
  components: {
    NavbarModule,
    FooterModule
  },
  props: ['client_id'],
  data () {
    return {
      loans: []
    }
  }
}
</script>
