<template>
  <div class="items">
    <!-- Use text in props -->
    <div class="container-fluid">
      <h3>Locations</h3>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search...">
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Street</th>
            <th>Street2</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in AllItems" v-bind:key="row.id">
            <td>{{row.name}}</td>
            <td>{{row.street}}</td>
            <td>{{row.street2}}</td>
            <td>{{row.city}}</td>
            <td>{{row.state}}</td>
            <td>{{row.zipcode}}</td>
            <td>
              <a v-bind:href="'LocationInventory/' + row.id">Inventory</a>
              <a v-bind:href="'InventoryLocations/' + row.id">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "InventoryLocations",
  components: {
    //SubHeaderProducts
  },
  data() {4
    return {
      AllItems: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "InventoryLocations/")
      .then(res => (this.AllItems = res.data));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.AllItems.filter(item => {
        return (
          item.InventoryLocationsname.toLowerCase().match(this.search.toLowerCase())
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
#itemsTable {
  width: 90%;
  border-spacing: px;
}
</style>