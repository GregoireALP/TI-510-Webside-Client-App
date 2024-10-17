<template>
  <div>
    <NavbarModule />

    <h1 class="title">Your accounts</h1>

    <div class="d-flex justify-content-around flex-wrap" id="card-carousel">
      <div class="card mb-2 flex-grow-1 bank-card" v-for="a of accounts" v-bind:key="a.account_id">

        <div class="card-header">
          <i class="bi bi-bank"></i> {{ a.account_iban }} <br>
        </div>

        <div class="card-body">
          <ul>
            <li><i class="bi bi-file-person"></i> <b>Account ID:</b> {{ a.account_id }}</li>
            <li><i class="bi bi-currency-exchange"></i> <b>Balance:</b> {{ a.account_balance }}$</li>
            <li><i class="bi bi-textarea-t"></i> <b>Label:</b> {{ a.account_label }}</li>
            <li><i class="bi bi-speedometer2"></i> <b>Interest:</b> {{ a.account_interest }}%</li>
            <li><i class="bi bi-sign-stop"></i> <b>Max-amount:</b> {{ a.account_max_amount }}$</li>
          </ul>

          <p class="text-center"><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Payements history</a></p>

        </div>

        <div class="card-footer">
          <span class="card-text"><i class="bi bi-calendar-date"></i> Creation date: {{ a.account_creation_date }}</span>
        </div>

      </div>
    </div>

    <FooterComponent/>

  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import accountsJson from '../data/accounts.json'
import FooterComponent from './FooterComponent.vue'

export default {
  name: 'AccountModule',
  props: ['action', 'id'],
  components: {
    NavbarModule,
    FooterComponent
  },
  data () {
    return {
      accounts: []
    }
  },

  methods: {

    getAccounts () {
      if (this.id === 'all') {
        this.accounts = accountsJson
      } else {
        const account = accountsJson.find(account => account.account_id.toString() === this.id)
        this.accounts = account ? [account] : []
      }
    }
  },

  watch: {
    id: function (pre, post) {
      this.getAccounts()
    }
  },

  created () {
    this.getAccounts()
  }
}
</script>

<style scoped>
p {
  font-family: sans-serif;
}

.bank-card {
  min-width: 18rem;
  max-width: 18rem;
  height: 100%;
  background-color: #383c3f;
  color: whitesmoke;
}

.card-header {
  border-bottom: 1px solid gold;
}

.card-footer {
  border-top: 1px solid gold;
}

.bank-card ul {
  list-style: none;
}

a{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
