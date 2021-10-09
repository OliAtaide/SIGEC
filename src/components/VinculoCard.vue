<template>
  <v-card v-bind:key="vinculo.id">
    <v-card-title>
      <v-icon color="#FCA311" left>mdi-briefcase-plus</v-icon>
      {{ vinculo.perfil }}
    </v-card-title>
    <v-card-subtitle>
      <v-icon left>mdi-map-marker-outline</v-icon>
      {{ vinculo.estabelecimento }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        @click="$router.push({ name: 'Busca', params: { id: index } })"
        color="#0C109C"
        class="text-none white--text"
        block
        rounded
      >
        Acessar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "VinculoCard",

    props: {
        vinculo: Object,
        index: Number,
    },

};
</script>

<style>
</style>