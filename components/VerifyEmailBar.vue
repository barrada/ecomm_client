<template>
  <v-banner v-if="loggedin" color="#EEEEEE">
      Confirm your account = {{test}}
    <template v-slot:actions>
      <!-- <v-btn text color="primary">Dismiss</v-btn> -->
      <v-btn text color="primary">Resend Verification code</v-btn>
    </template>
  </v-banner>
</template>

<script>
import store from '@/store'
export default {
    data(){
        return{
            loggedin:false,
            test:'dd'
        }
    },
    beforeRouteEnter(){
        // alert("hello")
        // console.log("hello")
        // test = "zz"
    },
    created(){
    //    this.verify = false
    // console.log("the state is " + store.state.auth.loggedIn)
    // console.log("the state is " + this.$store.state.auth.loggedIn)
    this.loggedin = this.$store.state.auth.loggedIn
    
    }
};
</script>

<style scoped>

</style>
