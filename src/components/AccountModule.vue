<template>
  <div>
    <h2 class="title">Bank Account</h2>

    <div v-for="a of accounts" v-bind:key="a.account_id" class="container px-4">

      <div class="card text-bg-warning mb-3" style="max-width: 18rem;">

        <div class="card-header">
          <i class="bi bi-bank"></i> {{ a.account_iban }}
        </div>

        <div class="card-body">
          <h5 class="card-title"> </h5>

          <ul style="list-style: none;">
            <li><i class="bi bi-currency-exchange"></i> <b>Balance:</b> {{ a.account_balance }}$</li>
            <li><i class="bi bi-textarea-t"></i> <b>Label:</b> {{ a.account_label }}</li>
            <li><i class="bi bi-speedometer2"></i> <b>Interest:</b> {{ a.account_interest  }}%</li>
            <li><i class="bi bi-sign-stop"></i> <b>Max-amount:</b> {{ a.account_max_amount  }}</li>
          </ul>
        </div>

        <div class="card-footer">
          <span class="card-text"><i class="bi bi-calendar-date"></i> Creation date: {{ a.account_creation_date  }}</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import accounts_json from "../data/accounts.json"

export default {
  name: 'AccountModule',
  props: ['action', 'id'],
  data() {
    return {
      accounts: []
    }
  },

  created() {
    this.accounts = accounts_json
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: sans-serif;
}
</style>
