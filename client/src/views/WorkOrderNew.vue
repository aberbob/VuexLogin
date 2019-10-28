<template>
  <b-modal
    size="lg"
    id="newworkorder"
    ref="modal"
    title="New Work Order"
    @show="resetNewModal"
    @hidden="resetNewModal"
    @ok="postNow"
  >
    <div class="body">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 1200px; min-height: 500px; padding: 20px;"
      >
        <b-row no-gutters class="mt-2 mr-3">
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Category:"
              label-for="input-horizontal"
              label-class="pl-0"
            >
              <b-select id="input-horizontal" class="ipt-category" v-model="OneItem.WOCategoriesId">
                <option
                  v-bind:key="status.id"
                  v-for="status in WOCategories"
                  :value="status.id"
                >{{status.name}}</option>
              </b-select>
            </b-form-group>
          </b-col>
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Priority:"
              label-for="input-horizontal"
            >
              <b-select id="input-horizontal" class="ipt-category" v-model="OneItem.WOPrioritiesId">
                <option v-bind:key="org.id" v-for="org in WOPriorities" :value="org.id">{{org.name}}</option>
              </b-select>
            </b-form-group>
          </b-col>
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Status:"
              label-for="input-horizontal"
            >
              <b-select id="input-horizontal" class="ipt-category" v-model="OneItem.WOStatusesId">
                <option
                  v-bind:key="status.id"
                  v-for="status in WOStatuses"
                  :value="status.id"
                >{{status.name}}</option>
              </b-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row no-gutters class="mt-2 mr-3">
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Org:"
              label-for="input-horizontal"
            >
              <b-select
                id="input-horizontal"
                class="ipt-category"
                v-model="OneItem.CustOrganizationsId"
              >
                <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
              </b-select>
            </b-form-group>
          </b-col>
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Equip:"
              label-for="input-horizontal"
            >
              <b-select
                id="input-horizontal"
                class="ipt-category"
                v-model="OneItem.EquipmentProfilesId"
              >
                <option
                  v-bind:key="status.id"
                  v-for="status in EquipmentProfiles"
                  :value="status.id"
                >{{status.name}}</option>
              </b-select>
            </b-form-group>
          </b-col>
          <b-col md="4" class="fist_row">
            <b-form-group
              label-cols-sm="5"
              label-cols-lg="4"
              label-align-sm="right"
              label="Tech:"
              label-for="input-horizontal"
            >
              <b-form-input id="input-horizontal" v-model="tech" class="ipt-tech"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row no-gutters class="mt-2">
          <b-col md="3" align-self="center" class="thd-description" style="text-align: center">
            <b-form-group
              label-cols-sm="12"
              label-cols-lg="12"
              label-align-sm="right"
              label-class="pr-3"
              label="Description:"
              label-for="input-horizontal"
            ></b-form-group>
          </b-col>
          <b-col md="6" align-self="center" class="thd-description" style="text-align: center">
            <b-form-group>
              <b-input
                class="ipt-description"
                id="input-horizontal"
                type="text"
                name="partnumber"
                v-model="OneItem.description"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </b-modal>
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
      OneItem: {}
    };
  },
  methods: {
    resetNewModal() {
      this.OneItem = {};
    },
    postNow: function() {
      axios
        .post(this.$apiURL + "workorders/add", {
          data: this.OneItem
        })
        .then(
          setTimeout(
            function() {
              this.$parent.Refresh();
              // this.$router.push("/workorders");
            }.bind(this),
            500
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