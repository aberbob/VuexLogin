<template>
  <b-container fluid id="TableHeader">
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <!-- <router-link class="mr-1" size="sm" to="/NewWorkOrder" tag="button">NewWorkOrder</router-link>
        <b-button class="mr-1" size="sm">New</b-button> -->
        <router-link to="/NewWorkOrder">
          <b-button class="mr-1" size="sm">New</b-button>
        </router-link>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="" class="mb-0">
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
      :items="AllItems"
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

      <template slot="isActive" slot-scope="row">{{ row.item.id }}</template>

      <template slot="actions" slot-scope="row">
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
            <h6>{{row.item.notes}}</h6>
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

    <!-- Edit modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" @hide="resetInfoModal" @ok="postNow">
      <fieldset>
        <form method="post" @submit.prevent="postNow">
          Description:
          <br />
          <input type="text" name="partnumber" v-model="infoModal.content.description" />
          <br />Type:
          <br />
          <input type="text" name="description" v-model="infoModal.content.type" />
          <br />Notes:
          <br />
          <b-form-textarea
            id="textarea"
            v-model="infoModal.content.notes"
            placeholder="..."
            rows="3"
            max-rows="3"
          ></b-form-textarea>
          <input type="text" name="group" v-model="infoModal.content.notes" />
          <br />EquipmentProfileId:
          <select v-model="infoModal.content.EquipmentProfileId">
            <option
              v-bind:key="status.id"
              v-for="status in EquipmentProfiles"
              :value="status.id"
            >{{status.name}}</option>
          </select>
          <br />Category:
          <select v-model="infoModal.content.WOCategoryId">
            <option
              v-bind:key="status.id"
              v-for="status in WOCategories"
              :value="status.id"
            >{{status.name}}</option>
          </select>
          <br />Status:
          <select v-model="infoModal.content.WOStatusId">
            <option
              v-bind:key="status.id"
              v-for="status in WOStatuses"
              :value="status.id"
            >{{status.name}}</option>
          </select>
          <br />Organization:
          <select v-model="infoModal.content.CustOrganizationId">
            <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
          </select>
          <br />Tech:
          <br />
          <input type="text" name="listprice" v-model="infoModal.content.UserId" />
          <br />Prioirty:
          <select v-model="infoModal.content.WOPrioirtyId">
            <option v-bind:key="org.id" v-for="org in WOPriorities" :value="org.id">{{org.name}}</option>
          </select>
        </form>
      </fieldset>
      <div slot="modal-footer" class="modal-footer">
        <button
          type="submit"
          class="btn btn-success"
          @click="postNow(); closeModal($event.target);"
        >Save</button>
        <button
          type="button"
          class="btn btn-default"
          @click="resetInfoModal(); closeModal($event.target);"
        >Cancel</button>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import axios from "axios";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "Items",
  components: {
    //SubHeaderProducts
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true, sortDirection: "desc" },
        {
          key: "description",
          label: "Description",
          sortable: true,
          class: "text-center"
        },
        { key: "type", label: "Type" },
        { key: "CustContactId", label: "CustContactId" },
        { key: "CustOrganizationId", label: "Organization" },
        { key: "WOPrioirtyId", label: "Prioirty" },
        { key: "actions", label: "Actions" }
      ],
      AllItems: [],
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
        content: ""
      },
      NewItem: {
        id: "NewItem",
        title: "New Work Order",
        content: ""
      },
      WOStatuses: [],
      AllOrgs: [],
      WOPriorities: [],
      WOCategories: [],
      EquipmentProfiles: []
    };
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
      .then(
        res => ((this.WOCategories = res.data), (this.WOCategories1 = res.data))
      );
    axios
      .get(this.$apiURL + "EquipmentProfiles")
      .then(res => (this.EquipmentProfiles = res.data));
    axios
      .get(this.$apiURL + "workorders/")
      .then(res => (this.AllItems = res.data));
    //.catch(err => console.log(err));
  },
  methods: {
    deleteitem: function() {
      axios.delete(this.$apiURL + "workorders/" + this.infoModal.content.id);
      this.$router.push("/workorders");
    },
    postNow: function() {
      axios
        .post(
          this.$apiURL + "workorders/" + this.infoModal.content.id + "/update",
          {
            data: this.infoModal.content
          }
        )
        .then(this.$router.push("/workorders"))
        .catch(function(error) {
          console.log(error);
        });
    },
    postnew: function() {
      //console.log(this.NewItem.content);
      axios
        .post(this.$apiURL + "workorders/add", {
          data: this.NewItem.content
        })
        .then(this.$router.push("/workorders"))
        .catch(function(error) {
          console.log(error);
        });
    },
    info(item, index, button) {
      this.infoModal.title = `Edit Work Order: ${index}`;
      axios
        .get(this.$apiURL + "workorders/" + index)
        .then(res => (this.infoModal.content = res.data));
      //this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
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
    this.totalRows = this.AllItems.length;
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
    filteredList() {
      return this.AllItems.filter(item => {
        return (
          item.description.toLowerCase().match(this.search.toLowerCase()) ||
          item.type.toLowerCase().match(this.search.toLowerCase()) ||
          item.notes.toLowerCase().match(this.search.toLowerCase())
        );
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