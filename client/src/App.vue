<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  name: "app",
  components: {
    Header
  }
};
</script>


<style>
body {
  padding-right: 0px !important; /* Keeps b-modals from messing with the nav bar */
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  padding-left: 10px;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>