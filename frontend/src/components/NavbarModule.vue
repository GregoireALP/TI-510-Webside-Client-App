<template>
  <nav>
    <div id="navbar-items-left">
      <a href="/#/about-us" class="navbar-item" v-if="!isAuth">About us</a>
      <div class="dropdown" v-if="isAuth">
        <button
          class="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Actions
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="/#/account/all">Manage my account</a></li>
          <li><a class="dropdown-item" href="/#/send-payement/2">Transfer money</a></li>
          <li><a class="dropdown-item" href="/#/advisor/2">Contact my advisor</a></li>
          <li><a class="dropdown-item" href="/#/">Logout</a></li>
        </ul>
      </div>
    </div>

    <a href="/"><img src="../assets/logo.png" alt="Bab Bank Logo" id="brand-logo" /></a>

    <div id="navbar-items-right">
      <a v-if="isAuth" href="/#/client/all" class="navbar-item">My Profile</a>
      <a v-if="isAuth" @click="processLogout"
        ><button type="button" class="btn btn-danger">Logout</button></a
      >
      <a v-if="!isAuth" href="/#/login"
        ><button type="button" class="btn btn-warning">Join Us</button></a
      >
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "Navbar",
  data() {
    return {
      isAuth: false
    };
  },
  methods: {
    async IsAuth() {
      await this.$http.get("http://localhost:4000/is-auth")
        .then((response) => {
          if (response.data.res) {
            this.isAuth = true;
          }
        });
    },
    async processLogout() {
      await this.$http.post("http://localhost:4000/logout")
        .then((response) => {
          if (response.data.message === "Ok") {
            this.isAuth = false;
            location.reload();
          }
        });
    },
  },
  created() {
    this.IsAuth();
  },
};
</script>

<style scoped>
nav {
  border-bottom: solid 1px gold;

  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 50px;

  font-family: "Space Grotesk", sans-serif;
}

#join-us {
  text-decoration: none;
  color: #191b1f;
}

#brand-logo {
  margin: 10px;
  height: 100px;
}

.navbar-item {
  color: #cecece;
  text-decoration: none;
}

.navbar-item:hover {
  color: #f4f4f4;
}

#login-button {
  padding: 10px 40px 10px 40px;

  align-items: center;
  text-align: center;

  border: none;

  border-radius: 20px;

  background: rgb(210, 179, 36);
  background: linear-gradient(
    90deg,
    rgba(210, 179, 36, 1) 0%,
    rgba(255, 237, 26, 1) 42%,
    rgba(214, 185, 13, 1) 100%
  );

  transition: ease-in-out 1s;

  border: solid 2px gold;
}

#login-button:hover {
  background: rgb(210, 179, 36);
  background: linear-gradient(
    90deg,
    rgb(179, 151, 27) 0%,
    rgb(228, 211, 23) 42%,
    rgb(170, 146, 10) 100%
  );
}
</style>
