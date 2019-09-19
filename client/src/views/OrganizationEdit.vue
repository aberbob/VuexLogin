<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Edit Organization</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Name:
        <br />
        <input type="text" name="name" v-model="OneItem.CustOrganizationsname" />
        <br />street:
        <br />
        <input type="text" name="street" v-model="OneItem.street" />
        <br />street2:
        <br />
        <input type="text" name="street2" v-model="OneItem.street2" />
        <br />city:
        <br />
        <input type="text" name="city" v-model="OneItem.city" />
        <br />state:
        <br />
        <input type="text" name="state" v-model="OneItem.state" />
        <br />zip:
        <br />
        <input type="text" name="zip" v-model="OneItem.zip" />
        <br />country:
        <br />
        <input type="text" name="country" v-model="OneItem.country" />
        <br />phone:
        <br />
        <input type="text" name="phone" v-model="OneItem.phone" />
        <br />Account:
        <br />
        <select v-model="OneItem.OrgAccountTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgAccountTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />Farm Type:
        <br />
        <select v-model="OneItem.OrgFarmTypeId">
          <option v-bind:key="item.id" v-for="item in OrgFarmTypes" :value="item.id">{{item.name}}</option>
        </select>
        <br />Invoicing:
        <br />
        <select v-model="OneItem.OrgInvoicingTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgInvoicingTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />Market:
        <br />
        <select v-model="OneItem.OrgMarketId">
          <option v-bind:key="item.id" v-for="item in OrgMarkets" :value="item.id">{{item.name}}</option>
        </select>
        <br />Service Plan:
        <br />
        <select v-model="OneItem.OrgServicePlanTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgServicePlanTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />ST101 Type:
        <br />
        <select v-model="OneItem.OrgST101TypeId">
          <option v-bind:key="item.id" v-for="item in OrgST101Types" :value="item.id">{{item.name}}</option>
        </select>
        <br />
        <button type="submit" name="button">Submit</button>
        <button type="button" name="deletebutton" v-on:click="deleteitem">Delete</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";
import Router from "vue-router";

export default {
  name: "EditOrganizations",
  components: {
    //SubHeaderCustomers
  },
  data() {
    return {
      OneItem: [],
      OrgAccountTypes: [],
      OrgFarmTypes: [],
      OrgInvoicingTypes: [],
      OrgMarkets: [],
      OrgServicePlanTypes: [],
      OrgST101Types: []
    };
  },
  created() {
    axios
      .get(this.$apiURL + "OrgAccountTypes")
      .then(res => (this.OrgAccountTypes = res.data));
    axios
      .get(this.$apiURL + "OrgFarmTypes")
      .then(res => (this.OrgFarmTypes = res.data));
    axios
      .get(this.$apiURL + "OrgInvoicingTypes")
      .then(res => (this.OrgInvoicingTypes = res.data));
    axios
      .get(this.$apiURL + "OrgMarkets")
      .then(res => (this.OrgMarkets = res.data));
    axios
      .get(this.$apiURL + "OrgServicePlanTypes")
      .then(res => (this.OrgServicePlanTypes = res.data));
    axios
      .get(this.$apiURL + "OrgST101Types")
      .then(res => (this.OrgST101Types = res.data));
    axios
      .get(this.$apiURL + "organizations/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "organizations/" + this.$route.params.id);
      this.$router.push("/Customers/Organizations");
    },
    postNow: function() {
      axios
        .post(
          this.$apiURL + "organizations/" + this.$route.params.id + "/update",
          {
            data: this.OneItem
          }
        )
        .then(
          setTimeout(
            function() {
              this.$router.push("/Customers/Organizations");
            }.bind(this),
            1000
          )
        )
        // .then(this.$router.push("/Customers/Organizations"))
        .catch(function(error) {
          console.log(error);
        });
    }
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