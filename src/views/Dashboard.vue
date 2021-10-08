<template>
  <v-container>
    <v-row class="header">
      <v-col>
        <h2>Olá, Kelly Gomez</h2>
        <p>Selecione um vínculo</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="add-button">
        Adicione um vínculo
        <v-btn
          outlined
          large
          fab
          color="#0096C7"
          to="dashboard/vinculo/adicionar"
        >
          <v-icon> mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <hr class="mb-5" />
    <v-row>
      <v-col
        v-for="v in $store.state.vinculos"
        :key="v.id"
        md="4"
        sm="12"
        cols="12"
      >
        <v-card>
          <v-card-title>
            <v-icon>mdi-briefcase</v-icon>
            {{ v.perfil }}
          </v-card-title>
          <v-card-subtitle>
            <v-icon>mdi-map-marker-outline</v-icon>
            {{ v.estabelecimento }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn to="busca" dark color="#0C109C" block rounded>
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
@media only screen and (max-width: 600px) {
  .add-button,
  .spacer {
    display: none !important;
  }
}
</style>