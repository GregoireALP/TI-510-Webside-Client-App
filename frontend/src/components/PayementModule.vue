<template>
    <section>
      <NavbarModule />
      <a class = "menu" href = '/#/'> Menu </a>
      <div class="title">
        <h2><b>Payement</b></h2>
      </div>
      <div class="card-grille">
        <div class="card-border" v-for="payment in payement" :key="payment.payement_id">
          <div class="card-title">
            <p><b>{{ payment.payement_label }} :</b> -{{ payment.payement_amount }} <span v-if="payment.payement_currency === 'Dollar'">$</span><span v-else-if="payment.payement_currency === 'Euro'">€</span><span v-else-if="payment.payement_currency === 'Forint'">Ft</span><span v-else>{{ payment.payement_currency }}</span></p>
          </div>
        <div>
          <ul class="card-body">
            <li>Payment ID : {{ payment.payement_id }}</li>
            <li>Issue date : {{ payment.payement_start_date }}</li>
            <li>Date of Receipt : {{ payment.payement_end_date }}</li>
            <li>Account Sender ID : {{ payment.payement_account_sender_id }}</li>
            <li>Account Reciever ID : {{ payment.payement_account_reciever_id }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import payementJson from '../data/payements.json'
import NavbarModule from './NavbarModule.vue'

export default {
  name: 'PayementModule',
  props: ['action', 'id'],
  components: {
    NavbarModule
  },
  data () {
    return {
      payement: payementJson
    }
  },

  methods:
  {
    getAccounts () {
      if (this.id === 'all') {
        this.payement = payementJson
      } else {
        const payement = payementJson.find(payement => payement.payement_id.toString() === this.id)
        this.payement = payement ? [payement] : []
      }
    }
  },

  watch: {
    id: function (pre, post) {
      this.getAccounts()
    }
  },

  created () {
    this.getAccounts()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title{
  text-align:center;
}

.card-grille{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card-border{
  background-color: rgb(199, 199, 199);
  border-radius: 10px; /* Bordure arrondie */
  border: 1px solid #333; /* Bordure gris foncé */
  padding: 15px;
  text-align: center;
}

.card-border:hover{
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.card-border ul, .card-border .card-title {
  text-align: center; /* Centrer le texte à l'intérieur de l'ul et du titre */
  margin: 0 auto; /* Pour éviter les marges */
}

.card-title{
  background-color: rgb(221, 221, 221);
  border-radius: 15px;
  text-align: center;
  p{
    color : red;
    b{
      color : black;
    }
  }
}

.card-body{
  list-style-type: none;
  padding-left: 0;
  margin: 10px 0;
  li {
  margin: 5px 0;
  }
}

a{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 600px) {
  .card-grille {
    grid-template-columns: 1fr;
  }
}
</style>
