<template>
  <div class="userssubheader">
      <router-link to="/adduser">Add User</router-link>
    </div>
</template>

<script>
export default {
  name: "SubHeaderUsers"
}
</script>

<style scoped>
  .userssubheader {
    background: rgb(105, 105, 105);
  color: #fff;
  text-align: center;
  padding: 0px;
  }
  .userssubheader a {
    color: #fff;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
  }
</style>