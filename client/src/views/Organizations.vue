<template>
  <div class="items">
    <h1>Organizations</h1>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search...">
    </div>
    <p class="mt-3">Total: {{ rows }}</p>
    <table class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Street</th>
          <th>Street2</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Country</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredList" v-bind:key="row.id">
          <td>{{row.name}}</td>
          <td>{{row.street}}</td>
          <td>{{row.street2}}</td>
          <td>{{row.city}}</td>
          <td>{{row.state}}</td>
          <td>{{row.zip}}</td>
          <td>{{row.country}}</td>
          <td>{{row.phone}}</td>
          <td>
            <a v-bind:href="'organizations/' + row.CustOrganizationsId">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "Organizations",
  components: {
    //SubHeaderCustomers
  },
  data() {
    return {
      AllOrganizations: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "organizations")
      //.then(res => (console.log(res.data)));
      .then(res => (this.AllOrganizations = res.data));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.AllOrganizations.filter(item => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
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
#organizationsTable {
  width: 90%;
  border-spacing: px;
}
</style>