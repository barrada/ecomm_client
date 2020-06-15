<template>
  <v-layout>
     <main>
    <h1>{{ $t('greeting') }}</h1>
 
    
  </main>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      > 
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
            <v-btn class="ma-2" color="primary" dark>Accept
        <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
          </small>
        </footer>
      </blockquote>
    </v-flex>
    <div id="test">
      <h2>testing</h2>
    </div>
  </v-layout>
</template>
