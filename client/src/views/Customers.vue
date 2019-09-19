<template>
  <div>
    <div class="about">
      <h1>Customers</h1>
      <p>This is and awesome App</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Router from "vue-router";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";

export default {
  name: "Customers",
  components: {
    //SubHeaderCustomers
  },
  data() {
    return {
      OneItem: []
    };
  },
  
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