<template>

  <div class="text-center">
    
    
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
          <v-btn color="primary" text @click="name = false">
            I accept {{name}}
          </v-btn>
        </v-card-actions>
      </v-card>

  </div>
</template>

<script>
// import LoginForm from "@/components/LoginForm.vue";
export default {
  components: {
    // LoginForm
  },
  props:['name'],
  data() {
    return {
    // dialog: true,
      dialog2: false
    };
  }
};
</script>

<style></style>
