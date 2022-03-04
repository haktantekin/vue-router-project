<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p> Kullanıcı ID Bilgisi: {{ $route.params.id }}</p>
    <!-- <router-link tag="button" class="btn btn-primary"  :to="'/user/' + $route.params.id + '/edit'">Kullanıcıyı Düzenle</router-link> -->
    <!-- <router-link tag="button" class="btn btn-primary" :to="{ name : 'userEdit', params : { id: $route.params.id }, query: {name: 'haktan', lastName: 'tekin'}}">Kullanıcıyı Düzenle</router-link> -->
    <router-link tag="button" class="btn btn-primary" :to="navigationLink">Kullanıcıyı Düzenle</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        navigationLink: 
        { 
          name : 'userEdit', 
          params : { id: this.$route.params.id }, 
          query: {name: 'haktan', lastName: 'tekin'},
          hash: '#data'
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('Component Kontrol');

      next();
      // next(false); Girişi engelliyord
    }
  }
</script>
