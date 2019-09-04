<template>
  <div class="items">
    <div class="title">
      <h1>Contacts</h1>
      <p class="mt-3">Total: {{ rows }}</p>
    </div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search...">
    </div>
    
    <!-- Use text in props -->

    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Organization</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredList" v-bind:key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.fn}}</td>
          <td>{{row.ln}}</td>
          <td>{{row.email}}</td>
          <td>{{row.phonenumber}}</td>
          <td>{{row.CustOrganizationId}}</td>
          <td>{{row.CustContactStatusId}}</td>
          <td>
            <a v-bind:href="'contacts/'+ row.id">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "Contacts",
  components: {
    SubHeaderCustomers
  },
  methods: {},
  data() {
    return {
      AllContacts: [],
      AllStatuses: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "contacts")
      .then(res => (this.AllContacts = res.data));
    axios
      .get(this.$apiURL + "custcontactstatuses")
      .then(res => (this.AllStatuses = res.data));
    //.then(res => (console.log(res.data)));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.AllContacts.filter(item => {
        return (
          item.fn.toLowerCase().match(this.search.toLowerCase()) ||
          item.ln.toLowerCase().match(this.search.toLowerCase())
        );
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
.title {
  display: inline; 
}
#contactsTable {
  width: 90%;
  border-spacing: px;
  margin: auto;
}
</style>