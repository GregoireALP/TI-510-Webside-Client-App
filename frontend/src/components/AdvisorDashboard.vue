<template>
    <div>
        <NavbarModule />
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Advisor Dashboard</h1>
                        <p style="color: whitesmoke; text-align: center;">Welcome to the advisor dashboard. Here you can view all your clients and their accounts.</p>
                    </div>
                </div>
                <h1 class="title">Your clients</h1>
                <table>
                    <thead>
                    <tr class="text-uppercase text-warning">
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="c in clients" v-bind:key="c.client_id">
                        <td>{{ c.client_id }}</td>
                        <td>{{ c.client_firstname }}</td>
                        <td>{{ c.client_lastname }}</td>
                        <td>{{ c.client_email }}</td>
                        <td>{{ c.client_phone }}</td>
                        <td>
                          <a class="btn btn-success" :href="'/#/account/' + c.client_id">Connect</a>
                          <button @click="selectedUser = c.client_id" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@getbootstrap">Manage Accounts</button>
                        </td>
                    </tr>
                    <tr>
                      <td colspan="6"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add a client</button></td>
                    </tr>
                    </tbody>
                </table>

                <h1>Loan requests</h1>
                <table>
                  <thead>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Loan ID</th>
                    <th>Loan Amount</th>
                    <th>Loan to Reunf</th>
                    <th>Loan Label</th>
                    <th>Actions</th>
                    <th>Status</th>
                  </thead>
                  <tr v-for="l in loans" v-bind:key="l.client_id">
                    <td>{{ l.client_id }}</td>
                    <td>{{ l.client_firstname }}</td>
                    <td>{{ l.client_lastname }}</td>
                    <td>{{ l.client_email }}</td>
                    <td>{{ l.loan_id }} </td>
                    <td>{{ l.loan_amount }} </td>
                    <td>{{ l.loan_to_refund }} </td>
                    <td>{{ l.loan_label }}</td>
                    <td>
                      <a v-if="l.loan_status === 0" class="btn btn-success" @click="approveLoan(l.loan_id)">Accepted</a>
                      <a v-if="l.loan_status === 0" class="btn btn-danger" @click="declineLoan(l.loan_id)">Declined</a>
                      <a v-if="l.loan_status === 1" class="btn btn-primary" @click="finishLoan(l.loan_id, l.loan_to_refund)"">Finished</a>
                    </td>
                    <td v-if="l.loan_status === 0" class="loan-status-pending">Pending...</td>
                    <td v-if="l.loan_status === 1" class="loan-status-accepted">Accepted</td>
                    <td v-if="l.loan_status === 2" class="loan-status-declined">Declined</td>
                    <td v-if="l.loan_status === 3" class="loan-status-finished">Finished</td>
                  </tr>
                </table>
            </div>
          <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
          <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" style="color: black;" id="exampleModalLabel">Add a client</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="recipient-firstname" class="col-form-label">Firstname:</label>
                        <input type="text" class="form-control" id="recipient-firstname">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-lastname" class="col-form-label">Lastname:</label>
                        <input type="text" class="form-control" id="recipient-lastname">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-email" class="col-form-label">Email:</label>
                        <input type="email" class="form-control" id="recipient-email">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-phone" class="col-form-label">Phone:</label>
                        <input type="text" class="form-control" id="recipient-phone">
                      </div>
                      <div>
                        <label for="recipient-address" class="col-form-label">Address: </label>
                        <input type="text" class="form-control" id="recipient-address">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-birthday" class="col-form-label">Birthday</label>
                        <input type="date" class="form-control" id="recipient-birthday">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-password" class="col-form-label">Generate Password</label>
                        <input type="text" class="form-control" id="recipient-password">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="processCreateClient()">Create client</button>
                  </div>
                </div>
              </div>
            </div>
          <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
          <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="deleteModal" style="color: black;">Manage Accounts</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="">Delete an account</label><br>
                            <select id="accountToClose">
                                <option default disabled>Chose an account to close</option>
                                <option v-for="a in accounts" :key="a.account_id" :value="a.account_id">{{ a.account_label + " - " + a.account_iban }}</option>
                            </select><br>
                        </div>
                        </form>
                    </div>
                    <h1 class="title" style="color: black;">OR</h1>
                    <button type="button" class="btn btn-success" style="margin: 2rem;" @click="processCreateAccount(selectedUser)">Create a new account</button>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" @click="processDeleteAccount">Execute</button>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterModule />
    </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import FooterModule from './FooterModule.vue'
import db from '../db.utils.js'

export default {
  name: 'AdvisorDashboard',
  props: ['advisor_id'],
  components: {
    NavbarModule,
    FooterModule
  },
  data () {
    return {
      clients: [],
      loans: [],
      selectedUser: null,
      accounts: []
    }
  },
  methods: {
    async getClients () {
      await fetch('http://localhost:4000/api/clients/get/advisor/' + this.advisor_id)
        .then(res => res.json())
        .then(function (data) {
          this.clients = data
        }.bind(this))
    },
    async getLoans () {
      await fetch('http://localhost:4000/api/loans/get/advisor/' + this.advisor_id)
        .then(res => res.json())
        .then(function (data) {
          this.loans = data
        }.bind(this))
    },
    async finishLoan (loanId, toRefund) {
      let confirmation = confirm('Are you sure you want to finish this loan?')
      if (confirmation) {
        db.post('http://localhost:4000/api/loans/finish/' + loanId)
          .then(function (data) {
            if (data === 'Success') {
              alert('Loan finished successfully.')
              location.reload()
            } else {
              alert('Error while processing your loan request. Please try again later.')
              location.reload()
            }
          })
      }
    },
    async approveLoan (loanId) {
      db.post('http://localhost:4000/api/loans/approve/' + loanId)
        .then(function (data) {
          if (data === 'Success') {
            alert('Loan request accepted successfully.')
            location.reload()
          } else {
            alert('Error while processing your loan request. Please try again later.')
            location.reload()
          }
        })
    },
    async declineLoan (loanId) {
      db.post('http://localhost:4000/api/loans/reject/' + loanId)
        .then(function (data) {
          if (data === 'Success') {
            alert('Loan request declined successfully.')
            location.reload()
          } else {
            alert('Error while processing your loan request. Please try again later.')
            location.reload()
          }
        })
    },
    async processCreateAccount (clientId) {
      db.post('http://localhost:4000/api/accounts/open/' + clientId)
        .then(function (data) {
          if (data === 'Success') {
            alert('Account created successfully')
            location.reload()
          } else {
            alert('Error while processing your loan request. Please try again later.')
            location.reload()
          }
        })
    },
    async processDeleteAccount () {
      let accountId = document.getElementById('accountToClose').value

      db.post('http://localhost:4000/api/accounts/delete/' + accountId)
        .then(function (data) {
          if (data === 'Success') {
            alert('Account deleted successfully')
            location.reload()
          } else {
            alert('Error while processing your loan request. Please try again later.')
            location.reload()
          }
        })
    },
    async processCreateClient () {
      let firstname = document.getElementById('recipient-firstname').value
      let lastname = document.getElementById('recipient-lastname').value
      let email = document.getElementById('recipient-email').value
      let phone = document.getElementById('recipient-phone').value
      let birthday = document.getElementById('recipient-birthday').value
      let password = document.getElementById('recipient-password').value
      let address = document.getElementById('recipient-address').value
      let data = {
        advisor_id: this.advisor_id,
        client_firstname: firstname,
        client_lastname: lastname,
        client_email: email,
        client_phone: phone,
        client_address: address,
        client_birthday: birthday,
        client_password: password
      }
      await db.post('http://localhost:4000/api/clients/create', data)
        .then(function (data) {
          if (data !== 'Something went wrong') {
            alert('Client created successfully.')

            let newClientId = data
            let newAccountData = {
              client_id: newClientId
            }

            db.post('http://localhost:4000/api/accounts/create', newAccountData)
              .then(function (data) {
                if (data === 'Success') {
                  alert('Account created successfully.')
                } else {
                  alert('Error while creating the account. Please try again later.')
                }
              })

            location.reload()
          } else {
            alert('Error while creating the client. Please try again later.')
            location.reload()
          }
        })
    }
  },
  watch: {
    advisor_id: function (pre, post) {
      this.getClients()
      this.getLoans()
    },
    selectedUser: async function (pre, post) {
      await fetch('http://localhost:4000/api/accounts/get/client/' + this.selectedUser)
        .then(res => res.json())
        .then(function (data) {
          this.accounts = data
        }.bind(this))
    }
  },
  created () {
    this.getClients()
    this.getLoans()
  }
}
</script>

<style scoped>
table {
  width: 75%;
  margin: auto;

  text-align: center;

  border: solid 1px gold;

  color: whitesmoke;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px; /* Adjust the value as needed */
  overflow: hidden; /* Ensures the border-radius is applied correctly */
}

thead > tr {
  background-color: #191B1F !important;
}

table tr:nth-child(even) {
  background-color: #191B1F;
}

table tr:nth-child(odd) {
  background-color: #22252b;
}

td {
  padding: 10px 0 10px 0;
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
