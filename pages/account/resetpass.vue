<template>
  <div>
      <h1>{{$t('change_pass')}}</h1><br>
       <v-text-field :label="'* ' + $t('email_field')" required solo v-model="email"></v-text-field>
         <v-btn color="#31d097" cols="12" dark block 
                  >{{$t('reset_pass')}}</v-btn
                >
  </div>
</template>

<script>
// import store from '@/store/index';
export default {
data(){
    return{
        email:''
    }
},
  computed:{
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
}
</script>

<style>

</style>