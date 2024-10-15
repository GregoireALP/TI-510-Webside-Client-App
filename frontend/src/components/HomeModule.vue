<template>
    <div class="background-container">
        <div class = "menu">
            <div class = "client_link">
                <a href = '/#/client/list/all'> Client </a>
            </div>
            <div class = "account_link">
                <a href = '/#/account/list/all'> Account </a>
            </div>
            <div class = "payement_link">
                <a href = '/#/payement/list/all'> Payement </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeModule'
}
</script>

<style scoped>
.background-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/logo.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
    margin-top: 190px;
}

h1 {
    text-decoration: underline;
    color: rgb(15, 1, 1);
    font-size: 2rem;
    font-family: sans-serif;
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
}

.client_link a,
.account_link a,
.payement_link a {
    color: rgb(19, 149, 160);
    font-size: 1.3rem;
    text-decoration: none;
}

.client_link a:hover,
.account_link a:hover,
.payement_link a:hover {
    color: rgb(10, 80, 90);
}

</style>
