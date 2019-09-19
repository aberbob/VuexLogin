<template>
  <div class="items">
    <!-- Use text in props -->
    <div class="container-fluid">
      <h3>Part: {{ this.$route.params.id }}</h3>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search..." />
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Location</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in AllItems" v-bind:key="row.PartId">
            <td>{{row.ILname}}</td>
            <td>{{row.qty}}</td>
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
  name: "PartsLocationQty",
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
      .get(this.$apiURL + "parts/" + this.$route.params.id + "/availability")
      // .then(res => (console.log(res.data)));
      .then(res => (this.AllItems = res.data));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.AllItems.length;
    },
    filteredList() {
      return this.AllItems.filter(item => {
        return (
          item.InventoryLocationId.match(this.search)
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
  width: 80%;
  border-spacing: px;
}
</style>