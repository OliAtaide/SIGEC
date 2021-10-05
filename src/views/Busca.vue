<template>
  <v-sheet class="sheet" width="100%">
    <v-sheet width="100%" class="vinculo-label"
      >Estabelecimento de saúde: UBS do Alecrim</v-sheet
    >
    <v-container>
      <v-col>
        <v-row>
          <v-icon>mdi-home-outline</v-icon>
          <router-link  to="dashboard" class="mr-1" href="">Início</router-link>
          <p class="ma-0">/ Gestão de caso</p>
        </v-row>
        <v-row>
          <v-icon>mdi-account-outline</v-icon>
          <h4>GESTÃO DE CASO</h4>
        </v-row>
        <v-row>
          <v-card>
            <v-row class="ma-10 d-flex">
              <v-subheader>Pesquisar pelo nome ou CPF</v-subheader>
              <v-text-field
                v-model="pesquisa"
                dense
                outlined
                rounded
                clearable
                @submit.prevent="buscaCasos"
              >
              </v-text-field>
              <v-btn
                @click="buscaCasos()"
                rounded
                dark
                color="#AFAFAF"
                class="text-none ml-3 mr-3"
              >
                <v-icon left> mdi-magnify</v-icon>
                Buscar
              </v-btn>
              <v-btn rounded outlined color="#0C109C" class="text-none">
                <v-icon left> mdi-filter-outline</v-icon>
                Filtrar
              </v-btn>
            </v-row>
            <v-row v-if="casos.length == 0" class="ma-10">
              <v-card
                outlined
                width="100%"
                class="rounded-lg d-flex flex-column align-center pa-10"
              >
                <v-img src="@/assets/not-found.svg" width="160px"> </v-img>
                <v-card-text class="text-center pb-0"
                  >Nenhum registro encontrado.</v-card-text
                >
              </v-card>
            </v-row>
            <v-row v-else class="ma-10">
              <v-subheader
                >{{ casos.length }} registros foram encontrados</v-subheader
              >
              <v-spacer></v-spacer>
              <v-btn rounded dark color="#0C109C" class="text-none">
                <v-icon left>mdi-file-export</v-icon>
                Exportar
              </v-btn>
            </v-row>
            <v-row class="ma-10">
              <v-card
                v-for="c in casos"
                :key="c.nome"
                width="100%"
                class="pa-5 resultado mb-5 rounded-lg"
                outlined
              >
                <v-sheet>
                  <p><strong>Nome: </strong>{{ c.nome }}</p>
                  <!-- <p><strong>CPF: </strong>837.721.519-57</p> -->
                  <p>
                    <strong>Idade: </strong>{{ getIdade(c.data_de_nascimento) }}
                  </p>
                  <p><strong>Bairro: </strong>{{ c.bairro }}</p>
                  <p><strong>Status: </strong>{{ c.status }}</p>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-col
                  class="flex-grow-0 d-flex flex-column justify-space-around"
                >
                  <v-row class="ma-0">
                    <v-btn rounded dark class="text-none" color="#0C109C"
                      ><v-icon left>mdi-eye-outline</v-icon> Visualizar
                      detalhes</v-btn
                    >
                  </v-row>
                  <v-row>
                    <v-sheet></v-sheet>
                  </v-row>
                  <v-row class="ma-0">
                    <v-btn
                      width="100%"
                      rounded
                      dark
                      class="text-none"
                      color="#E63946"
                      ><v-icon left>mdi-cancel</v-icon>Encerrar o caso</v-btn
                    >
                  </v-row>
                </v-col>
              </v-card>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </v-sheet>
</template>

<script>
import axios from "axios";

export default {
  name: "Busca",

  created() {
    this.fetchCasos();
  },

  data() {
    return {
      casos: [],
      pesquisa: "",
    };
  },

  methods: {
    fetchCasos() {
      axios
        .get("https://gestaodecasos-edital043.vercel.app/api/casos")
        .then((response) => (this.casos = response.data.data))
        .catch((error) => console.log(error));
    },

    buscaCasos() {
      if (this.pesquisa != "") {
        axios
          .get("https://gestaodecasos-edital043.vercel.app/api/casos")
          .then((response) => {
            var casos = response.data.data;
            this.casos = casos.filter((caso) => this.filtrarCasos(caso));
          })
          .catch((error) => console.log(error));
        // this.casos = this.casos.filter((caso) => this.filtrarCasos(caso));
      } else {
        this.fetchCasos();
      }
      console.log(this.casos);
    },

    getIdade(d) {
      const dia = d.slice(0, 2);
      const mes = d.slice(3, 5);
      const ano = d.slice(6, 10);
      // console.log(ano + "/" + mes + "/" + dia);
      const dn = new Date(ano, mes, dia);
      // var dian = d.split(0,1);
      // console.log(dian);
      const agora = new Date();
      const date = Math.abs(dn - agora);
      // const dia = date.getDate();
      // const month = date.getMonth();
      // const year = date.getFullYear();
      // return dia + "/" + month + "/" + year;
      return parseInt(date / 31536000000);
    },

    filtrarCasos(caso) {
      if (caso.nome.toLowerCase().includes(this.pesquisa)) {
        return caso;
      }
    },
  },
};
</script>

<style scoped>
.vinculo-label {
  padding-left: 18%;
  padding-right: 18%;
}
.sheet{
  background-color: inherit !important;
}
.resultado {
  display: flex !important;
}
.v-text-field{
  width: 10% !important;
}
</style>