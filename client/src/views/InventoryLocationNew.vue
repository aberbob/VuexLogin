<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Add Location</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        <br>Name:
        <input type="text" name="description" v-model="OneCustomer.name">
        <br>Street:
        <input type="text" name="group" v-model="OneCustomer.street">
        <br>Street2:
        <input type="text" name="description" v-model="OneCustomer.street2">
        <br>City:
        <input type="text" name="category" v-model="OneCustomer.city">
        <br>State:
        <input type="text" name="category" v-model="OneCustomer.state">
        <br>Zipcode:
        <input type="text" name="category" v-model="OneCustomer.zipcode">
        <br>
        <button type="submit" name="button">Submit</button>
      </form>
      {{OneCustomer}}
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default { 
  name: "NewInventoryLocation",
  components: {
    //SubHeaderCustomers
  },
  data() {
    return {
      AllStatuses: [],
      AllOrgs: [],
      OneCustomer: [],
    };
  },
  methods: {
    postNow: async function() {
      await axios.post(this.$apiURL + "InventoryLocations/add", {
        data: this.OneCustomer
      })
      .then(
          setTimeout(
            function() {
              this.$router.push("/InventoryLocations");
            }.bind(this),
            1000
          )
        );
      // this.$router.push("InventoryLocations");
      // // Object.keys(this.OneCustomer).forEach(function(key, index) {
      //   self.data.form[key] = "";
      // });
      //.then(res =>{
      //  console.log(re.data);
      //});
    }
  },
  created() {
    this.OneCustomer = {};
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