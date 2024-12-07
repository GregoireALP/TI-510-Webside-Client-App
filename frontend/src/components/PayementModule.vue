<template>
  <section>
    <section>
      <table id="payement-table">
        <thead>
          <tr class="text-uppercase text-warning">
            <th scope="col">#</th>
            <th scope="col">Sender Account ID</th>
            <th scope="col">Reciever Account ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Currency</th>
            <th scope="col">Date</th>
            <th scope="col">Label</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in payements" v-bind:key="p.payement_id">
            <td>{{ p.payement_id }}</td>
            <td>{{ p.payement_account_sender_id }}</td>
            <td>{{ p.payement_account_reciever_id }}</td>
            <td>{{ p.payement_amount }}</td>
            <td>{{ p.payement_currency }}</td>
            <td>{{ new Date(p.payement_date).toDateString() }}</td>
            <td>{{ p.payement_label }}</td>
            <td><a :href="'/#/payement/details/' + p.payement_id" class="btn btn-link">Details</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>

</template>

<script>
import FooterModule from './FooterModule.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'PayementModule',
  components: {
    NavbarModule,
    FooterModule
  },
  props: {
    account_id: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      payements: []
    }
  },
  methods: {
    async getPayementsSended () {
      let res = await this.$http.get('http://localhost:4000/api/payements/get/sender/' + this.account_id, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000/',
        }
      });
      this.payements = await res.data;
    },
    async getPayementsRecieved () {
      let res = await this.$http.get('http://localhost:4000/api/payements/get/receiver/' + this.account_id, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000/',
        }
      });
      this.payements = await res.data;
    }
  },
  created () {
    if (this.action === 'sended') {
      this.getPayementsSended()
    } else if (this.action === 'received') {
      this.getPayementsRecieved()
    }
  },
  watch: {
    account_id: function (pre, post) {
      if (this.action === 'sended') {
        this.getPayementsSended()
      } else if (this.action === 'received') {
        this.getPayementsRecieved()
      }
    }
  }
}
</script>

<style scoped>
#payement-table {
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

#payement-table tr:nth-child(even) {
  background-color: #191B1F;
}

#payement-table tr:nth-child(odd) {
  background-color: #22252b;
}

td {
  padding: 10px 0 10px 0;
}

</style>
