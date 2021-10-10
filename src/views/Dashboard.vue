<template>
  <v-container>
    <v-row class="header ma-0">
      <div>
        <h2>Olá, Kelly Gomez</h2>
        <p>Selecione um vínculo</p>
      </div>
      <v-spacer></v-spacer>
      <div class="d-md-flex d-none align-center float-right">
        Adicione um vínculo
        <v-btn
        class="ml-3"
          outlined
          large
          fab
          color="var(--color3)"
          to="adicionar-vinculo"
        >
          <v-icon> mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-row>
    <hr class="mb-5" />
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
// import axios from "axios";
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