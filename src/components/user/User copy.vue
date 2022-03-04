<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>
      User ID : {{ id }}
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn-success" @click="navigateToHome">Home Component</button>
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
