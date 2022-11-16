<template>
  <div>
   
      <div v-if="activated">
          <h1>THANK YOU FOR ACTIVATION</h1>
          <v-btn :to="localePath('/')">Continue</v-btn>
      </div>
      <div v-if="!resent && !activated">
         
            Verifcation not successfull <br>
            <!-- <v-btn :to="localePath('register')">Resend Verification Email</v-btn> -->
            <v-btn @click="resend">Resend Verification Email</v-btn>
      </div>
       <div v-if="resent">
           <p>
                email resent
           </p>
             
          </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        activated:false,
        token:this.$route.query.token,
        resent:false
        

    }
},
methods:{
    verify(){
        // console.log(this.token)
         this.$axios.$post(this.$axios.defaults.baseURL + "/account/verify",{
      token:this.token
    
    }).then(response => {
     
        if(response.activation == true){
            this.activated=true
        }else{

        } 
      
    //     this.$store.commit("auth/login");
    //     this.$store.commit("auth/setUserInfo",response.data);
    //   this.dialog = false
    //   this.$router.push("/")

     }).catch(err => {
         console.log(err)
    //    this.errors.push("wrong email/password")
      // console.log(err.response.status)
    });
    },
    // resend verification token
    resend(){
        // console.log(this.token)
         this.$axios.$post(this.$axios.defaults.baseURL + "/account/sendVerificationToken",{
      email:this.$store.state.auth.userInfo.email,
      lang:this.$i18n.locale,
      firstname:this.$store.state.auth.userInfo.firstname

    
    }).then(response => {
        // console.log(response)
        // console.log(this.$store.state.auth.userInfo.email)
     
        if(response.sentToken == true){
            this.activated=true
            this.resent = true
        }else{

        } 
      
    //     this.$store.commit("auth/login");
    //     this.$store.commit("auth/setUserInfo",response.data);
    //   this.dialog = false
    //   this.$router.push("/")

     }).catch(err => {
         console.log(err)
    //    this.errors.push("wrong email/password")
      // console.log(err.response.status)
    });
    }
},
beforeMount(){

},
mounted(){
//   console.log(this.$route.query.token)
// console.log(this.$store.state.auth.userInfo)
if(typeof this.token !== "undefined"){
    this.verify();
    // this.resend
}

// console.log(this.$store.state.auth.loggedIn)


    // if(this.$store.state.auth.loggedIn != true){
    //     this.$router.push(this.localePath('login'))
    // }
}
}
</script>

<style>

</style>