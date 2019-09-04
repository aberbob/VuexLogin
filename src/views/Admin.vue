<template>
  <div>
    <h2>Admin</h2>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import SubHeaderAdmin from "../components/layout/SubHeaderAdmin.vue";

export default {
  name: "Contacts",
  components: {
    SubHeaderAdmin
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
#contactsTable {
  width: 90%;
  border-spacing: px;
}
</style>