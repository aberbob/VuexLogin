<template>
  <div class="planter">
    <h1>{{ msg }}</h1>
    <table id="contactsTable" class="table table-bordered table-hover table-sm">
      <thead class="thead-dark">
        <tr>
          <th>Date</th>
          <th></th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in EIHistory" v-bind:key="row.id">
          <td>{{row.date}}</td>
          <td>{{row.measurements}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";

export default {
  name: "History",
  components: {
    Datepicker
  },
  props: {
    msg: String
  },
  computed: {
  },
  data() {
    return {
      Equipment: [],
      EIHistory: [],
    };
  },
  methods: {
    
  },
  created() {
    axios
      .get(this.$apiURL + "EquipmentInspections/" + this.$route.params.id)
      .then(res => (this.EIHistory = res.data));
    axios
      .get(this.$apiURL + "equipmentprofiles/" + this.$route.params.id)
      .then(res => (this.Equipment = res.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
