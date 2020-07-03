<template>
  <v-container>
    <h1>Create New Shop</h1>
    <v-row class="formcontainer" align="start">
      <!--  -->
      <!-- <v-text-field
          :label="'* ' + $t('email_field')"
          v-model="email"
          type="email"
          required
          solo
          dense
          >
          </v-text-field> -->
      <!-- steps header -->
      <!-- step 1 -->
      <v-col class="steps py-0 mt-2" cols="12">
        <v-row >
          <!-- step 1  -->
          <v-col class="multi" cols="4" @click="step =1" :class="{active:this.step==1}">              
            <v-avatar class="step" color="#FF5252" size="32" style="">
              <span class="white--text headline"> <v-icon color="white" class='mt-n1 strong'>check</v-icon></span>              
            </v-avatar>
            <h3 class="mx-2 hidden-sm-and-down" style="display:inline">Shop preferences</h3> 
            <h4 style="display:inline" class="ml-1 hidden-sm-and-up">Step 1</h4>
          </v-col>
          <!-- step 2 -->
          <v-col class="multi" cols="4" @click="step =2" :class="{active:this.step==2}">
            <v-avatar class="step" color="#FF5252" size="32" style="">
              <span class="white--text headline"><v-icon v-if="this.shop_name_errors.length == 0" color="white" class='mt-n1 strong'>check</v-icon></span>
            </v-avatar>
             <h3 class="mx-2 hidden-sm-and-down" style="display:inline">Name your shop</h3>
               <h4 style="display:inline" class="ml-1 hidden-sm-and-up">Step 2</h4>
          </v-col>
          <!-- step 3 -->
          <v-col class="multi" cols="4" @click="step =3" :class="{active:this.step==3}">
            <v-avatar class="step" color="#FF5252" size="32" style="">
              <span class="white--text headline"><v-icon color="white" class='mt-n1 strong'>check</v-icon></span>
            </v-avatar>
                <h3 class="mx-2 hidden-sm-and-down" style="display:inline">Set up billing</h3>
                  <h4 style="display:inline" class="ml-2 hidden-sm-and-up">Step 3</h4>
          </v-col>
          <!-- step 4 -->
          <!-- <v-col class="multi" cols="3" @click="step =4" :class="{active:this.step==4}">
            <v-avatar class="step" color="#FF5252" size="32" style="">
              <span class="white--text headline"><v-icon color="white" class='mt-n1 strong'>check</v-icon></span>
            </v-avatar>
                <h3 class="mx-2" style="display:inline">Set up billing</h3>
          </v-col> -->
        </v-row>
      </v-col>
      <!-- form 1 -->
      <v-col v-if="step==1" lg="6" cols="12">
        <!-- shop country -->
        <v-row  no-gutters align="start">
          <v-col cols="6">
            <v-subheader>Shop Country</v-subheader>
          </v-col>
          <v-col cols="6" >
            <v-select
             placeholder="Shop Country" 
             solo 
             dense
             v-model="default_country"
             :items="countries_list"
             @change="currency_getter"
             > 
             </v-select>
          </v-col>
        </v-row>
        <!-- shop language -->
        <v-row no-gutters>
          <v-col col="6">
            <v-subheader>Shop language</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="default_language_selected"
              placeholder="shop language"
              :items="languages_select"
              solo
              dense
            >
            </v-select>
          </v-col>
        </v-row>
        <!-- shop currency -->
        <v-row no-gutters>
          <v-col cols="6">
            <v-subheader>Shop currency</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-select 
            placeholder="shop currency" 
            v-model="currency"
            :items="currency"
            solo 
            dense
            > </v-select>
          </v-col>
        </v-row>
      </v-col>
      <!-- col ends -->
      <!-- step 2 -->
      <v-col  v-if="step==2" cols="12">
        <v-row  justify="center">
            <v-col cols="6">
                  <v-text-field 
          placeholder="Enter your Shop Name"
          solo
          dense
          v-model="shopname"
          @keyup="check"
          ></v-text-field>
            </v-col>
            <v-col cols="6">
                 <!-- <v-btn default @click="check">check availability</v-btn> -->
            </v-col>
         {{shop_name_errors}}
        </v-row>
      </v-col>
      <!-- step 3 -->
       <v-col  v-if="step==3" cols="6">
          <v-text-field 
          placeholder="Address"
          solo
          dense
          ></v-text-field>
          <v-text-field 
          placeholder="Mobile number"
          solo
          dense
          ></v-text-field>
          <!-- <v-btn default>check availability</v-btn> -->
      </v-col>
      <!-- step 4 -->
       <!-- <v-col  v-if="step==4" cols="3">
          <v-text-field 
          placeholder="step 4"
          ></v-text-field>
          <v-btn default>check availability</v-btn>
      </v-col> -->
    </v-row>
    <v-row>
        <v-col cols="6"><v-btn @click="back" :disabled="this.step ==1" :hidden="this.step==1"><v-icon>arrow_back_ios</v-icon>back</v-btn></v-col>
        <v-col cols="6" v-if="this.step!==3" align="end"><v-btn @click="next" :disabled="this.step == 3 || this.step== 2 && this.shop_name_errors.length>0">continue<v-icon>arrow_forward_ios</v-icon></v-btn></v-col>
        <v-col cols="6" v-if="this.step==3" align="end"><v-btn  color="green" block><v-icon>save</v-icon>Save</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        shopname:'',
        shop_name_errors:[],
        step:1,
        shop_exists: true,
      default_language_selected: "English",
      languages_select: ["English", "Arabic"],
      default_country:"Egypt",
      countries_list:["Egypt","Saudi Arabia","UAE"],
      currency:["EGP"]
    };
  },
  methods:{
      currency_getter:function(){
          if(this.default_country == "Egypt"){
               this.currency= "EGP"
          }
          if(this.default_country == "Saudi Arabia"){
               this.currency= "REYAL"
          }
           if(this.default_country == "UAE"){
               this.currency= "DINAR"
          }
      },
      next:function(){
          if(this.step != 4){
              this.step +=1
          }
      },
      back:function(){
          if(this.step != 1){
              this.step -=1
          }
      },
      exists:async function(){
        //   return true
        this.$axios.post(this.$axios.defaults.baseURL + "/shop/checkshop/",{
            name:await this.shopname
        }).then(response=>{
            // exists = 
            // return true
            // console.log(response.data.exists)
            if(response.data.exists == 1){
                // console.log("EXISTS")
                this.shop_name_errors.push("shop name already exists")
                // this.shop_exists = true
            }            
            // if(response.data.exists == 0){
            //     // console.log("doesn't exist")
            //     // this.shop_exists = false
            // }

        })
      },
      check:async function(){
         
           this.shop_name_errors = [] 
            // console.log(this.shop_exists)
           await this.exists()
          if(this.shopname == ''){
              this.shop_name_errors.push("shop name is rquired")
          }
           if(this.shopname.length <3 ){
              this.shop_name_errors.push("shop name must have more than 2 chars")
          }
        //   if(this.shop_exists == true){
        //     //   alert("TT")
        //       this.shop_name_errors.push("shop name already exists")
        //   }
          if(this.shopname !== '' && this.shopname.length > 2 && this.shop_exists == false){
              this.shop_name_errors = []
            //   alert(this.shopname)
          }
      }
  },
  mounted(){
      if(this.shopname ==''){
           this.shop_name_errors.push("shop name is required")
      }
  }
};
</script>

<style>
.steps {
  background-color: red;
  color: white;
}
.step {

  border:2px solid white!important;
  /* cursor: pointer */
   /* cursor:grabbing; */
  /* margin-right:2px */
}
.active {
    /* color:black; */
    /* border:2px solid white; */
    /* color:#595959; */
    background-color:rgb(255, 121, 121)
    /* padding:20px */
}
.multi{
     cursor: pointer
}
</style>
