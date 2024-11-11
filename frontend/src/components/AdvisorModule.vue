<template>
  <div>
    <NavbarModule />
    <main>
      <h1 class="title">Contact Advisor</h1>
      <div class="class_grid">
        <div class="card" v-for="a in advisor" v-bind:key="a.advisor_id">
          <img src="../assets/profil_pics.png" class="card_img" alt="Advisor image">
          <div class="card-body" style="margin">
            <h5 class="card-title">{{ a.advisor_firstname }} {{ a.advisor_lastname }}</h5>
            <div class="card-text">
              <div class="mail">
                <i class="bi bi-envelope-fill"></i>
                <strong> : </strong> {{ a.advisor_email }}<br>
              </div>
              <div class="phone">
                <i class="bi bi-telephone-fill"></i>
                <strong> : </strong> {{ a.advisor_phone }}<br>
              </div>
              <div class="bank">
                <i class="bi bi-bank2"></i>
                <strong> : </strong> {{ a.advisor_address }}<br>
              </div>
            </div>
          </div>
          <div class="contact">
            <a :href="'/#/loan/apply/'" class="btn btn-primary">Contact</a>
          </div>
        </div>
      </div>
    </main>
    <FooterModule/>
  </div>
</template>

<script>
import NavbarModule from './NavbarModule.vue'
import FooterModule from './FooterModule.vue'

export default {
  name: 'AdvisorModule',
  props: ['client_id'],
  components: {
    NavbarModule,
    FooterModule
  },
  data () {
    return {
      advisor: []
    }
  },
  methods: {
    async getAdvisor () {
      try {
        if (this.client_id === 'all') {
          await fetch('http://localhost:4000/api/advisors/get/all')
            .then(res => res.json())
            .then(function (data) {
              this.advisor = data
            }.bind(this))
        } else {
          await fetch('http://localhost:4000/api/advisors/get/client/' + this.client_id)
            .then(res => res.json())
            .then(function (data) {
              this.advisor = data
            }.bind(this))
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  created () {
    this.getAdvisor()
  },
  watch: {
    client_id: function (pre, post) {
      this.getAdvisor()
    }
  }
}
</script>

<style scoped>

.class_grid{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 100px;
  margin:10px;
}

.card{
  width: 330px;
  margin:20px;
  border: 2px solid rgb(210,179,36);
  border-radius: 4%;
  background-color: black;
  color: white;
}
.card_img{
  display: block;
  border-radius: 50%;
  margin: auto;
  margin-top: 10px;
  margin-bottom:10px;
  width:50%;
  text-align: middle;
}

.card-body{
  margin-left:15px;
  margin-right:15px;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 5%;
  padding: 10px;
  h5{
    color:rgb(210,179,36);
  }
  i{
    color:rgb(210,179,36);
  }
}

.contact{
  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 20px;
}
</style>
