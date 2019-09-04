<template>
  <div>
    <div v-if="errormessage" class="alert alert-danger" role="alert">{{this.errormessage}}</div>
    <div class="d-flex justify-content-center">
      <div v-if="signingup" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <fieldset>
      <legend>
        <h2 id="AddUser">Add User:</h2>
      </legend>
      <form v-if="!signingup" method="post" @submit.prevent="postNewUser">
        First Name:
        <br />
        <input type="text" name="FirstName" v-model="NewUser.fn" />
        <br />Last Name:
        <br />
        <input type="text" name="LastName" v-model="NewUser.ln" />
        <br />
        Username: {{NewUser.fn}}
        <br />
        {{NewUser.fn}}.{{NewUser.ln}}
        <br />Password:
        <br />
        <input type="text" name="Password" v-model="NewUser.password" />
        <br />Verify Password:
        <br />
        <input type="text" name="Password2" v-model="confirmpassword" />
        <br />
        <button type="submit" name="button">Submit</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/layout/Header.vue";
import SubHeaderAdmin from "../components/layout/SubHeaderAdmin.vue";
import Joi from "joi";

const schema = Joi.object().keys({
  fn: Joi.string(),
  ln: Joi.string(),
  username: Joi.string()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

export default {
  name: "NewItem",
  components: {
    Header,
    SubHeaderAdmin
  },
  // watch: {
  //   NewUser: {
  //     handler() {
  //       this.errormessage = '';
  //     },
  //     deep: true
  //   }
  // },
  data: () => ({
    signingup: false,
    errormessage: "",
    confirmpassword: "",
    NewUser: {
      fn: "",
      ln: "",
      username: "",
      password: ""
    }
  }),
  methods: {
    postNewUser() {
      this.signingup = true;
      console.log(this.NewUser);
      this.errormessage = "";
      this.NewUser.username = this.NewUser.fn + "." + this.NewUser.ln;
      if (this.validUser()) {
        //console.log(this.NewUser)

        axios
          .post(this.$apiURL + "auth/signup", {
            data: this.NewUser
          })
          .then(response => {
            this.signingup = false;
            this.$router.push("/login");
            console.log(response.statusText);
          })
          .catch(error => {
            this.signingup = false;
            this.errormessage = error.response.statusText;
            console.log(error.response);
          });
      }

      // console.log(this.NewUser)
      //   this.$router.push('/Items')
      //.then(res =>{
      //  console.log(re.data);
      //});
    },
    validUser() {
      if (this.NewUser.password != this.confirmpassword) {
        this.errormessage = "passwords must match";
        return false;
      }

      const validUser = Joi.validate(this.NewUser, schema);
      console.log(validUser.error);
      if (validUser.error === null) {
        return true;
      }
      if (validUser.error.message.includes("username")) {
        this.errormessage = "Username invalid";
      } else {
        this.errormessage = "Password invalid";
      }
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
#AddUser {
  margin-top: 20px;
}
</style>