<template>

  <div>
    <NavbarModule />

    <main>
      <h1>Loan Module</h1>
    </main>

    <FooterComponent />
  </div>

</template>

<script>

import FooterComponent from './FooterComponent.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'LoanModule',
  props: ['id', 'action'],
  components: {
    NavbarModule,
    FooterComponent
  }
}

</script>
