<template>
    <div>
        <NavbarModule />
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Advisor Dashboard</h1>
                        <p style="color: whitesmoke; text-align: center;">Welcome to the advisor dashboard. Here you can view all your clients and their accounts.</p>
                    </div>
                </div>
                <h1 class="title">Your clients</h1>
                <table id="client-table">
                    <thead>
                    <tr class="text-uppercase text-warning">
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="c in clients" v-bind:key="c.client_id">
                        <td>{{ c.client_id }}</td>
                        <td>{{ c.client_firstname }}</td>
                        <td>{{ c.client_lastname }}</td>
                        <td>{{ c.client_email }}</td>
                        <td>{{ c.client_phone }}</td>
                        <td><a class="btn btn-success" :href="'/#/account/' + c.client_id">Connect</a><button type="button" class="btn btn-warning">Loans</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <FooterModule />
    </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import FooterModule from './FooterModule.vue'

export default {
  name: 'AdvisorDashboard',
  props: ['advisor_id'],
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
      await fetch('http://localhost:4000/api/clients/get/advisor/' + this.advisor_id)
        .then(res => res.json())
        .then(function (data) {
          this.clients = data
        }.bind(this))
    }
  },
  watch: {
    advisor_id: function (pre, post) {
      this.getClients()
    }
  },
  created () {
    this.getClients()
  }
}
</script>

<style>
#client-table {
  width: 75%;
  margin: auto;

  text-align: center;

  border: solid 1px gold;

  color: whitesmoke;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px; /* Adjust the value as needed */
  overflow: hidden; /* Ensures the border-radius is applied correctly */
}

thead > tr {
  background-color: #191B1F !important;
}

#client-table tr:nth-child(even) {
  background-color: #191B1F;
}

#client-table tr:nth-child(odd) {
  background-color: #22252b;
}

td {
  padding: 10px 0 10px 0;
}
</style>