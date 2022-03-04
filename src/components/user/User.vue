<template>
  <div class="container">
      <router-view></router-view>
    <hr>
    <button class="btn-success" @click="navigateToHome">Home Component</button>
      <br>  <br>
  </div>

</template>
<script>
  export default {
    data(){
    return{
      id: this.$route.params.id // parametre okuma
    }
    },
    methods : {
      navigateToHome(){
       // this.$router.push("/");
       // this.$router.push({ path: "/" });
        this.$router.push({ name : "anasayfa" });
      }
    },
    watch:{ // watch ile route'un değişimini izliyor
      "$route"(to, from){ // to yeni value'yu, from eski value'yu veriyor
        this.id = to.params.id;
      }
    }
  }
</script> 
