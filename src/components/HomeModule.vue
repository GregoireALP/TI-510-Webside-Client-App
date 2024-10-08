<template>
    <div>
        <h1> BABA BANK </h1>
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
.menu{
    display: flex;
    flex-wrap: wrap;
    gap : 100px;
    justify-content: center;
}

h1 {
    text-decoration: underline;
    color: rgb(15, 1, 1);
    font-size: 2rem;
    font-family: sans-serif;
    text-align: center;
    size: 20 px;
    padding-bottom: 20px;
    padding-top: 20px;
}

.client_link a{
    color : rgb(19, 149, 160);
    font-size: 1.3rem;
}

.account_link a{
    color : rgb(19, 149, 160);
    font-size: 1.3rem;
}

.payement_link a{
    color : rgb(19, 149, 160);
    font-size: 1.3rem;
}

</style>
