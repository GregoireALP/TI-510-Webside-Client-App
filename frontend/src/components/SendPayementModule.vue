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
                <p class="text-muted pb-2">
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
                      <option v-for="option in options" :key="option.id" :value="option.id">{{ option.name + " " + option.iban }}</option>
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
                  <div class="d-flex flex-column ms-3">
                    <span class="h5 mb-1">Current account</span>
                    <span class="small text-muted">FR76 XXXX XXXX XXXX XXXX XXXX 2570</span>
                  </div>
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

    <FooterComponent />
  </div>

</template>
<script>

import FooterComponent from './FooterComponent.vue'
import NavbarModule from './NavbarModule.vue'

import accountJson from '../data/accounts.json'
import clientJson from '../data/clients.json'

export default {
  name: 'SendPayementModule',
  components: {
    NavbarModule,
    FooterComponent
  },
  data() {
    return {
      options: []
    }
  },
  methods: {
    getOptions() {
      const addedClientIds = new Set()
      for (let i = 0; i < accountJson.length; i++) {
        accountJson.find(account => {
          for (let j = 0; j < clientJson.length; j++) {
            if (account.account_client_id === clientJson[j].client_id && !addedClientIds.has(clientJson[j].client_id)) {
              this.options.push({
                id: account.account_id,
                iban: account.account_iban,
                name: clientJson[j].client_firstname + ' ' + clientJson[j].client_lastname
              })
              addedClientIds.add(clientJson[j].client_id)
            }
          }
        })
      }
    }
  },
  created() {
    this.getOptions()
  }

}

</script>

<style scoped>
.send-payement {
  border: solid 1px gold;
  border-radius: 25px;

  background-color: #191B1F;
  color: whitesmoke;
}
</style>
