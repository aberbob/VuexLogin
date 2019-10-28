<template>
  <div>
    <fieldset>
      <legend>
        <h2 id="EditItemID">Edit ID: {{OneItem.id}}</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Partnumber:
        <br />
        <input type="text" name="partnumber" v-model="OneItem.partnumber" />
        <br />Description:
        <br />
        <input type="text" name="description" v-model="OneItem.description" />
        <br />Category:
        <br />
        <select v-model="OneItem.PartsCategoriesId">
          <option v-bind:key="item.id" v-for="item in PartCategories" :value="item.id">{{item.name}}</option>
        </select>
        <br />SubCategory:
        <br />
        <select v-model="OneItem.PartsSubcategoriesId">
          <option
            v-bind:key="item.id"
            v-for="item in PartSubcategoriesCalc"
            :value="item.id"
          >{{item.name}}</option>
        </select>
        <br />Notes:
        <br />
        <input type="text" name="notes" v-model="OneItem.notes" />
        <br />UOM:
        <br />
        <input type="text" name="uom" v-model="OneItem.uom" />
        <br />ListPrice:
        <br />
        <input type="text" name="listprice" v-model="OneItem.listprice" />
        <br />
        <button type="submit" name="button">Submit</button>
        <button type="button" name="deletebutton" v-on:click="deleteitem">Delete</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Router from "vue-router";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "EditPart",
  components: {
    //SubHeaderProducts
  },
  data() {
    return {
      OneItem: [],
      PartCategories: [],
      PartSubcategories: [],
    };
  },
  created() {
    axios
      .get(this.$apiURL + "PartCategories")
      .then(res => (this.PartCategories = res.data));
    axios
      .get(this.$apiURL + "PartSubcategories")
      .then(res => (this.PartSubcategories = res.data));
    axios
      .get(this.$apiURL + "parts/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "parts/" + this.$route.params.id);
      this.$router.push("/parts");
    },
    postNow: function() {
      axios
        .post(this.$apiURL + "parts/" + this.$route.params.id + "/update", {
          data: this.OneItem
        })
        .then(
          setTimeout(
            function() {
              this.$router.push("/parts");
            }.bind(this),
            1000
          )
        )
        // .then(this.$router.push("/parts"))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    PartSubcategoriesCalc() {
      return this.PartSubcategories.filter(item => {
        return (
          item.PartsCategoriesId == this.OneItem.PartsCategoryId
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
.newitemform {
  size: 100%;
}
#EditItemID {
  margin-top: 20px;
}
</style>