<template>
  <div>
    <NavbarModule />
    <h1 class="title">Clients</h1>
    <div class="container d-flex flex-row flex-wrap justify-content-evenly mt-5">
      <div class="card" v-for="c in clients" v-bind:key="c.client_id">
        <div class="top-container">
          <img :src="'https://ui-avatars.com/api/?name=' +
            c.client_lastname +
            '+' +
            c.client_firstname
            " class="img-fluid profile-image" width="70" />

          <div class="ml-3">
            <h5 class="name">{{ c.client_firstname + " " + c.client_lastname }}</h5>
            <p class="mail">{{ c.client_email }}</p>
          </div>
        </div>

        <br />
        <ul class="info-list">
          <li class="info-list-item">
            <i class="bi bi-hash"></i> <b>ID</b>: {{ c.client_id }}
          </li>
          <li class="info-list-item">
            <i class="bi bi-house"></i> <b>Address</b>: {{ c.client_address }}
          </li>
          <li class="info-list-item">
            <i class="bi bi-telephone"></i> <b>Phone</b>: {{ c.client_phone }}
          </li>
          <li class="info-list-item">
            <i class="bi bi-calendar-date"></i> <b>Birthday</b>:
            {{ new Date(c.client_birthday).toDateString() }}
          </li>
          <li class="info-list-item">
            <i class="bi bi-gender-ambiguous"></i> <b>Gender</b>: {{ c.client_gender }}
          </li>
        </ul>

        <hr class="golden-divider mx-auto" />

        <div class="options-list">
          <a :href="'/#/account/' + c.client_id" style="text-decoration: none"><span class="option-list-item"><i
                class="bi bi-bank"></i> Manage my accounts</span></a>
        </div>
        <div class="options-list pt-2">
          <a :href="'/#/manage-loan/' + c.client_id" style="text-decoration: none"><span class="option-list-item"><i
                class="bi bi-paperclip"></i> Consult my loans</span></a>
        </div>
        <div class="options-list pt-2">
          <a :href="'/#/advisor/' + c.client_id" style="text-decoration: none"><span class="option-list-item"><i
                class="bi bi-person-fill-gear"></i> Contact my advisor</span></a>
        </div>
        <div class="options-list pt-2">
          <a :href="'/#/advisor/' + c.client_id" style="text-decoration: none" data-bs-toggle="modal"
            data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="selectedClient = c"><span class="option-list-item"><i
                class="bi bi-gear-wide-connected"></i> Change my informations</span></a>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" style="color: black" id="exampleModalLabel">
                  Modify my informations
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-firstname" class="col-form-label">Firstname:</label>
                    <input type="text" class="form-control" id="recipient-firstname" :value="this.selectedClient.client_firstname" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-lastname" class="col-form-label">Lastname:</label>
                    <input type="text" class="form-control" id="recipient-lastname" :value="this.selectedClient.client_lastname" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-email" class="col-form-label">Email:</label>
                    <input type="email" class="form-control" id="recipient-email" :value="this.selectedClient.client_email" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-phone" class="col-form-label">Phone:</label>
                    <input type="text" class="form-control" id="recipient-phone" :value="this.selectedClient.client_phone" />
                  </div>
                  <div>
                    <label for="recipient-address" class="col-form-label">Address: </label>
                    <input type="text" class="form-control" id="recipient-address" :value="this.selectedClient.client_address" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-password" class="col-form-label">Change Password</label>
                    <input type="text" class="form-control" id="recipient-password" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary" @click="processModifyInformation()">
                  Modify
                </button>
              </div>
            </div>
          </div>
        </div>

    <FooterModule />
  </div>
</template>

<script>
/* eslint-disable */
import NavbarModule from "./NavbarModule.vue";
import FooterModule from "./FooterModule.vue";

export default {
  name: "ClientModule",
  props: ["client_id"],
  components: {
    NavbarModule,
    FooterModule,
  },
  data() {
    return {
      clients: [],
      selectedClient: {}
    };
  },

  methods: {
    async getClients() {
      await this.$http.get("http://localhost:4000/api/clients/get/" + this.client_id)
        .then((res) => {
          this.clients = res.data
        });
    },
    async processModifyInformation() {

      let firstname = document.getElementById("recipient-firstname").value;
      let lastname = document.getElementById("recipient-lastname").value;
      let email = document.getElementById("recipient-email").value;
      let phone = document.getElementById("recipient-phone").value;
      let address = document.getElementById("recipient-address").value;
      let password = document.getElementById("recipient-password").value;

      let data = {
        client_firstname: firstname,
        client_lastname: lastname,
        client_email: email,
        client_phone: phone,
        client_address: address,
        client_password: password,
        client_id: this.selectedClient.client_id
      }

      await this.$http.post("http://localhost:4000/api/clients/update/", data)
        .then((res) => {
          if (res.data.message === "Ok") {
            alert("Client informations updated");
            location.reload();
          } else {
            alert("Error updating client informations");
            location.reload()
          }
        });
    }
  },

  watch: {
    client_id: function (pre, post) {
      this.getClients();
    },
  },

  created() {
    this.getClients();
  },
};
</script>

<style scoped>
.info-list {
  margin: 0%;
  padding: 0%;
  background-color: #191b1f !important;
  list-style: none !important;
}

.info-list-item {
  color: whitesmoke !important;
}

.golden-divider {
  border: none !important;
  height: 4px !important;
  width: 100% !important;
  max-width: 100% !important;
  background: linear-gradient(90deg,
      rgba(210, 179, 36, 1) 0%,
      rgba(255, 237, 26, 1) 50%,
      rgba(214, 185, 13, 1) 100%) !important;
  border-radius: 10px !important;
}

.card {
  background-color: #191b1f;
  border: solid 1px gold;
  color: #cecece;
  width: 350px;
  border-radius: 33px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem !important;
  margin-bottom: 50px;
}

.top-container {
  display: flex;
  align-items: center;
}

.profile-image {
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid gold;
}

.name {
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: 8px;
}

.mail {
  font-size: 14px;
  position: relative;
  top: 2px;
}

.middle-container {
  border-radius: 12px;
  width: 75%;
}

.dollar-div {
  background-color: rgb(162, 142, 29);
  padding: 12px;
  border-radius: 10px;
}

.round-div {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #191b1f;
}

.dollar {
  font-size: 16px !important;
  color: gold !important;
  font-weight: bold !important;
}

.current-balance {
  font-size: 15px;
  font-weight: bold;
  color: #191b1f;
}

.amount {
  color: rgb(124, 107, 12);
  font-size: 16px;
  font-weight: bold;
}

.dollar-sign {
  font-size: 16px;
  font-weight: bold;
}

.option-list-item {
  font-size: 16px;
  font-weight: 700;
  color: #dee2e6 !important;
}

.option-list-item:hover {
  border-bottom: 1px solid #dee2e6 !important;
  cursor: pointer;
}
</style>
