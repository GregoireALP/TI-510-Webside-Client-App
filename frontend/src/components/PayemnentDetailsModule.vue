<template>
  <div>
    <NavbarModule />
    <main>
      <div class="payement-detail container">
        <div class="row">
          <div class="col-12">
            <h1>Payment details</h1>
            <div v-if="payement">
              <p>
                <i class="bi bi-currency-exchange"></i> <b>Amount:</b>
                {{ payement.payement_amount }}
              </p>
              <p>
                <i class="bi bi-send-check"></i> <b>Sender:</b>
                {{ payement.payement_account_sender_id }}
              </p>
              <p>
                <i class="bi bi-file-earmark-person"> </i><b>Receiver:</b>
                {{ payement.payement_account_reciever_id }}
              </p>
              <p>
                <i class="bi bi-card-text"></i> <b>Label:</b>
                {{ payement.payement_label }}
              </p>
            </div>
            <hr class="golden-divider mx-auto" />
            <a href="/#/account/all" class="btn btn-warning">Back to your account</a>
          </div>
        </div>
      </div>
    </main>
    <FooterModule />
  </div>
</template>
<script>
import FooterModule from "./FooterModule.vue";
import NavbarModule from "./NavbarModule.vue";

export default {
  name: "PaymentDetailsModule",
  props: ["payement_id"],
  data() {
    return {
      payement: null,
    };
  },
  components: {
    NavbarModule,
    FooterModule,
  },
  methods: {
    async getPaymentDetails() {
      await this.$http
        .get("http://localhost:4000/api/payements/get/" + this.payement_id, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000/",
          },
        })
        .then((res) => {
          this.payement = res.data[0];
        });
    },
  },
  created() {
    this.getPaymentDetails();
  },
  watch: {
    payement_id: function () {
      this.getPaymentDetails();
    },
  },
};
</script>
<style scoped>
.payement-detail {
  padding: 2rem;
  border: solid 1px gold;
  border-radius: 25px;

  text-align: center;

  width: 25%;

  color: whitesmoke;
}

.golden-divider {
  border: none !important;
  height: 4px !important;
  width: 100% !important;
  max-width: 100% !important;
  background: linear-gradient(
    90deg,
    rgba(210, 179, 36, 1) 0%,
    rgba(255, 237, 26, 1) 50%,
    rgba(214, 185, 13, 1) 100%
  ) !important;
  border-radius: 10px !important;
}
</style>
