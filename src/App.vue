<template>
  <v-app>
    <navbar v-if="!['Login', 'Transparencia', 'AutoCadastro'].includes($route.name)"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  name: 'App',

  beforeCreate(){
    this.$store.dispatch('getCasos');
    this.$store.dispatch('getVinculos');
  },

  created(){
    this.checkAuth();
  },

  methods:{
    checkAuth(){
      var pag = this.$route.name != 'Login' && this.$route.name != 'Transparencia' && this.$route.name != 'AutoCadastro';
      if(pag && !this.$store.state.isAuthenticated){
        this.$router.push({name: 'Login'});
      }
    }
  },
  
  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --color1: #0c109c;
  --color2: #008AB6;
  --color3: #0096c7;
  --color4: #fca311;
}

*{
  font-family: Poppins, "Courier New", Courier, monospace;
}
.v-main{
  background-color: #F6F6F6;
}
.container {
  width: 64%;
}

@media only screen and (max-width: 960px) {
  .container{
    width: inherit;
  }
}
</style>