<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" class="">
      <!-- <v-btn @click = "dialog = false; dialog2 = true">close</v-btn> -->
      <!-- <LoginForm/> -->
      <!-- login form starts -->
      <v-card class="loginmodal" style="background-color:#dff3fb; ">
        <v-card-title>
          <span class="headline">{{$t('signin')}}</span>
          <v-spacer></v-spacer>

          <!-- <RegisterForm name="dialog"/> -->
          <v-btn color="#fcb800" dark :to="localePath('register')" @click="dialog = false"
            >{{$t('signup')}}</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col> -->
              <v-col cols="12">
                <v-text-field :label="'* ' + $t('email_field')" required solo></v-text-field>
                <v-text-field
                  solo
                  :label="'* ' + $t('password_field')"
                  type="password"
                  required
                  class="mt-n2"
                ></v-text-field>
                <v-row justify="end" class="mt-n8  pa-3">
                  <div cols="12">
                    <nuxt-link to="/">{{this.lang.forgot_password}}</nuxt-link>
                  </div>
                </v-row>

                <v-btn color="#31d097" cols="12" dark block @click="sign"
                  >{{$t('signin')}}</v-btn
                >
              </v-col>
              <v-col cols="12"> </v-col>
              <!-- <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col> -->
            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
         <v-col cols="12" md="12" lg="12">
                 
         </v-col>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions> -->
      </v-card>
      <!-- loginform ends -->
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="#f35353 lighten-2" dark v-on="on"> -->
        <v-btn color="#f35353" dark v-on="on">
          {{$t('signin')}}
        </v-btn>
      </template>
      <!-- 
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card> -->
    </v-dialog>
    <v-dialog v-model="dialog2">
      <RegisterForm :name="dialog2" />
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      name: "ahmed",
      dialog: false,
      dialog2: false,
  
    };
  },
  methods: {
    sign: function() {
    //   alert("sign");
    this.$axios.$get(this.$axios.defaults.baseURL + "/register").then(response => {
      console.log(response);    
     });
    }
  },
   computed:{
    ...mapState({
         lang: state=>state.lang.current
     })
  },
  
};
</script>

<style scoped>
.loginmodal {
  /* background-color: #dff3fb; */
  /* background-color: red!important; */
}
</style>
