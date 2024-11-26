<template>

  <div>
    <NavbarModule />

    <main>
      <h1 class="title">Send a payement</h1>
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
                    <select id="accountReceiverId">
                      <option disabled selected>Choose reciever</option>
                      <option v-for="option in options" :key="option.account_id" :value="option.account_id">{{ option.account_iban }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <input type="number" id="payementAmount" class="h4 mx-1 mb-0" style="text-align: right; color: black;" placeholder="Amount..."/>
                  <i class="bi bi-currency-euro"></i>
                </div>
              </div>

              <h4 class="mt-5">Write something about this payement</h4>
              <div class="mt-4">
                <textarea class="form-control" id="payementLabel" rows="3" placeholder="Write a message..."></textarea>
              </div>

              <h4 class="mt-5">From which account</h4>

              <div class="mt-4 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <i class="bi bi-bank" style="font-size: 50px;"></i>
                  <select id="accountSenderId" class="iban-selector">
                    <option disabled selected>Choose an account</option>
                    <option v-for="a in accounts" :key="a.account_id" :value="a.account_id">{{ a.account_iban }}</option>
                  </select>
                </div>
              </div>

              <div class="mt-3">
                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block btn-lg" @click="proceedToPayment">
                  Proceed to payment <i class="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-live="polite" aria-atomic="true" class="position-relative">
        <div class="toast-container position-fixed top-0 end-0 p-3">
              <div class="toast" id="success_toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="../assets/logo.png" class="rounded me-2" alt="..." width="50px">
                  <strong class="me-auto">Baba Bank Payement</strong>
                  <small class="text-body-secondary">1 second ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  Your payement request has been sent successfully.
                </div>
            </div>
            <div class="toast" id="error_toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="../assets/logo.png" class="rounded me-2" alt="..." width="50px">
                  <strong class="me-auto">!!!! Baba Bank Payement !!!!</strong>
                  <small class="text-body-error">1 second ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  ERROR WHILE PROCESSING YOUR PAYEMENT REQUEST.
                  CHECK YOUR ACCOUNT BALANCE AND TRY AGAIN.
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
import db from '../db.utils.js'

export default {
  name: 'SendPayementModule',
  props: ['client_id'],
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
      await fetch('http://localhost:4000/api/accounts/get/all')
        .then(res => res.json())
        .then(function (data) {
          this.options = data
        }.bind(this))
    },
    async getAccountsInfos () {
      await fetch('http://localhost:4000/api/accounts/get/client/' + this.client_id)
        .then(res => res.json())
        .then(function (data) {
          this.accounts = data
        }.bind(this))
    },
    async proceedToPayment () {
      let amount = document.getElementById('payementAmount').value
      let accountSenderId = document.getElementById('accountSenderId').value
      let accountReceiverId = document.getElementById('accountReceiverId').value
      let payementLabel = document.getElementById('payementLabel').value

      let data = {
        amount: amount,
        account_sender_id: accountSenderId,
        account_receiver_id: accountReceiverId,
        payement_label: payementLabel
      }

      await db.post('http://localhost:4000/api/payements/send', data)
        .then(res => {
          const successToast = document.getElementById('success_toast')
          const bootstrapSuccessToast = new bootstrap.Toast(successToast)
          const errorToast = document.getElementById('error_toast')
          const bootstrapErrorToast = new bootstrap.Toast(errorToast)

          switch (res) {
            case 'Something went wrong':
              bootstrapErrorToast.show()
              break
            case 'Payement sent successfully':
              bootstrapSuccessToast.show()
              // wait for 1 second before redirecting
              setTimeout(() => {
                this.$router.push('/#/account/all')
              }, 2000)
              break
            case 'Not enough money':
              bootstrapErrorToast.show()
              break
          }
        })
    }
  },
  watch: {
    client_id: function (pre, post) {
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
