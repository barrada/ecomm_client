<template  v-slot:activator="{ on }">

 <!-- <v-btn
          v-if="!$store.state.auth.loggedIn"
          small
          class="ml-2 mr-2"
          color="#f35353"
          dark
          v-on="on"
        >
          {{ $t("signin") }}
        </v-btn> -->
  <v-menu left bottom v-if="$store.state.auth.loggedIn">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <span>ahmed</span>
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <!-- <span>ahmed</span> -->
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Option 3</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Option 4</v-list-item-title>
      </v-list-item>
      <v-list-item>
       
        <v-btn @click="$store.commit('auth/logout')">
          sign out
          <h3>{{ $store.state.auth.userInfo.firstname }}</h3>
          <!-- <h1>{{user.avatar}}</h1> -->
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {};
</script>

<style></style>
