<template>
  <div>
    <NavbarModule />
    <h1 class="title">Clients</h1>
    <div class="container d-flex flex-row flex-wrap justify-content-evenly mt-5">
      <div class="card" v-for="c in clients" v-bind:key="c.client_id">
        <div class="top-container">
          <img
            :src="
              'https://ui-avatars.com/api/?name=' +
              c.client_lastname +
              '+' +
              c.client_firstname
            "
            class="img-fluid profile-image"
            width="70"
          />

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
          <a :href="'/#/account/' + c.client_id" style="text-decoration: none"
            ><span class="option-list-item"
              ><i class="bi bi-bank"></i> Manage my accounts</span
            ></a
          >
        </div>
        <div class="options-list pt-2">
          <a :href="'/#/manage-loan/' + c.client_id" style="text-decoration: none"
            ><span class="option-list-item"
              ><i class="bi bi-paperclip"></i> Consult my loans</span
            ></a
          >
        </div>
        <div class="options-list pt-2">
          <a :href="'/#/advisor/' + c.client_id" style="text-decoration: none"
            ><span class="option-list-item"
              ><i class="bi bi-person-fill-gear"></i> Contact my advisor</span
            ></a
          >
        </div>
      </div>
    </div>

    <FooterModule />
  </div>
</template>

<script>
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
    };
  },

  methods: {
    async getClients() {
      let res = await this.$http.get("http://localhost:4000/api/clients/get/all", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000/",
        },
      });
      this.clients = res.data;
    },
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
  background: linear-gradient(
    90deg,
    rgba(210, 179, 36, 1) 0%,
    rgba(255, 237, 26, 1) 50%,
    rgba(214, 185, 13, 1) 100%
  ) !important;
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
