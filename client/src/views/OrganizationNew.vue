<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Add Organization</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Name:
        <br />
        <input type="text" name="name" v-model="OneOrganization.CustOrganizationsname" />
        <br />street:
        <br />
        <input type="text" name="street" v-model="OneOrganization.street" />
        <br />street2:
        <br />
        <input type="text" name="street2" v-model="OneOrganization.street2" />
        <br />city:
        <br />
        <input type="text" name="city" v-model="OneOrganization.city" />
        <br />state:
        <br />
        <input type="text" name="state" v-model="OneOrganization.state" />
        <br />zip:
        <br />
        <input type="text" name="zip" v-model="OneOrganization.zip" />
        <br />country:
        <br />
        <input type="text" name="country" v-model="OneOrganization.country" />
        <br />phone:
        <br />
        <input type="text" name="phone" v-model="OneOrganization.phone" />
        <br />Account:
        <br />
        <select v-model="OneOrganization.OrgAccountTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgAccountTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />Farm Type:
        <br />
        <select v-model="OneOrganization.OrgFarmTypeId">
          <option v-bind:key="item.id" v-for="item in OrgFarmTypes" :value="item.id">{{item.name}}</option>
        </select>
        <br />Invoicing:
        <br />
        <select v-model="OneOrganization.OrgInvoicingTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgInvoicingTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />Market:
        <br />
        <select v-model="OneOrganization.OrgMarketId">
          <option v-bind:key="item.id" v-for="item in OrgMarkets" :value="item.id">{{item.name}}</option>
        </select>
        <br />Service Plan:
        <br />
        <select v-model="OneOrganization.OrgServicePlanTypeId">
          <option
            v-bind:key="item.id"
            v-for="item in OrgServicePlanTypes"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />ST101 Type:
        <br />
        <select v-model="OneOrganization.OrgST101TypeId">
          <option v-bind:key="item.id" v-for="item in OrgST101Types" :value="item.id">{{item.name}}</option>
        </select>
        <button type="submit" name="button">Submit</button>
      </form>
    </fieldset>
    {{OneOrganization}}
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header.vue";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "NewOrganization",
  components: {
    //SubHeaderCustomers,
    Header
  },
  data() {
    return {
      //OneOrganization: [],
      OrgAccountTypes: [],
      OrgFarmTypes: [],
      OrgInvoicingTypes: [],
      OrgMarkets: [],
      OrgServicePlanTypes: [],
      OrgST101Types: []
    };
  },
  methods: {
    postNow: function() {
      axios
        .post(this.$apiURL + "organizations/add", {
          data: this.OneOrganization
        })
        .then(
          setTimeout(
            function() {
              this.$router.push("/Customers/Organizations");
            }.bind(this),
            1000
          )
        )
        .catch(function(error) {
          console.log(error);
        });
    }
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
    this.OneOrganization = {};
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