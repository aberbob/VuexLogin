<template>
  <div class="Productssubheader">
      <router-link to="/Products/NewProduct">Add</router-link>|
      <router-link to="/Products">Categories</router-link>
    </div>
</template>

<script>
export default {
  name: "Productssubheader"
}
</script>

<style scoped>
  .Productssubheader {
    background: rgb(105, 105, 105);
  color: #fff;
  text-align: center;
  padding: 0px;
  }
  .Productssubheader a {
    color: #fff;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
  }
</style>