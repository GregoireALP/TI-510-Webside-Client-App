<template>
  <div class="hello">
    <h2>Bienvenue sur votre compte en banque</h2>

    <div v-if="action === 'all'">
        Toutes les actions
    </div>

    <p>{{ action }}</p>
  </div>
</template>

<script>
export default {
  name: 'AccountModule',
  props: ['action', 'id']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: sans-serif;
}
</style>
