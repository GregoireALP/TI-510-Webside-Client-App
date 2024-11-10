<template>
  <div>
    <NavbarModule />
    <h1 class="title">Clients</h1>
    <div class="container d-flex flex-row flex-wrap justify-content-evenly mt-5">
      <div class="card" v-for="c in clients" v-bind:key="c.client_id">

        <div class="top-container">

          <img :src="'https://ui-avatars.com/api/?name=' + c.client_lastname + '+' + c.client_firstname"   class="img-fluid profile-image" width="70">

          <div class="ml-3">
            <h5 class="name">{{ c.client_firstname + " " + c.client_lastname}} </h5>
            <p class="mail">{{ c.client_email }}</p>
          </div>
        </div>

        <div class="middle-container d-flex justify-content-evenly align-items-center mt-3 p-2">
          <div class="dollar-div px-3">

            <div class="round-div"><i class="bi bi-currency-dollar"></i></div>

          </div>
          <div class="d-flex flex-column text-right mr-2">
            <span class="current-balance">{{ c.client_id }}</span>
          </div>

        </div>

        <div class="options-list mt-4">
          <span class="option-list-item"><i class="bi bi-bank"></i> <a :href='"/#/account/" + c.client_id'>Manage my accounts</a></span>
        </div>
        <div class="options-list pt-2">
          <span class="option-list-item"><i class="bi bi-paperclip"></i> Consult my loans</span>
        </div>
        <div class="options-list pt-2">
          <span class="option-list-item"><i class="bi bi-person-fill-gear"></i><a :href='"/#/advisor/" + c.client_id'> Contact my advisor</a></span>
        </div>

      </div>
    </div>

    <FooterModule/>
  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import FooterModule from './FooterModule.vue'

export default {
  name: 'ClientModule',
  props: ['client_id'],
  components: {
    NavbarModule,
    FooterModule
  },
  data () {
    return {
      clients: []
    }
  },

  methods: {
    async getClients () {
      if (this.client_id === 'all') {
        await fetch('http://localhost:4000/api/clients/get/all')
          .then(res => res.json())
          .then(function (data) {
            this.clients = data
          }.bind(this))
      } else {
        await fetch('http://localhost:4000/api/clients/get/' + this.client_id)
          .then(res => res.json())
          .then(function (data) {
            this.clients = [data]
          }.bind(this))
      }
    }
  },

  watch: {
    client_id: function (pre, post) {
      this.getClients()
    }
  },

  created () {
    this.getClients()
  }
}
</script>

<style scoped>

.card {
  background-color: #191b1f;
  border: solid 1px gold;
  color: #cecece;
  width: 350px;
  border-radius: 33px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem !important;
  margin-bottom: 50px;
}

.top-container {
  display: flex;
  align-items: center;
}

.profile-image {
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid gold;
}

.name {
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: 8px;
}

.mail {
  font-size: 14px;
  position: relative;
  top: 2px;
}

.middle-container {
  background-color: #eee;
  border-radius: 12px;
  width: 75%;
}

.dollar-div {
  background-color: rgb(162, 142, 29);
  padding: 12px;
  border-radius: 10px;
}

.round-div {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #191b1f;
}

.dollar {
  font-size: 16px !important;
  color: gold !important;
  font-weight: bold !important;
}

.current-balance {
  font-size: 15px;
  font-weight: bold;
  color: #191b1f;
}

.amount {
  color: rgb(124, 107, 12);
  font-size: 16px;
  font-weight: bold;
}

.dollar-sign {
  font-size: 16px;
  font-weight: bold;
}

.option-list-item {
  font-size: 16px;
  font-weight: 700;
}

.option-list-item:hover {
  border-bottom: 1px solid #dee2e6 !important;
  cursor: pointer;
}
</style>
