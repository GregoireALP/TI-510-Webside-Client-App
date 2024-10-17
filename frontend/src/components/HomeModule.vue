<template>
  <div>
    <NavbarModule />

    <main>

      <div class="container d-flex justify-content-center mt-5">

        <div class="card">

          <div class="top-container">

            <img src="https://ui-avatars.com/api/?name=Nicolas+Fl" class="img-fluid profile-image" width="70">

            <div class="ml-3">
              <h5 class="name">Clarke Jeffery</h5>
              <p class="mail">clark@zmail.com</p>
            </div>
          </div>

          <div class="middle-container d-flex justify-content-evenly align-items-center mt-3 p-2">
            <div class="dollar-div px-3">

              <div class="round-div"><i class="bi bi-currency-dollar"></i></div>

            </div>
            <div class="d-flex flex-column text-right mr-2">
              <span class="current-balance">Total Balance</span>
              <span class="amount"><span class="dollar-sign">$</span>1476</span>
            </div>

          </div>

          <div class="options-list mt-4">
            <span class="option-list-item"><i class="bi bi-bank"></i> Manage my accounts</span>
          </div>
          <div class="options-list pt-2">
            <span class="option-list-item"><i class="bi bi-paperclip"></i> Consult my loans</span>
          </div>
          <div class="options-list pt-2">
            <span class="option-list-item"><i class="bi bi-person-fill-gear"></i> Contact my advisor</span>
          </div>

        </div>

      </div>
    </main>
  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'HomeModule',
  components: {
    NavbarModule
  }
}
</script>

<style scoped>

</style>
