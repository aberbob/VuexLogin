<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Sagely Sown</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/workorders">Work Orders</b-nav-item>
          <b-nav-item href="/products">Products</b-nav-item>

          <b-nav-item-dropdown text="Customers">
            <b-dropdown-item href="/Customers/Organizations">Organizations</b-dropdown-item>
            <b-dropdown-item href="/Customers/Contacts">Contacts</b-dropdown-item>
            <b-dropdown-item href="/Customers/EquipmentProfiles">EquipmentProfiles</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/products">Invoices</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Admin">
          <b-dropdown-item href="/Customers/NewOrganization">Add Organization</b-dropdown-item>
          <b-dropdown-item href="/Customers/NewContact">Add Contact</b-dropdown-item>
          <b-dropdown-item href="/Products/NewProduct">New Product</b-dropdown-item>
          <!-- <b-dropdown-item href="/Customers/ContactStatuses">New Contact Status</b-dropdown-item> -->
          <b-dropdown-item href="/Customers/NewEquipmentProfile">New Equipment Profile</b-dropdown-item>
          <!-- <b-dropdown-item href="/NewWorkOrder">New Work Order</b-dropdown-item> -->
        </b-nav-item-dropdown>
        <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item @click="logouta()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  name: "Header"
};
</script>

<style scoped>
</style>