<template>
  <div>
    <b-container fluid id="TableHeader">
      <!-- User Interface controls -->
      <b-row>
        <b-col md="6" class="my-1">
          <!-- <router-link class="mr-1" size="sm" to="/NewWorkOrder" tag="button">NewWorkOrder</router-link>
          <b-button class="mr-1" size="sm">New</b-button>-->
          <!-- <router-link to="/NewWorkOrder">
            <b-button class="mr-1" size="sm">New</b-button>
          </router-link>-->
          <b-button v-b-modal.newworkorder class="mr-1" size="sm">New</b-button>
          <b-button @click="Refresh" class="mr-1" size="sm">Refresh</b-button>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Search..."></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1"></b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        id="Table"
        show-empty
        stacked="md"
        :items="MarketItems"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template slot="name" slot-scope="row">{{ row.item.id }}</template>

        <!-- <template slot="test" slot-scope="row">
          <a size="sm" @click="info(row.item, row.item.id, $event.target)" class="mr-1">Edit</a>
        </template>-->

        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="info(row.item, row.item.id, $event.target)" class="mr-1">Edit</b-button>
          <b-button
            size="sm"
            @click="row.toggleDetails"
          >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            <ul>
              <h5>Notes:</h5>
              <h6>{{row.item.body}}</h6>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
    <!-- Edit modal -->
    <b-container fluid>
      <b-modal
        size="lg"
        :id="infoModal.id"
        :title="infoModal.title"
        @hide="resetInfoModal"
        @ok="postEdit"
      >
        <div v-if="infoModal.content.WOCategoriesId == '6'">
          <b-button @click="CreateInspection();" v-if="!infoModal.inspection">Create Inspection</b-button>
          <b-button
            v-bind:href="'/EquipmentInspectionEdit/wo/' + infoModal.content.id"
            v-if="infoModal.inspection"
          >View Inspection</b-button>
        </div>
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
                <b-select
                  id="input-horizontal"
                  class="ipt-category"
                  v-model="infoModal.content.WOCategoriesId"
                >
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
                <b-select
                  id="input-horizontal"
                  class="ipt-category"
                  v-model="infoModal.content.WOPrioritiesId"
                >
                  <option
                    v-bind:key="org.id"
                    v-for="org in WOPriorities"
                    :value="org.id"
                  >{{org.name}}</option>
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
                <b-select
                  id="input-horizontal"
                  class="ipt-category"
                  v-model="infoModal.content.WOStatusesId"
                >
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
                  v-model="infoModal.content.CustOrganizationsId"
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
                  v-model="infoModal.content.EquipmentProfilesId"
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
                  v-model="infoModal.content.description"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <b-row no-gutters class="mt-2">
            <b-col md="3" class="label-note">
              <b-form-group
                label-cols-sm="12"
                label-cols-lg="12"
                label-align-sm="right"
                label="Notes:"
                label-class="pr-3"
                label-for="input-horizontal"
              ></b-form-group>
            </b-col>
            <b-col md="6" class="label-note">
              <b-form-group>
                <b-form-input id="input-horizontal" v-model="note" class="ipt-notes"></b-form-input>
              </b-form-group>
            </b-col>
            <b-button variant="success" @click="addUser" class="btn-add">Add</b-button>
          </b-row>

          <b-row no gutters class="mt-2">
            <b-col md="10" sm="12" lg="10" offset-md="1" offset-lg="1">
              <b-table responsive :items="items" :fields="notefields" :tbody-tr-class="rowClass"></b-table>
            </b-col>
          </b-row>
        </b-card>
        <div slot="modal-footer" class="modal-footer">
          <button
            type="submit"
            class="btn btn-success"
            @click="postEdit(); closeModal($event.target);"
          >Save</button>
          <button
            type="button"
            class="btn btn-default"
            @click="resetInfoModal(); closeModal($event.target);"
          >Cancel</button>
        </div>
      </b-modal>
    </b-container>
    <NewWorkOrder />
  </div>
</template>

<script>
import axios from "axios";
import NewWorkOrder from "./WorkOrderNew.vue";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "Market",
  components: {
    NewWorkOrder
  },
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "Title",
          class: "text-center",
          sortable: true
        },
        { key: "price", label: "Price", class: "text-center", sortable: true },
        { key: "CCId", label: "Seller" },
        { key: "actions", label: "Actions" }
      ],
      MarketItems: [],
      search: "",
      totalRows: 1,
      currentPage: 1,
      perPage: 25,
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
        inspection: []
      },
      NewItem: {
        id: "NewItem",
        title: "New Work Order",
        content: ""
      },
      note: ""
    };
  },
  created() {
    axios
      .get(this.$apiURL + "marketitems")
      .then(res => (this.MarketItems = res.data));
    //.catch(err => console.log(err));
  },
  methods: {
    Refresh() {
      axios
        .get(this.$apiURL + "marketitems")
        .then(res => (this.MarketItems = res.data));
    },
    postnew: function() {
      //console.log(this.NewItem.content);
      axios
        .post(this.$apiURL + "workorders/add", {
          data: this.NewItem.content
        })
        .then(this.$router.push("/login"))
        .catch(function(error) {
          console.log(error);
        });
    },
    info(item, index, button) {
      this.infoModal.title = `Edit Work Order: ${index}`;
      axios
        .get(this.$apiURL + "workorders/" + index)
        .then(res => (this.infoModal.content = res.data));
      axios
        .get(this.$apiURL + "EquipmentInspections/wo/" + index)
        .then(res => (this.infoModal.inspection = res.data));
      //this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
      this.infoModal.inspection = "";
    },
    closeModal(button) {
      this.$root.$emit("bv::hide::modal", this.infoModal.id, button);
    },
    closeNewModal(button) {
      this.$root.$emit("bv::hide::modal", "NewItem");
    },
    resetNewModal() {
      //this.$bvModal.hide('NewItem')
      this.$root.$emit("bv::hide::modal", "NewItem");
      this.NewItem.content = {};
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.MarketItems.length;
  },
  computed: {}
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
#Table {
  width: 98%;
  border-spacing: px;
  padding-top: 10px;
}
#TableHeader {
  width: 98%;
  border-spacing: px;
  padding-top: 10px;
}
</style>