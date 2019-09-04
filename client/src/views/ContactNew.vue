<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Add Contact</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        <br>First Name:
        <input type="text" name="description" v-model="OneCustomer.fn">
        <br>Last Name:
        <input type="text" name="group" v-model="OneCustomer.ln">
        <br>Email:
        <input type="text" name="description" v-model="OneCustomer.email">
        <br>Phone Number:
        <input type="text" name="category" v-model="OneCustomer.phonenumber">
        <br>Organization:
        <select v-model="OneCustomer.CustOrganizationId">
          <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
        </select>
        <br>Status:
        <select v-model="OneCustomer.CustContactStatusId">
          <option
            v-bind:key="status.id"
            v-for="status in AllStatuses"
            :value="status.id"
          >{{status.name}}</option>
        </select>
        <br>
        <button type="submit" name="button">Submit</button>
      </form>
      {{OneCustomer}}
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default { 
  name: "NewContact",
  components: {
    SubHeaderCustomers
  },
  data() {
    return {
      AllStatuses: [],
      AllOrgs: []
    };
  },
  methods: {
    postNow: async function() {
      await axios.post(this.$apiURL + "contacts/add", {
        data: this.OneCustomer
      });
      this.$router.push("/Customers/Contacts");
      Object.keys(this.OneCustomer).forEach(function(key, index) {
        self.data.form[key] = "";
      });
      //.then(res =>{
      //  console.log(re.data);
      //});
    }
  },
  created() {
    axios
      .get(this.$apiURL + "organizations")
      .then(res => (this.AllOrgs = res.data));
    axios
      .get(this.$apiURL + "custcontactstatuses")
      .then(res => (this.AllStatuses = res.data));
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