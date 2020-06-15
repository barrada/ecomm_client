// NOT USED ++++++++++++++++++ DELETE ME
// 
<template>
       <v-card>
        <v-card-title>
          <span class="headline">Sign in</span>
          <v-spacer></v-spacer>
           
          <!-- <RegisterForm name="dialog"/> -->
          <v-btn  color="warning" dark to="/inspire" @click="dialog = false">Register</v-btn>
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
                <v-text-fieldd
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" >
                <v-text-field label="Email*" required outlined ></v-text-field>
                  <v-text-field outlined label="Password*" type="password" required></v-text-field>
             
                    <v-btn color="green" cols="12" dark block>Sign in</v-btn>
              </v-col>
              <v-col cols="12">
              
              </v-col>
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
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
export default {
components:{
    RegisterForm
},
data(){
    return{
        dialog2:false
    }
}
}
</script>

<style>

</style>