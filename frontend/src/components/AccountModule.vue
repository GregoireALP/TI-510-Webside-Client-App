<template>
  <div>
    <NavbarModule />

    <main>

      <div class="bank-account-container">

        <div class="bank-account-header">

          <h2 class="account-title">Compte courrant</h2>
          <p class="iban"></p>

        </div>

        <div class="bank-account-body">

          <PayementModule :accountId="this.id" />

        </div>

        <div class="bank-account-footer">

        </div>

      </div>

    </main>

    <FooterComponent />

  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import accountsJson from '../data/accounts.json'
import FooterComponent from './FooterComponent.vue'
import PayementModule from './PayementModule.vue'

export default {
  name: 'AccountModule',
  props: ['action', 'id'],
  components: {
    NavbarModule,
    FooterComponent,
    PayementModule
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
.bank-account-container {
  width: 75%;
  margin: auto;
  border-radius: 50px;

}

.account-title {
  font-family: "Space Grotesk", sans-serif;
  color: #292c33;

}

.bank-account-header {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgb(210,179,36);
  background: linear-gradient(84deg, rgba(210,179,36,1) 0%, rgba(255,237,26,1) 34%, rgba(25,27,31,0.70640756302521) 100%);

}

.bank-account-body {
  padding: 10px;
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
