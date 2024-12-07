<template>

    <div>

        <NavbarModule />

        <main>
            <div class="card">
                <form onsubmit="event.preventDefault()" class="box">
                    <h1>Login</h1>
                    <p> Please enter your login and password</p>
                    <input type="text" name="" placeholder="Username" id="username">
                    <input type="password" name="" placeholder="Password" id="password">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <input type="checkbox" name="advisor" id="loginAsAdvisor">
                        <label for="advisor" style="font-size: 12px; margin-bottom: 2px; margin-left: 5px;">Login as an advisor</label>
                    </div>
                    <input type="submit" name="" value="Login" href="/#/client/all" @click="processLogin()">
                </form>
            </div>
        </main>

        <FooterModule />

    </div>

</template>

<script>

import FooterModule from './FooterModule.vue'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'LoginModule',
  components: {
    NavbarModule,
    FooterModule
  },
  methods: {
    async processLogin () {
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value
      let isAdvisor = document.getElementById('loginAsAdvisor').checked

      let res = await this.$http.post('http://localhost:4000/api/auth/login', {
        username: username,
        password: password,
        isAdvisor: isAdvisor
      })

      console.log(JSON.stringify(res.data))
    }
  }
}

</script>

<style scoped>

main {
    text-align: center;
}

.card {
    border: solid 1px gold;
    border-radius: 50px;
    display: inline-block;
}

.box {
    width: 500px;
    padding: 40px;
    background: #191b1f;
    text-align: center;
    transition: 0.25s;

    border: solid 1px gold;
    border-radius: 50px;
    color: #cecece;
}

.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: #cecece;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: #cecece;
    text-transform: uppercase;
    font-weight: 500
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #2ecc71;
}

.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid gold;
    padding: 14px 40px;
    outline: none;
    color: #cecece;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box input[type="submit"]:hover {
    background: gold;
    color: #191b1f;
}

.forgot {
    text-decoration: underline;
}
</style>
