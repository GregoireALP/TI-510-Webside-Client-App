<template>

  <div>
    <NavbarModule />

    <main>
      <h1>Send Payement</h1>
    </main>

    <FooterComponent />
  </div>

</template>
<script>

import FooterComponent from './FooterComponent.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'SendPayementModule',
  props: ['id'],
  components: {
    NavbarModule,
    FooterComponent
  }
}

</script>
