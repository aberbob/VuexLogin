 <template>
  <div>
    <fieldset>
      <legend>
        <h2>Edit Contact</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        First Name:
        <br>
        <input type="text" name="partnumber" v-model="OneItem.fn" required>
        <br>Last Name:
        <br>
        <input type="text" name="description" v-model="OneItem.ln" required>
        <br>Email:
        <br>
        <input type="text" name="description" v-model="OneItem.email" required>
        <br>Phone Number:
        <br>
        <input type="text" name="group" v-model="OneItem.phonenumber">
        <br>Organization:
        <select v-model="OneItem.CustOrganizationId">
          <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
        </select>
        <br>Status:
        <select v-model="OneItem.CustContactStatusId">
          <option
            v-bind:key="status.id"
            v-for="status in AllStatuses"
            :value="status.id"
          >{{status.name}}</option>
        </select>
        <br>
        <button type="submit" name="button">Submit</button>
        <button type="button" name="deletebutton" v-on:click="deleteitem">Delete</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
//import Header from "../components/layout/Header.vue";
import SubHeaderCustomers from "../components/layout/SubHeaderCustomers.vue";
import Router from "vue-router";

export default {
  name: "EditContacts",
  components: {
    SubHeaderCustomers
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
      .get(this.$apiURL + "organizations")
      .then(res => (this.AllOrgs = res.data));
    axios
      .get(this.$apiURL + "contacts/" + this.$route.params.id)
      .then(res => (this.OneItem = res.data));
    axios
      .get(this.$apiURL + "custcontactstatuses")
      .then(res => (this.AllStatuses = res.data));
    //.catch(err => console.log(err));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "contacts/" + this.$route.params.id);
      this.$router.push("/Customers/Contacts");
    },
    postNow: async function() {
      await axios.post(
        this.$apiURL + "contacts/" + this.$route.params.id + "/update",
        {
          data: this.OneItem
        }
      );
      this.$router.push("/Customers/Contacts");
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