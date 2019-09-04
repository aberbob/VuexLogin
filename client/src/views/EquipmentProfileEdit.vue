<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Edit ID: {{OneItem.id}}</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Name:
        <br>
        <input type="text" name="name" v-model="OneItem.name">
        <br>Organization:
        <select v-model="OneItem.CustOrganizationId">
          <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
        </select>
        <br>Make:
        <br>
        <input type="text" name="make" v-model="OneItem.make">
        <br>Model:
        <br>
        <input type="text" name="model" v-model="OneItem.model">
        <br>Row QTY:
        <br>
        <input type="text" name="rowqty" v-model="OneItem.rowqty">
        <br>DownForce:
        <br>
        <input type="text" name="downforce" v-model="OneItem.downforce">
        <br>Monitor:
        <br>
        <input type="text" name="monitor" v-model="OneItem.monitor">
        <br>DriveType:
        <br>
        <input type="text" name="drivetype" v-model="OneItem.drivetype">
        <br>Meter:
        <br>
        <input type="text" name="meter" v-model="OneItem.meter">
        <br>Harnessing:
        <br>
        <input type="text" name="harnessing" v-model="OneItem.harnessing">
        <br>LiquidInsecticide:
        <br>
        <input type="text" name="liquidinsecticide" v-model="OneItem.liquidinsecticide">
        <br>
        <button type="submit" name="button">Submit</button>
        <button type="button" name="deletebutton" v-on:click="deleteitem">Delete</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Router from "vue-router";
import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "Editproduct",
  components: {
    SubHeaderProducts
  },
  data() {
    return {
      OneItem: [],
      AllOrgs: []
    };
  },
  created() {
    axios
      .get(this.$apiURL + "equipmentprofiles/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
    axios
      .get(this.$apiURL + "organizations")
      .then(res => (this.AllOrgs = res.data));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "equipmentprofiles/" + this.$route.params.id);
      this.$router.push("/Customers/EquipmentProfiles");
    },
    postNow: function() {
      axios
        .post(
          this.$apiURL +
            "equipmentprofiles/" +
            this.$route.params.id +
            "/update",
          {
            data: this.OneItem
          }
        )
        .then(this.$router.push("/Customers/EquipmentProfiles"))
        .catch(function(error) {
          console.log(error);
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
.newitemform {
  size: 100%;
}
#EditItemID {
  margin-top: 20px;
}
</style>