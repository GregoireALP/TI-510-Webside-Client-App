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
                  You can send a payement to any of your beneficiaries using your bank
                  account.
                </p>
              </div>

              <div
                class="px-3 py-4 border border-warning border-2 rounded mt-4 d-flex justify-content-between"
              >
                <div class="d-flex flex-row align-items-center">
                  <img
                    src="https://www.svgrepo.com/show/315045/send-money.svg"
                    width="60"
                  />
                  <div class="d-flex flex-column ms-4">
                    <span class="h5 mb-1">Beneficiary</span>
                    <select id="accountReceiverId">
                      <option disabled selected>Choose reciever</option>
                      <option
                        v-for="option in options"
                        :key="option.account_id"
                        :value="option.account_id"
                      >
                        {{ option.account_iban }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <input
                    type="number"
                    id="payementAmount"
                    class="h4 mx-1 mb-0"
                    style="text-align: right; color: black"
                    placeholder="Amount..."
                  />
                  <i class="bi bi-currency-euro"></i>
                </div>
              </div>

              <h4 class="mt-5">Write something about this payement</h4>
              <div class="mt-4">
                <textarea
                  class="form-control"
                  id="payementLabel"
                  rows="3"
                  placeholder="Write a message..."
                ></textarea>
              </div>

              <h4 class="mt-5">From which account</h4>

              <div class="mt-4 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                  <i class="bi bi-bank" style="font-size: 50px"></i>
                  <select id="accountSenderId" class="iban-selector">
                    <option disabled selected>Choose an account</option>
                    <option
                      v-for="a in accounts"
                      :key="a.account_id"
                      :value="a.account_id"
                    >
                      {{ a.account_iban }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mt-3">
                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-primary btn-block btn-lg"
                  @click="proceedToPayment"
                >
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
/* eslint-disable */
import FooterModule from "./FooterModule.vue";
import NavbarModule from "./NavbarModule.vue";
import db from "../db.utils.js";

export default {
  name: "SendPayementModule",
  props: ["client_id"],
  components: {
    NavbarModule,
    FooterModule,
  },
  data() {
    return {
      options: [],
      accounts: [],
    };
  },
  methods: {
    async getOptions() {
      let res = await this.$http.get("http://localhost:4000/api/accounts/get/all", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000/",
        },
      });
      this.options = res.data;
    },
    async getAccountsInfos() {
      let res = await this.$http.get(
        "http://localhost:4000/api/accounts/get/client/" + this.client_id,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000/",
          },
        }
      );
      this.accounts = res.data;
    },
    async proceedToPayment() {
      let amount = document.getElementById("payementAmount").value;
      let accountSenderId = document.getElementById("accountSenderId").value;
      let accountReceiverId = document.getElementById("accountReceiverId").value;
      let payementLabel = document.getElementById("payementLabel").value;

      let data = {
        amount: amount,
        account_sender_id: accountSenderId,
        account_receiver_id: accountReceiverId,
        payement_label: payementLabel,
      };

      await db.post("http://localhost:4000/api/payements/send", data).then((res) => {
        switch (res) {
          case "Something went wrong":
            alert("Something went wrong");
            break;
          case "Payement sent successfully":
            alert("Payement sent successfully");
            this.$router.push("/#/account/all");
            break;
          case "Not enough money":
            alert("Not enough money");
            break;
        }
      });
    },
  },
  watch: {
    client_id: function (pre, post) {
      this.getAccountsInfos();
      this.getOptions();
    },
  },
  created() {
    this.getAccountsInfos();
    this.getOptions();
  },
};
</script>

<style scoped>
.send-payement {
  border: solid 1px gold;
  border-radius: 25px;

  background-color: #191b1f;
  color: whitesmoke;
}

.iban-selector {
  margin-left: 10px;
}
</style>
