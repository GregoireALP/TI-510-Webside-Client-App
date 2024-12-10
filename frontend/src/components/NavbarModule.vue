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
          <li><a class="dropdown-item" :href="'/#/account/' + clientId">Manage my account</a></li>
          <li><a class="dropdown-item" :href="'/#/send-payement/' + clientId">Transfer money</a></li>
          <li><a class="dropdown-item" :href="'/#/advisor/' + clientId">Contact my advisor</a></li>
          <li><a class="dropdown-item" @click="processLogout()">Logout</a></li>
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
      isAuth: false,
      clientId: null,
    };
  },
  methods: {
    async checkAuth() {
      await this.$http.get("http://localhost:4000/is-auth")
        .then((response) => {
          let url = this.$route.path;

          if (response.data.isAuth) {
            this.isAuth = true;
            this.clientId = response.data.id;

            let regex = /[^/]+$/;
            let id_path = url.match(regex);
            
            switch(response.data.role) {

              case 'client':
                if (parseInt(id_path[0]) !== response.data.id || url.includes('advisor-dashboard')) {
                  this.$router.push('/client/' + response.data.id);
                }
                break;

              default:
                this.$router.push('/login');
                break;
            }

          } else {
            if(url !== '/login' && url !== '/about-us' && url !== '/') {
              this.$router.push('/login');
            }
          }
        });
    },
    async processLogout() {
      await this.$http.post("http://localhost:4000/logout")
        .then((response) => {
          if (response.data.message === "Ok") {
            this.isAuth = false;
            this.$router.push('/login')
          }
        });
    },
  },
  created() {
    this.checkAuth();
  },
  watch: {
    $route(to, from) {
      // Exclude for about-us login and home page
      if (to.path !== '/about-us' && to.path !== '/login' && to.path !== '/') {
        this.checkAuth();
      }
    },
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
