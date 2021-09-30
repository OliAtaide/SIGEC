<template>
  <v-container>
    <v-row class="header">
      <v-col>
        <h1>Olá, Kelly Gomez</h1>
        <p>Selecione um vínculo</p>
      </v-col>
      <v-divider></v-divider>
      <v-col>
        Adicione um vínculo
        <v-btn outlined large fab color="#0096C7"><v-icon> mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
    <hr class="mb-5">
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-briefcase</v-icon>
            Médico
          </v-card-title>
          <v-card-subtitle>
            <v-icon>mdi-map-marker-outline</v-icon>
            UBS do Alecrim
          </v-card-subtitle>
          <v-card-actions>
            <v-btn dark color="#0C109C" block rounded> Acessar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-briefcase</v-icon>
            Médico
          </v-card-title>
          <v-card-subtitle>
            <v-icon>mdi-map-marker-outline</v-icon>
            UBS do Alecrim
          </v-card-subtitle>
          <v-card-actions>
            <v-btn dark color="#0C109C" block rounded> Acessar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-briefcase</v-icon>
            Médico
          </v-card-title>
          <v-card-subtitle>
            <v-icon>mdi-map-marker-outline</v-icon>
            UBS do Alecrim
          </v-card-subtitle>
          <v-card-actions>
            <v-btn dark color="#0C109C" block rounded> Acessar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 64%;
}
h1{
    font-size: 30px;
}
.header{
    color: #0096C7;
}
</style>