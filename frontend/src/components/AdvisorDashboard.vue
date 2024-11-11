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
                <table>
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
                        <td><a class="btn btn-success" :href="'/#/account/' + c.client_id">Connect</a></td>
                    </tr>
                    </tbody>
                </table>

                <h1>Loan requests</h1>
                <table>
                  <thead>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Loan ID</th>
                    <th>Loan Amount</th>
                    <th>Loan Label</th>
                    <th>Actions</th>
                  </thead>
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
      clients: [],
      loans: []
    }
  },
  methods: {
    async getClients () {
      await fetch('http://localhost:4000/api/clients/get/advisor/' + this.advisor_id)
        .then(res => res.json())
        .then(function (data) {
          this.clients = data
        }.bind(this))
    },
    async getLoans () {
      await fetch('http://localhost:4000/api/loans/get/advisor/' + this.advisor_id)
        .then(res => res.json())
        .then(function (data) {
          this.loans = data
        }.bind(this))
    }
  },
  watch: {
    advisor_id: function (pre, post) {
      this.getClients()
      this.getLoans()
    }
  },
  created () {
    this.getClients()
    this.getLoans()
  }
}
</script>

<style>
table {
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

table tr:nth-child(even) {
  background-color: #191B1F;
}

table tr:nth-child(odd) {
  background-color: #22252b;
}

td {
  padding: 10px 0 10px 0;
}
</style>
