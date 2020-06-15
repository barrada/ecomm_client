<template>
  <div>
    <!-- <v-btn v-if="en == true" default class="default green btn" @click="changeAr">عربي</v-btn>
      <v-btn v-if="ar == true" default class="default green btn" @click="changeEn">English</v-btn> -->
    <div @click="changeEn">
      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        English
      </nuxt-link>
    </div>
    <div @click="changeAr">
      <nuxt-link v-if="$i18n.locale !== 'ar'" :to="switchLocalePath('ar')">
        عربي
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
// import english from "@/assets/locale/en.json";
// import arabic from "@/assets/locale/ar.json";

// import lang from `@/assets/lang/${lang}.json`
// const lang = () => import('@/assets/lang/En.json');
export default {
  data() {
    return {
      en: true,
      ar: false,
      lang: ""
      // lang:lang
    };
  },
  computed: {
    ...mapState({
      current_lang: state => state.lang.current
    })
  },
  methods: {
    changeAr: function() {
      this.$store.commit("lang/setAr");
      this.$vuetify.rtl = true;
      // this.ar = true; // hide ar button
      // this.en = false;
      // lang = import('@/assets/lang/Ar.json')
      // console.log(this.lang)
      // this.$store.state.current = 'ar'
      // console.log(this.$store.state.current.title)
      // this.$store.state.current = arabic
      // console.log(this.$store.state.current.title)
      // console.log(this.current_lang)
      // $i18n.locale = 'ar'
      // console.log(this.$store.state.lang.current.title);
      // this.$router.push($nuxt.$route.path + '?lang=ar')
    },
    changeEn: function() {
      this.$store.commit("lang/setEn");
      this.$vuetify.rtl = false;
      // this.en = true;
      // this.ar = false;
      //  lang = import('@/assets/lang/Ar.json')
      //  this.$store.state.current = english
      // console.log(this.$store.state.current.title)
      // $i18n.locale = 'en'
      // console.log(this.$store.state.lang.current.title);
      //  this.$router.push($nuxt.$route.path + '?lang=en')
    }
  },
  created() {
    //  if(this.lang == 'Ar'){
    //     this.lang = ar
    //  }else{
    //    this.lang = en
    //  }
    // if(this.ar == true){
    //   this.lang = 'ar'
    // }else{
    //   this.lang = 'en'
    // }
    //  this.jj = import('@/assets/lang/En.json')
    //  console.log(jj.title)
    //  console.log(lang.title)
  },
  mounted() {
    // console.log(this.lang.title)

    //  console.log(localStorage.getItem('lang'))
    // console.log(this.$route.query.lang);
    // if (this.$route.query.lang == "ar") {
    //   this.$store.commit("lang/setAr", arabic);
    //   this.$vuetify.rtl = true;
    //   this.ar = true; // hide ar button
    //   this.en = false;
    // }
    // if (this.$route.query.lang == "en") {
    //   this.$store.commit("lang/setEn", english);
    //   this.$vuetify.rtl = false;
    //   this.en = true;
    //   this.ar = false;
    // }
    if (localStorage.getItem("lang") == "ar") {
      // this.$store.commit("lang/setAr");
      this.$vuetify.rtl = true;
      this.$router.push(this.switchLocalePath('ar'))
      // this.$i18n.switchLocalePath('ar')
      // this.$i18n.locale = 'ar'
      // this.ar = true; // hide ar button
      // this.en = false;
    } 
    else {
      this.$store.commit("lang/setEn");
      this.$vuetify.rtl = false;
      // this.en = true;
      // this.ar = false;
    }
  }
};
</script>

<style></style>
