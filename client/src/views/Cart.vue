<template>
  <div class="items">
    <!-- Use text in props -->
    <div class="container-fluid">
      <!-- <h3>New Transfer</h3>Partnumber:
      <b-form-input @keyup.enter.native="addRow" v-model="search" list="my-list-id"></b-form-input>
      <datalist id="my-list-id">
        <option
          v-bind:key="part.partnumber"
          v-for="part in this.$store.state.cart"
        >{{ part.partnumber}}</option>
      </datalist>-->
      <table class="table table-bordered table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Partnumber</th>
            <th>Description</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="rows.length > 0">
          <tr v-for="row in rows" v-bind:key="row.PartId">
            <td>{{row.partnumber}}</td>
            <td>{{row.description}}</td>
            <td>
              <input class="item-qty" type="number" v-model="row.qty" @input="persistCart()" />
            </td>
            <td>
              <a @click="removeFromCart(row)">Remove</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!haverows">
        <h5>Nothing in Cart</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "LocationInventory",
  methods: {
    ...mapActions(["persistCart"]),
    addRow() {
      if (filteredList.length == 0) {
        this.rows.push(filteredList[0]); // what to push unto the rows array?
      } else {
        console.log("Can't... needs only one in the search");
      }
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    }
  },
  components: {
    //SubHeaderProducts
  },
  data() {
    return {
      search: "",
      newitem: {},
      NewItems: [],
      partnumbers: []
    };
  },
  created() {
    axios
      .get(this.$apiURL + "parts")
      // .then(res => (console.log(res.data)));
      .then(res => (this.partnumbers = res.data));
    //.catch(err => console.log(err));
    axios
      .get(this.$apiURL + "InventoryLocations/" + this.$route.params.id)
      // .then(res => (console.log(res.data)));
      .then(res => (this.Location = res.data));
    //.catch(err => console.log(err));
  },
  computed: {
    rows() {
      return this.$store.getters.cart;
    },
    haverows() {
      if (this.rows.length > 0) {
        return true;
      }
      return false;
    },
    filteredList() {
      return this.partnumbers.filter(item => {
        return item.partnumber.match(this.search);
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
#itemsTable {
  width: 80%;
  border-spacing: px;
}
input.item-qty {
  width: 40px;
}
</style>