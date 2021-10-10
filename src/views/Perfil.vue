<template>
  <v-container>
    <v-row class="header ma-0">
      <div>
        <h2>Meu Perfil - Kelly Gomez</h2>
      </div>
    </v-row>
    <v-row>
      <v-col
        v-for="(v, i) in $store.state.vinculos"
        :key="i"
        md="4"
        cols="12"
      >
        <vinculo-card :vinculo="v" :index="i"></vinculo-card>       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VinculoCard from '@/components/VinculoCard';

export default {
  data() {
    return {
      vinculos: [],
    };
  },

  components:{
    VinculoCard,
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
}
.header {
  color: var(--color3);
}
@media only screen and (max-width: 960px) {
  .add-button,
  .spacer {
    display: none !important;
  }
}
</style>