<template>
  <div>
    <a class = "menu" href = '/#/'> Menu </a>
    <h2 class="title"><u>Clients</u></h2>
    <ul v-if="clients.length > 0" class="list-unstyled">
      <li v-for="client in clients" :key="client.id" class="client-card mb-4 p-3 shadow-sm">
        <h5 class="text-primary">
          <i class="bi bi-person"></i><span class="ms-2">{{ client.client_lastname.toUpperCase() }} {{ client.client_firstname }} </span>
        </h5>
        <hr class="client-divider">
        <p class="mb-1">
          <i class="bi bi-hash text-secondary"></i><span class="ms-2">{{ client.client_id }}</span>
        </p>
        <p class="mb-1">
          <i class="bi bi-phone text-success"></i><span class="ms-2">{{ client.client_phone }}</span>
        </p>
        <p class="mb-1">
          <i class="bi bi-envelope text-warning"></i><span class="ms-2">{{ client.client_email }}</span>
        </p>
        <p class="mb-1">
          <i class="bi bi-geo-alt text-danger"></i><span class="ms-2">{{ client.client_address }}</span>
        </p>
      </li>
    </ul>
    <p v-else>Aucun client trouvé.</p>
  </div>
</template>

<script>
import clientsJson from '../data/clients.json'
import accountsJson from '../data/accounts.json'

export default {
  name: 'ClientModule',
  props: ['action', 'id'],
  data () {
    return {
      clients: [],
      accounts: accountsJson
    }
  },

  methods: {
    getClients () {
      if (this.id === 'all') {
        this.clients = clientsJson
      } else {
        const client = clientsJson.find(client => client.client_id.toString() === this.id)
        this.clients = client ? [client] : []
      }
    }
  },

  watch: {
    id: function (pre, post) {
      this.getClients()
    }
  },

  created () {
    this.getClients()
  }
}
</script>

<style scoped>

.title {
  text-align: center;
  margin-bottom: 60px;

}

.client-card {
  border-radius: 10px;
  background-color: black;
  border: 2px solid red;
  color: white;
  width: 350px;
}

.client-card:hover{
  transform: scale(1.05);
}

.client-card h5 i {
  color: #0d6efd;
}

.client-card p i {
  color: #6c757d;
}

.bi-phone {
  color: #28a745;
}

.bi-envelope {
  color: #ffc107;
}

.bi-geo-alt {
  color: #dc3545;
}

.bi-hash {
  color: #6c757d;
}

.client-divider {
  border: none;
  border-top: 2px solid red;
  margin: 10px 0;
}

ul {
  padding-left: 0;
}

.list-unstyled {
  display: flex;
  flex-wrap: wrap;
  gap : 20px;
  justify-content: center;
}

a{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
