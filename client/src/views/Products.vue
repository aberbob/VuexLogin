<template>
  <div class="items">
    <!-- Use text in props -->
    <div class="container-fluid">
      <h3>Products - Total: {{ rows }}</h3>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search...">
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Group</th>
            <th>Partnumber</th>
            <th>Description</th>
            <th>Notes</th>
            <th>UOM</th>
            <th>Listprice</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredList" v-bind:key="row.id">
            <td>{{row.id}}</td>
            <td>{{row.category}}</td>
            <td>{{row.group}}</td>
            <td>{{row.partnumber}}</td>
            <td>{{row.description}}</td>
            <td>{{row.notes}}</td>
            <td>{{row.uom}}</td>
            <td>{{row.listprice}}</td>
            <td>
              <a v-bind:href="'products/' + row.id">Edit</a>
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
  name: "Items",
  components: {
    //SubHeaderProducts
  },
  data() {
    return {
      AllItems: [],
      search: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "products/")
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
          item.description.toLowerCase().match(this.search.toLowerCase()) ||
          item.partnumber.toLowerCase().match(this.search.toLowerCase()) ||
          item.description.toLowerCase().match(this.search.toLowerCase())
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