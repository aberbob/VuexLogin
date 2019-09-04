<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Add Organization</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Name:
        <br>
        <input type="text" name="name" v-model="OneCustomer.name">
        <br>
        street:
        <br>
        <input type="text" name="street" v-model="OneCustomer.street">
        <br>
        street2:
        <br>
        <input type="text" name="street2" v-model="OneCustomer.street2">
        <br>
        city:
        <br>
        <input type="text" name="city" v-model="OneCustomer.city">
        <br>
        state:
        <br>
        <input type="text" name="state" v-model="OneCustomer.state">
        <br>
        zip:
        <br>
        <input type="text" name="zip" v-model="OneCustomer.zip">
        <br>
        country:
        <br>
        <input type="text" name="country" v-model="OneCustomer.country">
        <br>
        phone:
        <br>
        <input type="text" name="phone" v-model="OneCustomer.phone">
        <br>
        <button type="submit" name="button">Submit</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header.vue";
import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "NewOrganization",
  components: {
    SubHeaderCustomers,
    Header
  },
  data() {
    return {
      OneCustomer: []
    };
  },
  methods: {
    postNow: function() {
        axios
        .post(this.$apiURL + "organizations/add", {
          data: this.OneCustomer
        })
        .then(this.$router.push("/Customers/Organizations"))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.OneCustomer = {
    };
  }
};
</script>

<style scoped>
.subheader {
  background: rgb(105, 105, 105);
  color: #fff;
  text-align: center;
  padding: 0px;
}
.subheader a {
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
}
.newitemform {
  size: 100%;
}
#EditItemID {
  margin-top: 20px;
}
</style>