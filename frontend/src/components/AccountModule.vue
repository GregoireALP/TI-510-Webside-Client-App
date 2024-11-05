<template>
  <div>
    <NavbarModule />

    <main>

      <div class="bank-account-container">

        <div class="bank-account-header">
          <h2 class="account-title">Account: <b>{{ account.account_label }}</b> <span class="badge text-bg-success">{{ account.account_balance }}<i class="bi bi-currency-euro"></i></span></h2>
          <p class="iban">{{ account.account_iban }}</p>

        </div>

        <div class="bank-account-body">

          <PayementModule :accountId="this.id" />

        </div>

        <div class="bank-account-footer">

          <p class="account-creation-date"><i class="bi bi-calendar-date"></i> Created on {{ account.account_creation_date }}</p>
          <p class="account-max-amount"><i class="bi bi-sign-stop"></i>  Max <b>{{ account.account_max_amount }} $</b></p>
          <p class="account-interest"><i class="bi bi-calculator"></i> Interest <b>{{ account.account_interest }} %</b></p>

        </div>

      </div>

    </main>

    <FooterModule />

  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import accountsJson from '../data/accounts.json'
import FooterModule from './FooterModule.vue'
import PayementModule from './PayementModule.vue'

export default {
  name: 'AccountModule',
  props: ['action', 'id'],
  components: {
    NavbarModule,
    FooterModule,
    PayementModule
  },
  data () {
    return {
      account: null
    }
  },

  methods: {

    getAccounts () {
      if (this.id === 'all') {
        this.accounts = accountsJson
      } else {
        const account = accountsJson.find(account => account.account_id.toString() === this.id)
        this.account = account
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
.bank-account-container {
  width: 75%;
  margin: auto;
  border-radius: 50px;

}

.bank-account-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  color: whitesmoke;
  font-family: "Space Grotesk", sans-serif;
}

.account-title {
  font-family: "Space Grotesk", sans-serif;
  color: #CECECE;
}

.iban {
  color: grey;
}

.bank-account-header {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-left: 50px;
  padding-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;

  border: solid 1px gold;
}

.bank-account-body {
  padding: 20px;
  text-align: center;
  border: solid 1px gold;
}

.bank-account-footer {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border: solid 1px gold;
  padding: 10px;
  text-align: center;
}
</style>
