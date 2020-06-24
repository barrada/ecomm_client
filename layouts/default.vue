<template>

  <v-app dark>

    
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
     :right=this.$vuetify.rtl 
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t(item.title)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar :clipped-left="clipped" fixed app color="" :prominent="mobile"  dense :class="{mobhead:mobile}">
        <v-row no-gutters justify="start" align="center" class="">
          <!-- menu burger icon -->
          <v-col cols="1" class="order-3 order-md-0 order-lg-0 order-xl-0" justify="start" >
             <v-app-bar-nav-icon small @click.stop="drawer = !drawer" /> 
          </v-col>
     
      
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <img width="30px" src="/logo.png" alt="ektib" class="mr-2">  -->
      <!-- first row -->
    

    <!-- logo -->
    <v-col cols="2" class="" lg="1">
          <nuxt-link :to="localePath('index')" class="order-start order-lg-2">
            <!-- Ektib -->
            <img src="@/static/logo.svg" alt="" width="90%">
        <!-- <v-toolbar-title id="logo" v-text="$t('sitename')" class=""/> -->
      </nuxt-link>
    </v-col>

    <!-- search -->
    <v-col cols='11' lg="4" class="order-4 order-lg-1" >

   
      <v-text-field

      dense
        :label="$t('search')"
        hide-details
        clearable
        append-icon="search"
        icon-color="red"
        outlined
        color="#febd69"
        single-line
        class="mr-1 ml-2"
        cols="6"
       
      ></v-text-field>
     </v-col>
    <!-- country dropdown selector -->
      <!-- <v-select
        v-model="selected"
        :items="countries"
        menu-props="auto"
        label="Select"
        hide-details
        single-line
        class="pt-20"
      >
    
        <template slot="selection" slot-scope="data">
          <v-avatar tile>
            <img :src="data.item.flag" />
          </v-avatar>
          <div>{{ data.item.text }}</div>
        </template>
        <template slot="item" slot-scope="data">
          <v-list-item-avatar>
            <img :src="data.item.flag" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> {{ data.item.text }} </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-select> -->
      <!-- country dropdown selector ends -->
      <!-- <v-spacer></v-spacer> -->
     <!-- <v-col class="order-4">
        <LangSwitch/>
     </v-col> -->
     <!-- <v-spacer></v-spacer> -->
     <h1 v-if="user.email_verified == 0">Please verify</h1>

      <!-- <v-overflow-btn
          class="my-2"
          hide-details
          :items="countries"
           v-model="selected"
         
          target="#dropdown-example"
        ></v-overflow-btn> -->
      <!-- <v-spacer /> -->
      <!-- <v-col class="order-6">
          <LoginModal />
      </v-col> -->
    
      <!-- <v-btn
       v-on="on"
      >
         Sign in
      </v-btn> -->
      
 <!-- holder div for top login right-->
     
  
      <v-col cols="10" lg="4" align="end" class="order-1"> 
        <!-- lang swirtch -->
      <!-- <v-col></v-col>     -->
        <v-row class="" align="center" no-gutters>
          <v-spacer></v-spacer>
          <!-- lang switch -->
              <v-btn v-if="!$store.state.auth.loggedIn" icon width="40" large >
                <LangSwitch/>
              </v-btn>
                
        <v-btn icon width="40" large v-if="$store.state.auth.loggedIn">
          <v-icon size="30" >favorite_border</v-icon>
        </v-btn>
      <v-btn icon width="40" large v-if="$store.state.auth.loggedIn">
              <v-icon size="30" >notifications</v-icon>
      </v-btn>
      <v-btn icon width="40" large v-if="$store.state.auth.loggedIn">
         <v-icon size="30" >storefront</v-icon>
      </v-btn>
          
          <!-- login link -->
        
          
               <LoginModal />
         
        
          
           <!-- user menu -->
             <!-- <UserMenu/> -->
          <!-- cart -->
              <v-btn icon width="40" large> 
                     <v-badge
        
        :content="cart_items"
        color="#febd69"
        overlap
        offset-x="10"
        :value="cart_items"
      >
        <v-icon size="30">shopping_cart </v-icon>
      </v-badge> 
               
       </v-btn>
        </v-row>
      <!-- cart -->
         
      </v-col>
      
        </v-row>
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    
    <v-content>
      <!-- <VerifyEmailBar/> -->
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import LoginModal from "~/components/LoginModal.vue";
import LangSwitch from "~/components/LangSwitch.vue";
import UserMenu from "~/components/UserMenu.vue";
// import VerifyEmailBar from "~/components/VerifyEmailBar.vue";
export default {
  components: {
    LoginModal,
    LangSwitch,
    UserMenu
    // VerifyEmailBar
  },
  data() {
    return {
      // locale:this.$store.state.lang.current,
      user:{},
      mobile:false,
      clipped: false,
      drawer: false,
      fixed: false,
      token:'',     
      items: [
        {
          icon: "mdi-apps",
          title: "greeting",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ektib",
      selected: "Egypt",
      cart_items:1,
      countries: [
        {
          text: "America",
          flag:
            "https://cdn3.iconfinder.com/data/icons/flags-37/300/yemen-national-world-512.png"
        },
        { text: "Egypt", flag: "/flags/eg.png" },
        {
          text: "KSA",
          flag: "/flags/ksa.svg"
        },
        { text: "UAE", flag: "/flags/uae.png" }
      ]
    };
  },
  computed:{
    ...mapState({
         lang: state=>state.lang.current
     })
  },
  created(){
    
    // console.log(this.localStorage.getItem('lang'))
    // console.log(this.$i18n.locale )
    // if(this.$i18n.locale == 'ar'){
    //   console.log("ARAB")
    // }
    // this.check(this.lang)
    // if(this.lang == 'Ar'){
    //   this.$vuetify.rtl = true
    // }else{
    //   this.$vuetify.rtl = false
    // }
      // console.log(this.lang)

  //  this.$vuetify.rtl = true
  },
  beforeMount(){
    this.authorize()
  },
  mounted(){
    // console.log(this.$vuetify.breakpoint)
    // console.log(this.$vuetify.breakpoint)
    if(this.$vuetify.breakpoint.smAndDown == true){
      this.mobile = true
    }
      //  this.authorize()
    this.userInfo()
    
    if(localStorage.getItem("lang") == "ar"){
      // app.switchLocalePath('ar')
      this.$i18n.locale = 'ar'
      // switchLocalePath('ar')
    }
    if(localStorage.getItem("lang") == "en"){
      this.$i18n.locale = 'en'
      // switchLocalePath('ar')
    }
 
    // console.log(this.lang.sitename)
    // console.log(this.$route.params)
    
  },
  methods:{
    async userInfo(){
      await this.$axios.$post(this.$axios.defaults.baseURL + "/account/getUserInfo",{
         token:localStorage.getItem('token'),
 

     }).then(response => { 
      //  console.log(response)
       this.user = response[0]
        // return response
     }).catch(err => {
       return err
     })
    },

   authorize(){
      //  this.client_token = "ee"
      // console.log("exixtsssss")
            // this.$axios.$post(this.$axios.defaults.baseURL + "/login/authorize",{
          this.token = localStorage.getItem("token")
        if(this.token){         
          // console.log(this.token)
            // console.log("exixtsssss")
            this.$axios.defaults.headers.common['Authorization'] = "Bearer " + this.token;
            this.$axios.$post(this.$axios.defaults.baseURL + "/login/authorize",this.$axios.defaults.headers.common['Authorization']).then(response => {
              if(response.authorization == "success"){
                 this.$store.commit("auth/login");
                 this.$store.commit("auth/setUserInfo",response.data);
               
                //  console.log(response.data)
                //  console.log(this.$store.state.auth.userInfo)
                 
              }else{
                 this.$store.commit("auth/logout");
              }
            }).catch(err => {
              console.log(err.response.status)
            })
        }
        
        
   },
  }
};
</script>
<style scoped>
:root{
  --navbar-color:red
}
v-app-bar{
  /* background-color:red!important */
}
v-list-tile-avatar img,
.v-avatar img {
  height: 20px;
  width: 25px;
}
#logo {
  text-decoration: none;
}
.mobhead{
  padding-top:2px;
  /* margin-right:10px */
  /* font-size:10px */
}
.mobhead .row{
  /* padding:0px 10px */
}

</style>
