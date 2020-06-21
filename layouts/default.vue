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
    
    <v-app-bar :clipped-left="clipped" fixed app color="">
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> 
      
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
      <nuxt-link :to="localePath('index')" >
        <!-- <v-toolbar-title id="logo" v-text="title" class="" -->
        <v-toolbar-title id="logo" v-text="$t('sitename')" class=""
      /></nuxt-link>
      <v-text-field
        :label="$t('search')"
        hide-details
        clearable
        append-icon="search"
        icon-color="red"
        outlined
        color="#febd69"
        single-line
        class="mr-5 ml-5"
      ></v-text-field>
      <v-select
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
      </v-select>
     <v-spacer></v-spacer>
      <LangSwitch/>
     <v-spacer></v-spacer>
     <h1 v-if="user.email_verified == 0">Please verify</h1>

      <!-- <v-overflow-btn
          class="my-2"
          hide-details
          :items="countries"
           v-model="selected"
         
          target="#dropdown-example"
        ></v-overflow-btn> -->
      <v-spacer />
      <LoginModal />
      <!-- <v-btn
       v-on="on"
      >
         Sign in
      </v-btn> -->
      
      <v-spacer />
      <v-badge
        class="mr-2"
        :content="cart_items"
        color="#febd69"
        overlap
        offset-x="20"
      >
        <v-icon large>shopping_cart </v-icon>
      </v-badge>
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
// import VerifyEmailBar from "~/components/VerifyEmailBar.vue";
export default {
  components: {
    LoginModal,
    LangSwitch,
    // VerifyEmailBar
  },
  data() {
    return {
      // locale:this.$store.state.lang.current,
      user:{},
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
      cart_items: 22,
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
</style>
