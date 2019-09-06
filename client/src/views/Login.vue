<template>
  <div>
    <h2>Login</h2>
    <div v-if="errormessage" class="alert alert-danger" role="alert">{{this.errormessage}}</div>
    <form @submit.prevent="login">
      Username:
      <br />
      <input type="username" name="username" v-model="loginDetails.username" required />
      <br />
      <br />Password:
      <br />
      <input type="password" name="password" v-model="loginDetails.password" required />
      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
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
  name: "Login",
  data: () => ({
    errormessage: "",
    loginDetails: {
      username: "",
      password: ""
    }
  }),
  methods: {
    validUser() {
      const validUser = Joi.validate(this.loginDetails, schema);
      //console.log(validUser.error);
      if (validUser.error === null) {
        return true;
      }
      if (validUser.error.message.includes("username")) {
        this.errormessage = "Username invalid";
      } else {
        this.errormessage = "Password invalid";
      }
    },
    // loginb() {
    //   this.errormessage = "";
    //   if (this.validUser()) {
    //     console.log("loggin in...");
    //     console.log(this.loginDetails);
    //     axios
    //       .post(this.$apiURL + "auth/login", {
    //         data: this.loginDetails
    //       })
    //       .then(response => {
    //         this.signingup = false;
    //         console.log(response.data);
    //         localStorage.token = response.data.token;
    //         this.$router.push("/workorders");
    //       })
    //       .catch(error => {
    //         //this.signingup = false;
    //         this.errormessage = error.response.statusText;
    //         console.log(error.response.data);
    //       });
    //   } else {
    //     //this.errormessage = "Unable to login";
    //   }
    // },
    // login1() {
    //   this.errormessage = "";
    //   console.log(this.$store)
    //   this.$store
    //     .dispatch("LOGIN", this.loginDetails)
    //     .then(success => {
    //       this.$router.push("/");
    //     })
    //     .catch(error => {
    //       this.error = true;
    //     });
    // },
    login: function() {
      // let email = this.email
      // let password = this.password
      this.$store
        .dispatch("login", this.loginDetails )
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>