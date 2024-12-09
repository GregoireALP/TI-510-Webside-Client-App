<template>
  <div>
    <NavbarModule />

    <main>
      <h1>Apply for a loan</h1>
      <section class="form-container">
        <form class="form-section">
          <div class="form-row">
            <div class="container mt-4">
              <label id="label_type" class="form-label">Type</label>
              <select class="form-control" id="select_label" required>
                <option disabled selected>Choose a Loan Type</option>
                <option value="STUDENT" required>Student Loan</option>
                <option value="CONSUMPTION" required>Consumption Loan</option>
                <option value="HOUSE" required>House Loan</option>
                <option value="OTHER" required>Other</option>
              </select>
            </div>
            <div class="container mt-4">
              <label id="amount_label" class="form-label">Amount</label>
              <div class="input-group">
                <input
                  type="number"
                  id="amount_input"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  min="0.01"
                  placeholder="0.00"
                  required
                  oninvalid="this.setCustomValidity('Enter an amount')"
                  oninput="this.setCustomValidity('')"
                />
                <div class="input-group-append">
                  <span class="input-group-text">€</span>
                </div>
              </div>
            </div>
            <div class="container mt-4">
              <label id="interest" class="form-label">Interest</label>
              <div class="input-group">
                <input
                  type="number"
                  id="interest_input"
                  class="form-control"
                  aria-label="Interest"
                  min="0.01"
                  placeholder="0.00"
                  required
                  oninvalid="this.setCustomValidity('Enter an amount')"
                  oninput="this.setCustomValidity('')"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="container mt-4">
              <label id="message_label" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message_input"
                rows="7"
                placeholder="Enter your message ..."
              ></textarea>
            </div>
            <div class="container mt-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                  oninvalid="this.setCustomValidity('Click on the button')"
                  oninput="this.setCustomValidity('')"
                />
                <label class="form-check-label" for="invalidCheck3">
                  Agree to <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="container mt-4">
              <a id="button_submit_loan" class="btn" @click="processLoanRequest"
                >Submit Request</a
              >
            </div>
          </div>
        </form>
        <div class="loan_info">
          <h3>Loan Information</h3>
          <p>Select the loan type that best matches your financial needs:</p>

          <h4>Student Loan</h4>
          <p>
            Designed to help students cover tuition, books, and living expenses. Repayment
            is usually deferred until after graduation, making it easier to focus on your
            studies.
          </p>

          <h4>Consumption Loan</h4>
          <p>
            Ideal for covering personal expenses, like household purchases or unexpected
            costs. This loan has shorter repayment terms, making it suitable for immediate
            needs.
          </p>

          <h4>House Loan</h4>
          <p>
            Aimed at those looking to buy or renovate a home. Offers long-term repayment
            options and competitive interest rates, helping you achieve homeownership.
          </p>

          <h4>Other</h4>
          <p>
            If your needs don't fit into the above categories, choose "Other" and describe
            your specific requirements in the message box. We’ll work to find a tailored
            solution for you.
          </p>

          <p>
            Make sure to agree to the terms and conditions before submitting your request.
          </p>
        </div>
      </section>
      <div aria-live="polite" aria-atomic="true" class="position-relative">
        <div class="toast-container position-fixed top-0 end-0 p-3">
          <div
            class="toast"
            id="success_toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-header">
              <img src="../assets/logo.png" class="rounded me-2" alt="..." width="50px" />
              <strong class="me-auto">Baba Bank Payement</strong>
              <small class="text-body-secondary">1 second ago</small>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div class="toast-body">Your loan request has been sent successfully.</div>
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

export default {
  name: "LoanApplyModule",
  props: ["client_id"],
  components: {
    NavbarModule,
    FooterModule,
  },
  methods: {
    async processLoanRequest() {
      let amount = document.getElementById("amount_input").value;
      let label = document.getElementById("message_input").value;
      let interest = document.getElementById("interest_input").value;
      let type = document.getElementById("select_label").value;

      let data = {
        client_id: this.client_id,
        amount: amount,
        label: label,
        type: type,
        interest: interest,
      };
      await this.$http
        .post("http://localhost:4000/api/loans/initiate", data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4000/",
          },
        })
        .then((res) => {
          if (res.data === 'Ok') {
            alert('Loan request sent successfully');
            location.reload();
          } else {
            alert('Failed to send loan request');
          }
        });
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Space Grotesk", sans-serif !important;
  color: #cecece;
  margin: 10px 0 10px 0;
}

section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid rgb(210, 179, 36);
  margin: 50px;
  border-radius: 5px;
}

form {
  flex: 1;
  max-width: 50%;
  padding: 10px;
  label {
    color: white;
  }
}

#button_submit_loan {
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: rgb(210, 179, 36);
  border: 1px solid rgb(210, 179, 36);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

#button_submit_loan:hover {
  color: #fff;
  background-color: rgb(160, 136, 27);
  border-color: rgb(160, 136, 27);
  transform: scale(1.02);
}

.loan_info {
  max-width: 50%;
  padding: 20px;
  margin-top: 15px;
  color: #f8f9fa;
}

.loan_info h3 {
  color: #f8d720;
  margin-bottom: 10px;
}
</style>
