<template>
  <div class="footer">
    <a href="/#/about-us">About Us</a>

    <a href="https://github.com/GregoireALP/TI-510-Webside-Client-App">Github Repo</a>

    <a href="/#/login">Login</a>
  </div>
</template>

<script>
export default {
  name: "FooterModule",
};
</script>

<style scoped>
.footer {
  margin-top: 50px;

  border-top: solid 1px gold;
  height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: rgb(185, 185, 185);
}

.footer a {
  text-decoration: none;
  color: rgb(185, 185, 185);
  font-family: "Space Grotesk", sans-serif !important;
}

.footer a:hover {
  color: whitesmoke;
  text-decoration: underline;
}
</style>
