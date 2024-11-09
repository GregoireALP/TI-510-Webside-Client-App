<template>

  <div>
    <NavbarModule />

    <main>
      <div class="d-flex justify-content-center">
        <div class="col-md-12 col-lg-10 col-xl-8">
          <div class="send-payement card">
            <div class="card-body p-md-5">
              <div>
                <h4>Send a payement</h4>
                <p class="pb-2">
                  You can send a payement to any of your beneficiaries using your bank  account.
                </p>
              </div>

              <div class="px-3 py-4 border border-warning border-2 rounded mt-4 d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img src="https://www.svgrepo.com/show/315045/send-money.svg" width="60">
                  <div class="d-flex flex-column ms-4">
                    <span class="h5 mb-1">Beneficiary</span>
                    <select>
                      <option disabled selected>Choose reciever</option>
                      <option v-for="option in options" :key="option.account_id" :value="option.account_id">{{ option.account_iban }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <input type="number" class="h4 mx-1 mb-0" style="text-align: right;" placeholder="Amount..."/>
                  <i class="bi bi-currency-euro"></i>
                </div>
              </div>

              <h4 class="mt-5">From which account</h4>

              <div class="mt-4 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <i class="bi bi-bank" style="font-size: 50px;"></i>
                  <select class="iban-selector">
                    <option disabled selected>Choose an account</option>
                    <option v-for="a in accounts" :key="a.account_id" :value="a.account_id">{{ a.account_iban }}</option>
                  </select>
                </div>
              </div>

              <div class="mt-3">
                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block btn-lg">
                  Proceed to payment <i class="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <FooterModule />
  </div>

</template>
<script>

import FooterModule from './FooterModule.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'SendPayementModule',
  props: ['id'],
  components: {
    NavbarModule,
    FooterModule
  },
  data () {
    return {
      options: [],
      accounts: []
    }
  },
  methods: {
    async getOptions () {
      await fetch('http://localhost:4000/api/accounts/list')
        .then(res => res.json())
        .then(function (data) {
          this.options = data
        }.bind(this))
    },
    async getAccountsInfos () {
      await fetch('http://localhost:4000/api/accounts/get/client/' + this.id)
        .then(res => res.json())
        .then(function (data) {
          this.accounts = data
        }.bind(this))
    }
  },
  watch: {
    id: function (pre, post) {
      this.getAccountsInfos()
      this.getOptions()
    }
  },

  created () {
    this.getAccountsInfos()
    this.getOptions()
  }

}

</script>

<style scoped>
.send-payement {
  border: solid 1px gold;
  border-radius: 25px;

  background-color: #191B1F;
  color: whitesmoke
}

.iban-selector {
  margin-left: 10px;
}

</style>
