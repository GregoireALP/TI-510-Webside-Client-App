<template>
  <div>
    <NavbarModule />

    <main>
      <div
        class='bank-account-container'
        v-for='account in this.accounts'
        v-bind:key='account.account_id'
      >
        <div class='bank-account-header'>
          <h2 class='account-title'>
            Account:
            <b>{{ account.account_label }}</b>
            <span v-if='account.account_balance > 0' class='badge text-bg-success'
              >{{ account.account_balance }}<i class='bi bi-currency-euro'></i
            ></span>
            <span v-else class='badge text-bg-danger'
              >{{ account.account_balance }}<i class='bi bi-currency-euro'></i
            ></span>
          </h2>
          <p class='iban'>{{ account.account_iban }}</p>
        </div>

        <div class='bank-account-body'>
          <h1 class='title'>Sended Payements History</h1>
          <PayementModule
            :account_id='account.account_id'
            :action="'sended'"
          />

          <br />

          <h1 class='title'>Received Payements History</h1>
          <PayementModule
            :account_id='account.account_id'
            :action="'received'"
          />
        </div>

        <div class='bank-account-footer'>
          <p class='account-creation-date'>
            <i class='bi bi-calendar-date'></i> Created on
            {{ new Date(account.account_creation_date).toDateString() }}
          </p>
          <p class='account-max-amount'>
            <i class='bi bi-sign-stop'></i> Max <b>{{ account.account_max_amount }} $</b>
          </p>
          <p class='account-interest'>
            <i class='bi bi-calculator'></i> Interest
            <b>{{ account.account_interest }} %</b>
          </p>
          <p class="account-id">
            <i data-v-423cf2c7="" class="bi bi-hash"></i> ID <b>{{ account.account_id }}</b>
          </p>
        </div>
      </div>
    </main>

    <FooterModule />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarModule from './NavbarModule.vue'
import FooterModule from './FooterModule.vue'
import PayementModule from './PayementModule.vue'

export default {
  name: 'AccountModule',
  props: ['client_id'],
  components: {
    NavbarModule,
    FooterModule,
    PayementModule
  },
  data () {
    return {
      accounts: []
    }
  },

  methods: {
    async getAccounts () {
      if (this.client_id === 'all') {
        await this.$http.get('http://localhost:4000/api/accounts/get/all', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4000/'
          }
        })
        .then(res => {
          this.accounts = res.data
        })
      } else {
        await this.$http.get(
          'http://localhost:4000/api/accounts/get/client/' + this.client_id,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4000/'
            }
          }
        )
        .then(res => {
          this.accounts = res.data
        })
      }
    }
  },

  watch: {
    client_id: function (pre, post) {
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
  margin-bottom: 100px;
}

.bank-account-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  color: whitesmoke;
  font-family: 'Space Grotesk', sans-serif;
}

.account-title {
  font-family: 'Space Grotesk', sans-serif;
  color: #cecece;
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
  padding: 25px;
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
