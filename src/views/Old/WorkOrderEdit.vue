<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Edit ID: {{OneItem.id}}</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Partnumber:
        <br>
        <input type="text" name="partnumber" v-model="OneItem.partnumber">
        <br>Description:
        <br>
        <input type="text" name="description" v-model="OneItem.description">
        <br>Group:
        <br>
        <input type="text" name="group" v-model="OneItem.group">
        <br>Category:
        <br>
        <input type="text" name="category" v-model="OneItem.category">
        <br>Notes:
        <br>
        <input type="text" name="notes" v-model="OneItem.notes">
        <br>UOM:
        <br>
        <input type="text" name="uom" v-model="OneItem.uom">
        <br>ListPrice:
        <br>
        <input type="text" name="listprice" v-model="OneItem.listprice">
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
      OneItem: []
    };
  },
  created() {
    axios
      .get(this.$apiURL + "workorders/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "workorders/" + this.$route.params.id);
      this.$router.push("/workorders");
    },
    postNow: function() {
      axios
        .post(this.$apiURL + "workorders/" + this.$route.params.id + "/update", {
          data: this.OneItem
        })
        .then(this.$router.push("/workorders"))
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