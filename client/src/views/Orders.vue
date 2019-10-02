<template>
  <div class="items">
    <div class="title">
      <h1>Orders</h1>
      <p class="mt-3">Total: {{ rows }}</p>
    </div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search...">
    </div>
    
    <!-- Use text in props -->
    Unfulfilled Orders:
    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Org</th>
          <th>Total</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredList" v-bind:key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.COname}}</td>
          <td>{{row.total}}</td>
          <td>{{row.Sname}}</td>
          <td>
            <a>Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
    Completed Orders:
    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Org</th>
          <th>Total</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredCList" v-bind:key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.COname}}</td>
          <td>{{row.total}}</td>
          <td>{{row.Sname}}</td>
          <td>
            <a>Edit</a>
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
  name: "Orders",
  components: {
    //SubHeaderCustomers
  },
  methods: {},
  data() {
    return {
      CompletedOrders: [],
      Orders: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "contacts/alldetails")
      .then(res => (this.CompletedOrders = res.data));
    axios
      .get(this.$apiURL + "custcontactstatuses")
      .then(res => (this.Orders = res.data));
    //.then(res => (console.log(res.data)));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.Orders.filter(item => {
       return (
          item.COname.toLowerCase().match(this.search.toLowerCase()) ||
          item.id.toLowerCase().match(this.search.toLowerCase()) ||
          item.total.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    filteredCList() {
      return this.CompletedOrders.filter(item => {
        return (
          item.COname.toLowerCase().match(this.search.toLowerCase()) ||
          item.id.toLowerCase().match(this.search.toLowerCase()) ||
          item.total.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>
<style scoped>
.subheader {
  background: rgb(255, 158, 158);
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