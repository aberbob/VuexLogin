<template>
  <div class="body">
    <fieldset>
      <legend>
        <h2 id="EditItemID">New ID: {{OneItem.id}}</h2>
      </legend>
      <form method="post" @submit.prevent="postNow">
        Name:
        <br />
        <input type="text" name="name" v-model="OneItem.name" />
        <br />Organization:
        <select v-model="OneItem.CustOrganizationId">
          <option v-bind:key="org.id" v-for="org in AllOrgs" :value="org.id">{{org.name}}</option>
        </select>
        <br />Make:
        <br />
        <input type="text" name="make" v-model="OneItem.make" />
        <br />Model:
        <br />
        <input type="text" name="model" v-model="OneItem.model" />
        <br />Row QTY:
        <br />
        <input type="text" name="rowqty" v-model="OneItem.rowqty" />
        <br />Depth Adjust:
        <br />
        <select v-model="OneItem.PlanterDepthAdjustId">
          <option v-bind:key="org.id" v-for="org in PlanterDepthAdjust" :value="org.id">{{org.name}}</option>
        </select>
        <br />DownForce:
        <br />
        <select v-model="OneItem.PlanterDownForceId">
          <option v-bind:key="org.id" v-for="org in PlanterDownForce" :value="org.id">{{org.name}}</option>
        </select>
        <br />Drive Type:
        <br />
        <select v-model="OneItem.PlanterDriveId">
          <option v-bind:key="org.id" v-for="org in PlanterDrive" :value="org.id">{{org.name}}</option>
        </select>
        <br />Insecticide:
        <br />
        <select v-model="OneItem.PlanterInsecticideId">
          <option v-bind:key="org.id" v-for="org in PlanterInsecticide" :value="org.id">{{org.name}}</option>
        </select>
        <br />Liquid:
        <br />
        <select v-model="OneItem.PlanterLiquidId">
          <option v-bind:key="org.id" v-for="org in PlanterLiquid" :value="org.id">{{org.name}}</option>
        </select>
        <br />Meter:
        <br />
        <select v-model="OneItem.PlanterMeterId">
          <option v-bind:key="org.id" v-for="org in PlanterMeter" :value="org.id">{{org.name}}</option>
        </select>
        <br />Monitor:
        <br />
        <select v-model="OneItem.PlanterMonitorId">
          <option v-bind:key="org.id" v-for="org in PlanterMonitor" :value="org.id">{{org.name}}</option>
        </select>
        <br />Seed Firmer:
        <br />
        <select v-model="OneItem.PlanterSeedFirmerId">
          <option v-bind:key="org.id" v-for="org in PlanterSeedFirmers" :value="org.id">{{org.name}}</option>
        </select>
        <br />Seed Tube:
        <br />
        <select v-model="OneItem.PlanterSeedTubeId">
          <option v-bind:key="org.id" v-for="org in PlanterSeedTubes" :value="org.id">{{org.name}}</option>
        </select>
        <br />Closing Wheel:
        <br />
        <select v-model="OneItem.PlanterClosingWheelId">
          <option
            v-bind:key="org.id"
            v-for="org in PlanterClosingWheels"
            :value="org.id"
          >{{org.name}}</option>
        </select>
        <br />Harnessing:
        <br />
        <select v-model="OneItem.PlanterHarnessingId">
          <option v-bind:key="org.id" v-for="org in PlanterHarnessing" :value="org.id">{{org.name}}</option>
        </select>
        <br />
        <button type="submit" name="button">Submit</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
//import Header from "../components/layout/Header.vue";
//import SubHeaderProducts from "../components/layout/SubHeaderProducts.vue";

export default {
  name: "NewProduct",
  components: {
    //Header,
    //SubHeaderProducts
  },
  data() {
    return {
      PlanterClosingWheels: [],
      PlanterDepthAdjust: [],
      PlanterDownForce: [],
      PlanterDrive: [],
      PlanterHarnessing: [],
      PlanterInsecticide: [],
      PlanterLiquid: [],
      PlanterMeter: [],
      PlanterMonitor: [],
      PlanterSeedFirmers: [],
      PlanterSeedTubes: [],
      AllOrgs: []
    };
  },
  methods: {
    postNow: function() {
      axios
        .post(this.$apiURL + "equipmentprofiles/add", {
          data: this.OneItem
        })
        .then(
          setTimeout(
            function() {
              this.$router.push("/Customers/EquipmentProfiles");
            }.bind(this),
            1000
          )
        )
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
      .get(this.$apiURL + "PlanterClosingWheels")
      .then(res => (this.PlanterClosingWheels = res.data));
    axios
      .get(this.$apiURL + "PlanterDepthAdjust")
      .then(res => (this.PlanterDepthAdjust = res.data));
    axios
      .get(this.$apiURL + "PlanterDownForce")
      .then(res => (this.PlanterDownForce = res.data));
    axios
      .get(this.$apiURL + "PlanterDrive")
      .then(res => (this.PlanterDrive = res.data));
    axios
      .get(this.$apiURL + "PlanterHarnessing")
      .then(res => (this.PlanterHarnessing = res.data));
    axios
      .get(this.$apiURL + "PlanterInsecticide")
      .then(res => (this.PlanterInsecticide = res.data));
    axios
      .get(this.$apiURL + "PlanterLiquid")
      .then(res => (this.PlanterLiquid = res.data));
    axios
      .get(this.$apiURL + "PlanterMeter")
      .then(res => (this.PlanterMeter = res.data));
    axios
      .get(this.$apiURL + "PlanterMonitor")
      .then(res => (this.PlanterMonitor = res.data));
    axios
      .get(this.$apiURL + "PlanterSeedFirmers")
      .then(res => (this.PlanterSeedFirmers = res.data));
    axios
      .get(this.$apiURL + "PlanterSeedTubes")
      .then(res => (this.PlanterSeedTubes = res.data));
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
</style>