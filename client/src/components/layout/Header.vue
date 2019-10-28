<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Sagely Sown</b-navbar-brand>
      <b-collapse v-if="isLoggedIn" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/workorders">Work Orders</b-nav-item>
          <b-nav-item href="/parts">Parts</b-nav-item>
          <b-nav-item href="/InventoryLocations">Inventory Locations</b-nav-item>
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
        <b-nav-item-dropdown v-if="userAuthLevel == '5'" text="Admin">
          <b-dropdown-item href="/NewInventoryLocation">Add Location</b-dropdown-item>
          <b-dropdown-item href="/Customers/NewOrganization">Add Organization</b-dropdown-item>
          <b-dropdown-item href="/Customers/NewContact">Add Contact</b-dropdown-item>
          <b-dropdown-item href="/Parts/NewPart">New Part</b-dropdown-item>
          <!-- <b-dropdown-item href="/Customers/ContactStatuses">New Contact Status</b-dropdown-item> -->
          <b-dropdown-item href="/Customers/NewEquipmentProfile">New Equipment Profile</b-dropdown-item>
          <!-- <b-dropdown-item href="/NewWorkOrder">New Work Order</b-dropdown-item> -->
        </b-nav-item-dropdown>
        <b-nav-item v-if="isLoggedIn" href="/Market">Market</b-nav-item>
        <b-nav-item v-if="isLoggedIn" v-b-modal.cart>Cart</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" href="/login">Login</b-nav-item>
        <b-nav-item-dropdown v-if="isLoggedIn" text="User" right>
          <b-dropdown-item disabled>{{this.$store.getters.user.name}}</b-dropdown-item>
          <b-dropdown-item>Settings</b-dropdown-item>
          <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <b-modal
      id="cart"
      ref="modal"
      title="Cart"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <CartView />
    </b-modal>
  </div>
</template>

<script>
import CartView from "../../views/Cart.vue";

export default {
  components: { CartView },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    Name: function() {
      return this.$store.getters.name;
    },
    userAuthLevel: function() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.getters.user.authLevel;
      } else {
        return "0";
      }
    }
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