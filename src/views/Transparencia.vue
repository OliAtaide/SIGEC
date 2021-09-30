<template>
  <v-container>
    <h1>Transparência</h1>
    <v-row>
      <v-col>
        <v-row class="ma-0">
          <v-card width="100%" class="pa-5" color="#0C109C" height="180">
            <v-sheet width="inherit" class="icon-sheet pa-3">
              <v-icon>mdi-clipboard-text</v-icon>
            </v-sheet>
            <v-card-title>17992</v-card-title>
          </v-card>
        </v-row>
        <v-row class="ma-0">
          <v-card outlined class="card-blue" width="100%" height="180"></v-card>
        </v-row>
      </v-col>
      <v-col>
        <v-row class="ma-0">
          <v-card width="100%" class="pa-5 card-green" height="180" outlined>
            <v-sheet width="inherit" class="icon-sheet pa-3">
              <v-icon>mdi-clipboard-text</v-icon>
            </v-sheet>
            <v-card-title>17992</v-card-title>
          </v-card>
        </v-row>
        <v-row class="ma-0">
          <v-card
            class="card-orange"
            width="100%"
            outlined
            height="180"
          ></v-card>
        </v-row>
      </v-col>
      <v-col class="mb-0">
        <v-card class="card-cyan pa-5" outlined height="100%">
          <v-sheet width="inherit" class="icon-sheet pa-3">
            <v-icon>mdi-clipboard-text</v-icon>
          </v-sheet>
          <v-card-title>17992</v-card-title>
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
  background-color: white;
}
h1{
    font-weight: inherit;
    text-align: center;
    color: #FCA311;
    margin-bottom: 5em;
}
header {
  display: none;
}
.card-blue {
  border: 1px solid #0c109c !important;
}
.card-green {
  border: 1px solid #1f8f3c !important;
}
.card-orange {
  border: 1px solid #e07716 !important;
}
.card-cyan {
  border: 1px solid #3e86ab !important;
}
</style>