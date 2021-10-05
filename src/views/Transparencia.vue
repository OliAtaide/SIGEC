<template>
  <v-sheet class="sheet d-flex" block d-flex fixed>
    <v-container class="rounded-lg mt-5 mb-5 pa-10">
      <v-row>
        <v-col>
          <v-btn
            class="text-none"
            outlined
            rounded
            color="#fca311"
            @click="$router.push('/')"
          >
            <v-icon left>mdi-chevron-left</v-icon>
            Voltar
          </v-btn>
        </v-col>
        <v-col>
          <h1 class="mb-10">Transparência</h1>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <v-row class="ma-0 mb-6">
            <v-card width="100%" class="pa-5" color="#0C109C" dark>
              <v-row class="ma-0">
                <v-sheet
                  width="inherit"
                  color="white"
                  class="icon-sheet pa-3 rounded-sm"
                >
                  <v-icon color="#0C109C">mdi-clipboard-text</v-icon>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-card-title class="pa-0">
                  <strong>{{ indicadores.tratados }}</strong>
                </v-card-title>
              </v-row>
              <v-row class="ma-0">
                <v-card-text width="100%" class="text-right pr-0"
                  >Casos tratados</v-card-text
                >
              </v-row>
            </v-card>
          </v-row>
          <v-row class="ma-0">
            <v-card outlined class="card-blue pa-5" width="100%">
              <v-row class="ma-0">
                <v-sheet
                  width="inherit"
                  color="#0C109C"
                  class="icon-sheet pa-3 rounded-sm"
                >
                  <v-icon color="white">mdi-clipboard-text</v-icon>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-card-title class="pa-0">
                  <strong>{{ indicadores.suspeitos }}</strong>
                </v-card-title>
              </v-row>
              <v-row class="ma-0">
                <v-card-text width="100%" class="text-right pr-0"
                  >Casos suspeitos</v-card-text
                >
              </v-row>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <v-row class="ma-0 mb-6">
            <v-card width="100%" class="pa-5 card-green" outlined>
              <v-row class="ma-0">
                <v-sheet
                  width="inherit"
                  color="#1f8f3c"
                  class="icon-sheet pa-3 rounded-sm"
                >
                  <v-icon color="white">mdi-clipboard-text</v-icon>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-card-title class="pa-0">
                  <strong>{{ indicadores.descartados }}</strong>
                </v-card-title>
              </v-row>
              <v-row class="ma-0">
                <v-card-text width="100%" class="text-right pr-0"
                  >Casos descartados</v-card-text
                >
              </v-row>
            </v-card>
          </v-row>
          <v-row class="ma-0">
            <v-card class="card-orange pa-5" width="100%" outlined>
              <v-row class="ma-0">
                <v-sheet
                  width="inherit"
                  color="#e07716"
                  class="icon-sheet pa-3 rounded-sm"
                >
                  <v-icon color="white">mdi-clipboard-text</v-icon>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-card-title class="pa-0">
                  <strong>{{ indicadores.perdidos }}</strong>
                </v-card-title>
              </v-row>
              <v-row class="ma-0">
                <v-card-text width="100%" class="text-right pr-0"
                  >Casos perdidos</v-card-text
                >
              </v-row>
            </v-card>
          </v-row>
        </v-col>
        <v-col class="mb-0">
          <v-card class="card-cyan pa-5" outlined height="100%">
            <v-row class="ma-0">
              <v-sheet
                width="inherit"
                color="#3e86ab"
                class="icon-sheet pa-3 rounded-sm"
              >
                <v-icon color="white">mdi-clipboard-text</v-icon>
              </v-sheet>
              <v-spacer></v-spacer>
              <v-card-title class="pa-0">
                <strong>{{ soma }}</strong>
              </v-card-title>
            </v-row>
            <v-row class="ma-0">
              <v-card-text width="100%" class="text-right pr-0"
                >Casos de covid</v-card-text
              >
            </v-row>
            <v-card-text class="pa-0 d-flex">
              <p>Jovem (0-19 anos)</p>
              <v-spacer></v-spacer>
              <p>{{ indicadores.estratificacao.jovens }}</p>
            </v-card-text>
            <v-card-text class="pa-0 d-flex">
              <p>Adultos (20-60 anos)</p>
              <v-spacer></v-spacer>
              <p>{{ indicadores.estratificacao.adultos }}</p>
            </v-card-text>
            <v-card-text class="pa-0 d-flex">
              <p>Idosos (acima de 60)</p>
              <v-spacer></v-spacer>
              <p>{{ indicadores.estratificacao.idosos }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "Transparencia",

  created() {
    this.getData();
  },

  data() {
    return {
      indicadores: "",
      soma: "",
    };
  },

  methods: {
    getData() {
      axios
        .get("/indicadores")
        .then((response) => {
          this.indicadores = response.data.data;
          var est = this.indicadores.estratificacao;
          this.soma = est.idosos + est.adultos + est.jovens;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.sheet {
  height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  font-weight: inherit;
  text-align: center;
  color: #fca311;
}
header {
  display: none;
}
.card-blue {
  border: 1px solid #0c109c !important;
  color: #0c109c;
}
.card-green {
  border: 1px solid #1f8f3c !important;
  color: #1f8f3c;
}
.card-orange {
  border: 1px solid #e07716 !important;
  color: #e07716;
}
.card-cyan {
  border: 1px solid #3e86ab !important;
  color: #3e86ab;
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>