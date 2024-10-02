<template>
    <div class="hello">
        <p> ACTION = {{ action }}<br /> ID = {{ id }}<br /> <a href="/#/cars/list/all">Back to the list</a><br /> <a
                href="/#/cars/edit/0">Add a new car</a><br /> </p> <!-- For Datasheet: /cars/show/42 -->
        <table v-if="action === 'show'" class="table table-striped table-bordered table-hover">
            <tr>
                <td>ID</td>
                <td>{{ oneCar.car_id }}</td>
            </tr>
            <tr>
                <td>BRAND</td>
                <td>{{ oneCar.car_brand }} TODO: brandName/link to brand</td>
            </tr>
            <tr>
                <td>CAR NAME</td>
                <td>{{ oneCar.car_name }}</td>
            </tr>
            <tr>
                <td>BASE PRICE</td>
                <td>{{ oneCar.car_baseprice }}</td>
            </tr>
            <tr>
                <td>IS FANCY?</td>
                <td>{{ oneCar.car_isFancy ? "YES" : "NO" }}</td>
            </tr>
            <tr>
                <td>REAL PRICE</td>
                <td>{{ oneCar.car_realPrice }}</td>
            </tr>
        </table> <!-- For Form: /cars/edit/23 -->
        <table v-if="action === 'edit'" class="table table-striped table-bordered table-hover">
            <tr>
                <td>BRAND</td>
                <td> <select name="car_brand" v-model="oneCar.car_brand">
                        <option v-for="b of brands" v-bind:key="b.brand_id" :value="b.brand_id"> {{ b.brand_name }}
                        </option>
                    </select> </td>
            </tr>
            <tr>
                <td>CAR NAME</td>
                <td><input type="text" name="car_name" v-model="oneCar.car_name" /></td>
            </tr>
            <tr>
                <td>BASE PRICE</td>
                <td><input type="number" name="car_baseprice" v-model="oneCar.car_baseprice" /></td>
            </tr>
            <tr>
                <td>IS FANCY?</td>
                <td><input type="checkbox" name="car_isFancy" v-model="oneCar.car_isFancy" /></td>
            </tr>
            <tr>
                <td>REAL PRICE</td>
                <td><input type="number" name="car_realPrice" v-model="oneCar.car_realPrice" /></td>
            </tr>
            <tr>
                <td colspan="2"> <input type="button" value="SEND" @click="sendEditRequest()" /></td>
            </tr>
        </table> <!-- For List: /cars/list/all -->
        <table v-if="action === 'list'" class="table table-striped table-bordered table-hover">
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>SHOW DATASHEET</td>
                <td>EDIT CAR</td>
                <td>DELETE CAR</td>
            </tr>
            <tr v-for="c of cars" v-bind:key="c.car_id">
                <td>{{ c.car_id }}</td>
                <td>{{ c.car_name }}</td>
                <td><a :href="'/#/cars/show/' + c.car_id">[SHOW]</a></td>
                <td><a :href="`/#/cars/edit/${c.car_id}`">[EDIT]</a></td>
                <td><input type="button" value="DELETE" @click="sendDeleteRequest()" /></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Cars',
    props: ['action', 'id'],
    data() {
        return {
            cars: [],
            brands: [],
            oneCar: {
                car_id: 0,
                car_brand: 0,
                car_name: 'xxx',
                car_baseprice: 0,
                car_isFancy: 0,
                car_realPrice: 0
            }
        }
    },
    methods: {
        async getAllData() {
            try {
                /*
                let responseCars = await this.$http.get("xxxx");
                this.cars = responseCars.data;
                let responseBrands = await this.$http.get("xxxx");
                this.brands = responseBrands.data;
                */

                this.brands = [{ brand_id: 1, brand_name: "BMW" }, { brand_id: 2, brand_name: "Audi" }, { brand_id: 3, brand_name: "Citroen" }];

                this.cars = [{ car_id: 1, car_brand: 2, car_name: "Audi S4", car_baseprice: 40000, car_isFancy: 0, car_realPrice: 45000 }, { car_id: 2, car_brand: 1, car_name: "BMW i8", car_baseprice: 80000, car_isFancy: 1, car_realPrice: 90000 }];

                this.refreshOneCar();
            }
            catch (ex) { console.log(ex); }
        },
        async refreshOneCar() {
            if (this.$props.id === "all" || this.$props.id === "0") return;
            try {
                /*
                  let responseCar = await this.$http.get("xxxx");
                  this.oneCar = responseCar.data;
                */
                this.oneCar = this.cars.find(car => car.car_id == this.$props.id);
            }
            catch (ex) { console.log(ex); }
        },
        async sendDeleteRequest() { },
        async sendEditRequest() { }
    },
    watch: {
        id: function (newVal, oldVal) {
            this.refreshOneCar();
        }
    },
    created() {
        this.getAllData();
    }
}
</script>
<style scoped>
a {
    color: #42b983;
}

p {
    color: darkgray;
}

#app table {
    width: 95%;
    margin: 20px;
}

#app td {
    text-align: left;
}
</style>
