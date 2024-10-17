<template>
  <div>
    <NavbarModule />
    <main></main>
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'HomeModule',
  components: {
    NavbarModule,
    FooterComponent
  }
}
</script>

<style scoped>

</style>
