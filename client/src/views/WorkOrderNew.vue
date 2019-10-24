<template>
  <div class="body">
    <fieldset>
      <!-- <legend>
        <h2 id="EditItemID">New ID: {{OneItem.id}}</h2>
      </legend> -->
      <form method="post" @submit.prevent="postNow">
        Description:
        <br />
        <input type="text" name="partnumber" v-model="OneItem.description" />
        <br />Type:
        <br />
        <input type="text" name="description" v-model="OneItem.type" />
        <br />Notes:
        <br />
        <b-form-textarea
          id="textarea"
          v-model="OneItem.notes"
          placeholder="..."
          rows="3"
          max-rows="3"
        ></b-form-textarea>
        <br />EquipmentProfileId:
        <select v-model="OneItem.EquipmentProfileId">
          <option
            v-bind:key="status.id"
            v-for="status in EquipmentProfiles"
            :value="status.id"
          >{{status.name}}</option>
        </select>
        <br />Category:
        <select v-model="OneItem.WOCategoryId">
          <option
            v-bind:key="status.id"
            v-for="status in WOCategories"
            :value="status.id"
          >{{status.name}}</option>
        </select>
        <br />Status:
        <select v-model="OneItem.WOStatusId">
          <option
            v-bind:key="status.id"
            v-for="status in WOStatuses"
            :value="status.id"
          >{{status.name}}</option>
        </select>
        <br />Organization:
        <select v-model="OneItem.CustOrganizationId">
          <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
        </select>
        <br />Tech:
        <br />
        <input type="text" name="listprice" v-model="OneItem.UserId" />
        <br />Priority:
        <select v-model="OneItem.WOPriorityId">
          <option
            v-bind:key="org.id"
            v-for="org in WOPriorities"
            :value="org.id"
          >{{org.name}}</option>
        </select>
        <br />
        <button type="submit" name="button">Submit</button>
      </form>
      <!-- {{OneItem}} -->
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header.vue";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "NewProduct",
  components: {
    Header
    //SubHeaderProducts
  },
  data() {
    return {
      WOStatuses: [],
      AllOrgs: [],
      WOPriorities: [],
      WOCategories: [],
      EquipmentProfiles: [],
      OneItem: []
    };
  },
  methods: {
    postNow: function() {
      axios
        .post(this.$apiURL + "workorders/add", {
          data: this.OneItem
        })
        .then(
          setTimeout(
            function() {
              this.$router.push("/workorders");
            }.bind(this),
            1000
          )
        )
        // .then(this.$router.push("/workorders"))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    axios
      .get(this.$apiURL + "organizations")
      .then(res => (this.AllOrgs = res.data));
    axios
      .get(this.$apiURL + "WOStatuses")
      .then(res => (this.WOStatuses = res.data));
    axios
      .get(this.$apiURL + "WOPriorities")
      .then(res => (this.WOPriorities = res.data));
    axios
      .get(this.$apiURL + "WOCategories")
      .then(res => (this.WOCategories = res.data));
    axios
      .get(this.$apiURL + "EquipmentProfiles")
      .then(res => (this.EquipmentProfiles = res.data));
    this.OneItem = {};
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

#textarea {
  width: 40%;
}
</style>