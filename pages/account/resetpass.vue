<template>
  <div>
    <!-- form to request pass reset - when token is not defined -->
    <div v-if="typeof token == 'undefined' || token == null">
      <!-- Show Email sent for pass reset -->
      <div v-if="passform == true">
        <h1>email sent</h1>
      </div>
      <!-- if sent hide -->
      <div v-if="passform == false">
        <h1>{{ $t("change_pass") }}</h1>
        <br />
        <v-text-field
          :label="'* ' + $t('email_field')"
          required
          solo
          v-model="email"
        ></v-text-field>
        <v-btn color="#31d097" cols="12" dark block @click="sendEmail">
          {{ $t("reset_pass") }}
        </v-btn>
        <div>{{ errors[0] }}</div>
      </div>
    </div>
    <!-- else show reset pass form -->
    <div v-else>
      <v-text-field
        :label="'* ' + $t('password_field')"
        type="password"
        required
        solo
        v-model="password"
        @keyup.enter="sendNewPass"
      ></v-text-field>
      <v-text-field
        :label="'* ' + $t('passwordconfirm_field')"
        type="password"
        required
        solo
        v-model="confirm_password"
        @keyup.enter="sendNewPass"
      ></v-text-field>
      <v-btn color="#31d097" cols="12" dark block @click="sendNewPass">
        {{ $t("reset_pass") }}
      </v-btn>
      <div v-if="pass_errors.length">
        {{ pass_errors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
// import store from '@/store/index';
export default {
  data() {
    return {
      email: "",
      errors: [],
      passform: false,
      password: "",
      confirm_password: "",
      token: this.$route.query.token,
      pass_errors: []
    };
  },
  methods: {
    sendNewPass: function() {
      this.pass_errors = [];
      if (this.password == "") {
        this.pass_errors.push("password needed");
      }
      if (this.password.length <= 7) {
        this.pass_errors.push("password must be at least 8 charecters");
      }
      if (this.confirm_password == "") {
        this.pass_errors.push("please confirm password");
      }
      if (this.password !== this.confirm_password) {
        this.pass_errors.push("password don't match");
      }
      if (!this.pass_errors.length) {
        // console.log("sent new pass");
        this.$axios
          .$post(this.$axios.defaults.baseURL + "/account/saveNewPassword",{
            token: this.token,
            pass:this.password
          })
          .then(response => {
            // console.log(response)
            if (response.resetPass == true) {
               this.$router.push(this.localePath("login"))
              // console.log("password changed");
              //this.passform = true;
              // this.activated=true
              // this.resent = true
            } else {
              // console.log("not changed");
            }

           
          })
          .catch(err => {
            console.log(err);
            //    this.errors.push("wrong email/password")
            // console.log(err.response.status)
          });
      
       
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendEmail: async function() {
      this.errors = [];
      if (this.email == "") {
        this.errors.push("email is required");
      }
      if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        //  THIS IS WHERE I STOPPED
        this.$axios
          .$post(this.$axios.defaults.baseURL + "/account/sendResetToken", {
            email: this.email,
            lang: this.$i18n.locale
          })
          .then(response => {
            // console.log(response)
            // console.log(this.$store.state.auth.userInfo.email)

            if (response.emailSent == true) {
              console.log("sent");
              this.passform = true;
              // this.activated=true
              // this.resent = true
            } else {
              console.log("not sent");
            }

            //     this.$store.commit("auth/login");
            //     this.$store.commit("auth/setUserInfo",response.data);
            //   this.dialog = false
            //   this.$router.push("/")
          })
          .catch(err => {
            console.log(err);
            //    this.errors.push("wrong email/password")
            // console.log(err.response.status)
          });
      }

      // alert("pressed");
    }
  },
  computed: {
    // ...mapState({
    //      loggedIn: state=>state.auth.loggedIn
    //  })
  },
  // beforeRouteEnter(to,from,next){
  //       // return(this.$store.state.auth.loggedIn)
  //   if(this.$store.state.auth.loggedIn == true){
  //     this.$router.push(localePath('register'))

  //   }
  //     next();
  // }

  mounted() {
    if (typeof this.token !== "undefined") {
    }
  }
};
</script>

<style></style>
