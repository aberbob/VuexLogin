<template>
  <div class="items">
    <div class="title">
      <h1>Transfers</h1>
      <p class="mt-3">Total: {{ rows }}</p>
    </div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search...">
    </div>
    
     <!-- Use text in props -->
    Unfulfilled Transfers:
    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Org</th>
          <th>Source</th>
          <th>Dest</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredList" v-bind:key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.CustOrganizationId}}</td>
          <td>{{row.source}}</td>
          <td>{{row.destination}}</td>
          <td>
            <a v-bind:href="'contacts/'+ row.id">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
    Completed Transfers:
    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Org</th>
          <th>Source</th>
          <th>Dest</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredCList" v-bind:key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.CustOrganizationId}}</td>
          <td>{{row.source}}</td>
          <td>{{row.destination}}</td>
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
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "Transfers",
  components: {
    //SubHeaderCustomers
  },
  methods: {},
  data() {
    return {
      CompletedTransfers: [],
      Transfers: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "transfers")
      .then(res => (this.CompletedTransfers = res.data));
    axios
      .get(this.$apiURL + "transfers")
      .then(res => (this.Transfers = res.data));
    //.then(res => (console.log(res.data)));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.Transfers.filter(item => {
        return (
          item.id.toLowerCase().match(this.search.toLowerCase()) ||
          item.CustOrganizationId.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    filteredCList() {
      return this.CompletedTransfers.filter(item => {
        return (
          item.CustOrganizationId.toLowerCase().match(this.search.toLowerCase()) ||
          item.id.toLowerCase().match(this.search.toLowerCase())
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