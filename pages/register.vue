<template>
  <div>
    <v-row id="reg-1" class="" justify="center">
      <v-col cols="12" md="6" lg="6">
        <h1 class="mb-4">{{$t('signup')}}</h1>
        <!-- error messages starts -->
          <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
             <ul>
               <li v-for="error in errors">{{ error }}</li>
            </ul>
  </p>
        <!-- error messages ends-->
        <v-text-field
          :label="'* ' + $t('email_field')"
          v-model="email"
          type="email"
          required
          solo
        ></v-text-field>
        <v-row>
          <v-col>
            <v-text-field
              :label="'* ' + $t('firstname')"
              required
              v-model="firstname"
              solo
              single-line
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              :label="'* ' + $t('lastname')"
              required
               v-model="lastname"
              solo
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          solo
          :label="'* ' + $t('password_field')"
          type="password"
          v-model="password"
          required
        ></v-text-field>
        <v-text-field
          solo
          :label="'* ' + $t('passwordconfirm_field')"
          type="password"
          v-model="password_confirm"
          required
        ></v-text-field>
        <v-btn color="green" cols="12" dark block @click="checkEmail"
          >{{$t('register')}}</v-btn
        >
      </v-col>
    </v-row>
    <!-- <v-btn default class="default green btn" @click="changeAr">AR</v-btn>
    <v-btn default class="default green btn" @click="changeEn">EN</v-btn> -->
    <!-- {{name}} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
        email:'',
        firstname:'',
        lastname:'',
        password:'',
        password_confirm:'',
        lang:this.$i18n.locale,
        errors:[]
  


    };
  },
 computed: {
    //  ...mapState({
    //      lang: state=>state.lang.current
    //  })
 },
 methods:{
  //  send validation email to user - > server
   sendValidation: async function (email,firstname,lang){
    //  alert(lang)
     await this.$axios.$post(this.$axios.defaults.baseURL + "/account/sendVerificationToken",{
         email:this.email,
         firstname:this.firstname,
         lang:this.lang,

     }).then(response => { 
        console.log(response)
     }).catch(err => {
       console.log(err)
     })
   },
    // check if email is valid in registration
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    register:async function(email,firstname,lastname,password){
        await this.$axios.$post(this.$axios.defaults.baseURL + "/register/add",{
             email:this.email,
             firstname:this.firstname,
             lastname:this.lastname,
             password:this.password
         }).then(response => {
          //  console.log(this.email+ ' ' + response)
          if(response == 201){
            // this.lang = this.$i18n.locale
            this.sendValidation(email,firstname,this.lang)
            this.$router.push(this.localePath('login'))
            
          }
         })
        //  console.log(localStorage.getItem('lang'))
    },
     checkEmail:async function(){
        this.errors=[]
         await this.$axios.$post(this.$axios.defaults.baseURL + "/register",{
             email:this.email
         }).then(response => {
         
      // console.log(response[0].email_exists);
      if(response[0].email_exists == 1){
        this.errors.push("email already exists")
      }
       if(this.email == ''){
        this.errors.push("email is required")
      }
       if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if(this.firstname == ''){
        this.errors.push("firstname is required")
      }
        if(this.lastname == ''){
        this.errors.push("lastname is required")
      }
        if(this.password == ''){
        this.errors.push("password is required")
      }
        if(this.password.length <= 7){
        this.errors.push("password must be 8 chars or more")
      }
        if(this.password != this.password_confirm){
        this.errors.push("passwords don't match")
      }
      if(!this.errors.length){
        // console.log("no errors")
        this.register(this.email,this.firstname,this.lastname,this.password)
      }
          
     });
     }
    //  changeAr:function(){
    //      this.$store.commit('lang/setAr');
    //       this.$vuetify.rtl = true

    //  },
    //    changeEn:function(){
    //      this.$store.commit('lang/setEn');
    //       this.$vuetify.rtl = false

    //  }
 }
};
</script>

<style></style>
