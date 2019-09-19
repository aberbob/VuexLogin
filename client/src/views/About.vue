<template>
  <div class="about">
    <h1>About</h1>
    <p>This is and awesome App</p>
    <p>welcome {{user.username}}</p>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
//import SubHeaderAdmin from "../components/layout/SubHeaderAdmin.vue";

export default {
  data: () => ({
    user: {}
  }),
  mounted() {
    console.log(localStorage.token);
    fetch("http://sagelysown.owlinventory.com/auth", {
      headers: {
        authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(result => {
        if (result.user) {
          this.user = result.user;
        } else {
          localStorage.removeItem("token");
          this.$route.push("/login");
        }
        console.log(result);
      });
  },
  name: "Contacts",
  components: {
    //SubHeaderAdmin
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