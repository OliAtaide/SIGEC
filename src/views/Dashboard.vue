<template>
  <v-container>
    <v-row class="header ma-0">
      <div>
        <h2>Olá, Kelly Gomez</h2>
        <p>Selecione um vínculo</p>
      </div>
      <v-spacer></v-spacer>
      <div class="add-button float-right">
        Adicione um vínculo
        <v-btn
          outlined
          large
          fab
          color="#0096C7"
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
        :key="v.id"
        md="4"
        sm="12"
        cols="12"
      >
        <v-card>
          <v-card-title>
            <v-icon color="#FCA311" left>mdi-briefcase-plus</v-icon>
            {{ v.perfil }}
          </v-card-title>
          <v-card-subtitle>
            <v-icon left>mdi-map-marker-outline</v-icon>
            {{ v.estabelecimento }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn @click="
              $router.push({ name: 'Busca', params: { id: i } })"
              color="#0C109C" class="text-none white--text" block rounded>
              Acessar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      vinculos: [],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
}
.header {
  color: #0096c7;
}
@media only screen and (max-width: 960px) {
  .add-button,
  .spacer {
    display: none !important;
  }
}
</style>