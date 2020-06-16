<template>
  <div>
      <h1>Reset Password</h1><br>
       <v-text-field :label="'* ' + $t('email_field')" required solo v-model="email"></v-text-field>
         <v-btn color="#31d097" cols="12" dark block @click="sign"
                  >{{$t('signin')}}</v-btn
                >
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>