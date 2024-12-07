<template>
  <div>
    <NavbarModule />
    <main>
      <section>
        <h1 class="text-center text-warning">My Loans</h1>
        <section>
          <table id="loan-table">
            <thead>
              <tr class="text-uppercase text-warning">
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Label</th>
                <th scope="col">To Refund</th>
                <th scope="col">Interest</th>
                <th scope="col">Start Date</th>
                <th scope="col">Expected End Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="l in loans" v-bind:key="l.loan_id">
                <td>{{ l.loan_id }}</td>
                <td>{{ l.loan_amount }} $</td>
                <td>{{ l.loan_label }}</td>
                <td>{{ l.loan_to_refund }} $</td>
                <td>{{ l.loan_interest }} %</td>
                <td>{{ new Date(l.loan_start_date).toDateString() }}</td>
                <td>{{ new Date(l.loan_end_date).toDateString() }}</td>
                <td v-if="l.loan_status === 0" class="loan-status-pending">Pending...</td>
                <td v-if="l.loan_status === 1" class="loan-status-accepted">Accepted</td>
                <td v-if="l.loan_status === 2" class="loan-status-declined">Declined</td>
                <td v-if="l.loan_status === 3" class="loan-status-finished">Finished</td>
                <td v-if="l.loan_status === 1">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Refund
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <br />
      <hr class="golden-divider mx-auto mb-5 mb-xl-9" />

      <h1 class="text-center text-warning">Apply for a loan</h1>

      <p style="color: whitesmoke; font-size: 15px; text-align: center">
        You can apply for a loan by clicking the button below. If you need more
        information, please contact us.
      </p>

      <div class="d-flex justify-content-center">
        <div class="row w-75 p-3">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Contact your advisor</h5>
                <p class="card-text">Please contact your advisor to apply for a loan</p>
                <a :href="'/#/advisor/' + this.client_id" class="btn btn-primary"
                  >Contact my advisor</a
                >
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Check your account</h5>
                <p class="card-text">
                  Before asking for a loan, please check that you can afford it
                </p>
                <a :href="'/#/account/' + this.client_id" class="btn btn-primary"
                  >Check my accounts</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: black">
                Refund loan
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="">Loan to refund</label><br />
                  <select id="loanToRefund">
                    <option default disabled>Chose a loan</option>
                    <option v-for="l in loans" :key="l.loan_id" :value="l.loan_id">
                      {{ l.loan_label }}
                    </option></select
                  ><br />
                  <label for="recipient-name" class="col-form-label"
                    >Money to refund:</label
                  >
                  <input type="number" class="form-control" id="moneyToRefund" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="refundLoan">
                Refund
              </button>
            </div>
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
import db from "../db.utils";

export default {
  name: "LoanManageModule",
  components: {
    NavbarModule,
    FooterModule,
  },
  props: ["client_id"],
  data() {
    return {
      loans: [],
    };
  },
  methods: {
    async getClientLoans() {
      await this.$http
        .get("http://localhost:4000/api/loans/get/client/" + this.client_id, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000/",
          },
        })
        .then((response) => {
          this.loans = response.data;
        });
    },
    async refundLoan() {
      let loanId = document.getElementById("loanToRefund").value;
      let amount = document.getElementById("moneyToRefund").value;
      let data = {
        loan_id: loanId,
        amount: amount,
      };
      await this.$http
        .post("http://localhost:4000/api/loans/refund", data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000/",
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
  created() {
    this.getClientLoans();
  },
  watch: {
    client_id: function (pre, post) {
      this.getClientLoans();
    },
  },
};
</script>

<style scoped>
#loan-table {
  width: 75%;
  margin: auto;

  text-align: center;

  border: solid 1px gold;

  color: whitesmoke;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  /* Adjust the value as needed */
  overflow: hidden;
  /* Ensures the border-radius is applied correctly */
}

thead > tr {
  background-color: #191b1f !important;
}

#loan-table tr:nth-child(even) {
  background-color: #191b1f;
}

#loan-table tr:nth-child(odd) {
  background-color: #22252b;
}

td {
  padding: 10px 0 10px 0;
}

.golden-divider {
  border: none !important;
  height: 4px !important;
  width: 50% !important;
  max-width: 100% !important;
  background: linear-gradient(
    90deg,
    rgba(210, 179, 36, 1) 0%,
    rgba(255, 237, 26, 1) 50%,
    rgba(214, 185, 13, 1) 100%
  ) !important;
  border-radius: 10px !important;
}

.loan-status-pending {
  color: gold;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}

.loan-status-accepted {
  color: #65ff65;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}

.loan-status-declined {
  color: #ff6868;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}

.loan-status-finished {
  color: #337eff;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}
</style>
