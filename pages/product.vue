<template>
  <v-conainer>
      <v-row>
          <v-col cols="12">
                <iframe style="position: absolute; height: 100%; border: none" src="https://accept.paymobsolutions.com/api/acceptance/iframes/40993?payment_token=ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SmhiVzkxYm5SZlkyVnVkSE1pT2pJMU1EQXdMQ0pzYjJOclgyOXlaR1Z5WDNkb1pXNWZjR0ZwWkNJNlptRnNjMlVzSW1KcGJHeHBibWRmWkdGMFlTSTZleUptYVhKemRGOXVZVzFsSWpvaVEyeHBabVp2Y21RaUxDSnNZWE4wWDI1aGJXVWlPaUpPYVdOdmJHRnpJaXdpYzNSeVpXVjBJam9pUlhSb1lXNGdUR0Z1WkNJc0ltSjFhV3hrYVc1bklqb2lPREF5T0NJc0ltWnNiMjl5SWpvaU5ESWlMQ0poY0dGeWRHMWxiblFpT2lJNE1ETWlMQ0pqYVhSNUlqb2lTbUZ6YTI5c2MydHBZblZ5WjJnaUxDSnpkR0YwWlNJNklsVjBZV2dpTENKamIzVnVkSEo1SWpvaVExSWlMQ0psYldGcGJDSTZJbU5zWVhWa1pYUjBaVEE1UUdWNFlTNWpiMjBpTENKd2FHOXVaVjl1ZFcxaVpYSWlPaUlyT0RZb09DazVNVE0xTWpFd05EZzNJaXdpY0c5emRHRnNYMk52WkdVaU9pSXdNVGc1T0NJc0ltVjRkSEpoWDJSbGMyTnlhWEIwYVc5dUlqb2lUa0VpZlN3aWNHMXJYMmx3SWpvaU1UQXlMakU1TUM0NE5DNDNOQ0lzSW05eVpHVnlYMmxrSWpvMU1qazRPREV6TENKamRYSnlaVzVqZVNJNklrVkhVQ0lzSW5WelpYSmZhV1FpT2pFM01ESXlMQ0pqWVhKa1gybHVkR1ZuY21GMGFXOXVYMmxrSWpveU16YzBPWDAuNDBaRmtpWG1zT0x6a2RNRGYwbTBUQ0VVN0MwbEhpYkxpa3BpNjhoZFFrYzFFNGRvUGNnaFRKTHdaT1ZDem56UEZMYVJ5bjVHaXk5aFBXS19VOFZKSEE=" frameborder="0" width="100%" height="100%"></iframe>
          </v-col>
      </v-row>
      <!-- <h1>Test Product</h1>
      <v-text-field v-model="price" default="10" label=""  solo></v-text-field>
      <v-btn block @click="buy">Buy</v-btn> -->
  </v-conainer>
</template>

<script>
export default {
    data(){
        return{
            price:20
        }
    },
    methods:{
        buy:function(){
            alert(this.price)
        }
    }

}
</script>

<style>

</style>