<template>
  <div class="planter">
    <b-form @submit="onSubmit" class="container">
      <div class="row">
        <b-form-group
          id="input-group-1"
          class="col-md-3 toprow"
          label="Planter:"
          label-for="inputtitle"
        >
          <b-form-input
            disabled
            id="inputtitle"
            type="text"
            v-model="Inspection.PlanterId"
            placeholder="Planter1"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-md-3 toprow" label="Work Order:" label-for="inputWO">
          <b-form-input id="inputWO" type="text" v-model="Inspection.WorkOrderId" placeholder="WO"></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          class="col-md-3 toprow"
          label="Date:"
          label-for="inputdate"
        >
          <datepicker v-model="Inspection.date" class="form-control" id="inputdate"></datepicker>
        </b-form-group>
      </div>
      <div class="row">
        <label class="col-md-3">Part</label>
        <label class="col-md-2">Row</label>
        <label class="col-md-2">#</label>
        <label class="col-md-4">Comments</label>
      </div>
      <div class="row" v-bind:key="index" v-for="(item, index) in form.rows">
        <b-form-group id="input-group-3" class="col-md-3">
          <b-form-select id="ppart" v-model="item.part" required placeholder="Part">
            <option :value="null">--Part--</option>
            <option v-bind:key="item.id" v-for="item in EIParts" :value="item.id">{{item.name}}</option>
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-2" class="col-md-2">
          <b-form-select id="row" v-model="item.row" required placeholder="Row">
            <option :value="null">--Row--</option>
            <option v-bind:key="item" v-for="item in EquipmentRows" :value="item">{{item}}</option>
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-2" class="col-md-2">
          <b-form-input
            id="number"
            v-model="item.number"
            type="text"
            required
            placeholder="Measurement"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-md-4" id="input-group-2">
          <b-form-input id="pcomments" v-model="item.comment" required placeholder="Enter Comment"></b-form-input>
        </b-form-group>
        <b-form-group class="col-md-1" id="input-group-2">
          <b-button
            size="sm"
            class="removerow"
            v-on:click="form.rows.splice(index, 1)"
            variant="danger"
          >X</b-button>
        </b-form-group>
      </div>
      <b-button
        size="sm"
        variant="primary"
        class="addrow"
        v-on:click="form.rows.push({part : null, row : null, number: '', comment: '',})"
      >+</b-button>
      <b-button type="submit" class="submitbut" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";

export default {
  name: "InspectionEdit",
  components: {
    Datepicker
  },
  computed: {
    EquipmentRows() {
      // let integer = parseInt(this.Equipment.rowqty, 10);
      let integer = parseInt(12, 10);
      let filledArray = new Array();
      for (let i = 0; i < integer; i++) {
        let a = i + 1;
        filledArray[i] = a;
      }
      return filledArray;
    },
    Equipment() {
      return axios.get(
        this.$apiURL + "equipmentprofiles/" + this.Inspection.PlanterId
      );
    }
  },
  data() {
    return {
      form: {
        rows: [
          {
            part: null,
            row: null,
            number: "",
            comment: ""
          }
        ]
      },
      Equipment: [],
      Inspection: {
        PlanterId: "",
        WorkOrderId: "",
        date: new Date(),
        id: ""
      }
    };
  },
  methods: {},
  created() {
    if (this.$route.params.id) {
      axios
        .get(this.$apiURL + "EquipmentInspections/" + this.$route.params.id)
        .then(res => (this.Inspection = res.data));
    } else {
      axios
        .get(this.$apiURL + "EquipmentInspections/wo/" + this.$route.params.wo)
        .then(res => (this.Inspection = res.data));
    }
    axios
      .get(this.$apiURL + "info/EIParts")
      .then(res => (this.EIParts = res.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.planter h1 {
  margin-bottom: 30px;
}
.toprow {
  display: flex;
  align-items: center;
  justify-content: center;
}
.toprow label {
  margin: 0 10px 0 0;
}
#inputdate {
  border: none;
  outline: none;
}
.removerow {
  position: absolute;
  bottom: 0;
}
.addrow {
  font-size: 30px !important;
  padding: 0 15px !important;
  float: left;
  margin-top: 20px;
}
.submitbut {
  margin: 40px 10%;
  font-size: 25px !important;
  padding: 10px 15px !important;
  float: right;
}
.buttonpart {
  display: flex;
  justify-content: space-between;
}
</style>
