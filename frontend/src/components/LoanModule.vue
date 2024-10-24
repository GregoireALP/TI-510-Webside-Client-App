<template>

  <div>
    <NavbarModule />

    <main>
      <h1>Loan Module</h1>
      <h2>Restez branché</h2>
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

<style>

h2 {
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  color: #cecece;
  margin: 10px 0 10px 0;
}

</style>
