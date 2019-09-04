<template>
  <div>    
    <fieldset>
      <legend>
        <h2 id="EditItemID">New ID: {{OneItem.id}}</h2>
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
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header.vue";
import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "NewProduct",
  components: {
    Header,
    SubHeaderProducts
  },
  data() {
    return {
    };
  },
  methods: {
    postNow: function() {
        axios
        .post(this.$apiURL + "products/add", {
          data: this.OneItem
        })
        .then(this.$router.push("/products"))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.OneItem = {
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