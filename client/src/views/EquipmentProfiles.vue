<template>
  <div class="items">
    <!-- Use text in props -->
    <div class="container-fluid">
      <h3>Equipment Profiles - Total: {{ rows }}</h3>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search..." />
      </div>
      <table class="table table-bordered table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Make</th>
            <th>Model</th>
            <th>Row QTY</th>
            <th>Harnessing</th>
            <th>Closing Wheels</th>
            <th>Seed Tubes</th>
            <th>Seed Firmers</th>
            <th>Monitor</th>
            <th>Meter</th>
            <th>Liquid</th>
            <th>Drives</th>
            <th>Insecticide</th>
            <th>Down Force</th>
            <th>Depth Adjust</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredList" v-bind:key="row.id">
            <td>{{row.name}}</td>
            <td>{{row.COname}}</td>
            <td>{{row.make}}</td>
            <td>{{row.model}}</td>
            <td>{{row.rowqty}}</td>
            <td>{{row.PHName}}</td>
            <td>{{row.PCWname}}</td>
            <td>{{row.PSTname}}</td>
            <td>{{row.PSFname}}</td>
            <td>{{row.PMonname}}</td>
            <td>{{row.PMname}}</td>
            <td>{{row.PLname}}</td>
            <td>{{row.PDname}}</td>
            <td>{{row.PIname}}</td>
            <td>{{row.PDFname}}</td>
            <td>{{row.PDAname}}</td>
            <td>
              <a v-bind:href="'EquipmentProfiles/' + row.id">Edit</a>
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
  name: "EquipmentProfiles",
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
      .get(this.$apiURL + "EquipmentProfiles/alldetails")
      .then(res => (this.AllItems = res.data));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.AllItems.filter(item => {
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
#itemsTable {
  width: 90%;
  border-spacing: px;
}
</style>