<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/****************************************GLOBAL CSS*************************************/
body {
  padding: 0;
  margin: 0;

  background-color: #191b1f;
}

h1 {
  text-align: center;
  font-family: "Space Grotesk", sans-serif !important;
  color: #cecece;
  margin: 10px 0 10px 0;
}
</style>
