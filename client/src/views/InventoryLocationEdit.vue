 <template>
  <div>
    <fieldset>
      <legend>
        <h2>Edit Contact</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        <br />Name:
        <input type="text" name="description" v-model="OneItem.name" />
        <br />Street:
        <input type="text" name="group" v-model="OneItem.street" />
        <br />Street2:
        <input type="text" name="description" v-model="OneItem.street2" />
        <br />City:
        <input type="text" name="category" v-model="OneItem.city" />
        <br />State:
        <input type="text" name="category" v-model="OneItem.state" />
        <br />Zipcode:
        <input type="text" name="category" v-model="OneItem.zipcode" />
        <br />
        <button type="submit" name="button">Submit</button>
        <button type="button" name="deletebutton" v-on:click="deleteitem">Delete</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
//import Header from "../components/layout/Header.vue";
//import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";
import Router from "vue-router";

export default {
  name: "EditContacts",
  components: {
    //SubHeaderCustomers
    //Header
  },
  data() {
    return {
      AllStatuses: [],
      AllOrgs: [],
      OneItem: {}
    };
  },
  created() {
    axios
      .get(this.$apiURL + "InventoryLocations/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
    //.catch(err => console.log(err));
  },
  methods: {
    deleteitem: function() {
      axios.delete(
        this.$apiURL + "InventoryLocations/" + this.$route.params.id
      );
      this.$router.push("/InventoryLocations");
    },
    postNow: async function() {
      await axios.post(
        this.$apiURL +
          "InventoryLocations/" +
          this.$route.params.id +
          "/update",
        {
          data: this.OneItem
        }
      )
      .then(
          setTimeout(
            function() {
              this.$router.push("/InventoryLocations");
            }.bind(this),
            1000
          )
        );
      // .then(this.$router.push("/InventoryLocations"))
      //.then(res =>{
      //  console.log(re.data);
      //});
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
.newitemform {
  size: 100%;
}
#EditItemID {
  margin-top: 20px;
}
</style>