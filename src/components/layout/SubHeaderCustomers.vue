<template>
  <div class="customerssubheader">
      <router-link to="/Customers/NewOrganization">Add Organization</router-link>|
      <router-link to="/Customers/Organizations">Organizations</router-link>|
      <router-link to="/Customers/Contacts">Contacts</router-link>|
      <router-link to="/Customers/NewContact">Add Contact</router-link>
    </div>
</template>

<script>
export default {
  name: "SubHeaderCustomers"
}
</script>

<style scoped>
  .customerssubheader {
    background: rgb(105, 105, 105);
  color: #fff;
  text-align: center;
  padding: 0px;
  }
  .customerssubheader a {
    color: #fff;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
  }
</style>