<template>
  <v-sheet width="100%">
    <v-sheet width="100%" class="vinculo-label"
      >Estabelecimento de saúde: UBS do Alecrim</v-sheet
    >
    <v-container>
      <v-col>
        <v-row>
          <v-icon>mdi-home-outline</v-icon>
          <a href="">Início</a>
          <p class="ma-0">/ Gestão de caso</p>
        </v-row>
        <v-row>
          <v-icon>mdi-account-outline</v-icon>
          <h4>GESTÃO DE CASO</h4>
        </v-row>
        <v-row>
          <v-card>
            <v-row class="ma-10">
              <v-subheader>Pesquisar pelo nome ou CPF</v-subheader>
              <v-text-field v-model="pesquisa" dense outlined rounded></v-text-field>
              <v-btn @click="buscaCasos()" rounded dark color="#AFAFAF" class="text-none">
                <v-icon left> mdi-magnify</v-icon>
                Buscar
              </v-btn>
              <v-btn rounded outlined color="#0C109C" class="text-none">
                <v-icon left> mdi-filter-outline</v-icon>
                Filtrar
              </v-btn>
            </v-row>
            <v-row class="ma-10">
              <v-subheader>20 registros foram encontrados</v-subheader>
              <v-spacer></v-spacer>
              <v-btn rounded dark color="#0C109C" class="text-none">
                <v-icon left>mdi-file-export</v-icon>
                Exportar
              </v-btn>
            </v-row>
            <v-row class="ma-10">
              <v-card width="100%" class="pa-5 resultado">
                <v-sheet>
                  <p><strong>Nome: </strong>Richard Stanley</p>
                  <p><strong>CPF: </strong>837.721.519-57</p>
                  <p><strong>Idade: </strong>42 anos</p>
                  <p><strong>Bairro: </strong>Lagoa de pititinga</p>
                  <p><strong>Status: </strong>Em andamento</p>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-col class="flex-grow-0 d-flex flex-column justify-space-around">
                  <v-row>
                    <v-btn rounded dark class="text-none" color="#0C109C"><v-icon left>mdi-eye-outline</v-icon> Visualizar detalhes</v-btn>
                  </v-row>
                  <v-row>
                    <v-btn width="100%" rounded dark class="text-none" color="#E63946"><v-icon left>mdi-cancel</v-icon>Encerrar o caso</v-btn>
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
import axios from 'axios';

export default {
  name: 'Busca',
  
  created() {
    this.fetchCasos();
  },

  data(){
    return{
      casos: [],
      pesquisa: '',
    }
  },

  methods: {
    fetchCasos(){
      axios.get('https://gestaodecasos-edital043.vercel.app/api/casos')
      .then(response => this.casos = response.data.data)
      .catch(error => console.log(error))
    },

    buscaCasos(){
      var casos = [];
      if(this.pesquisa != null){
        casos = this.casos.filter(caso => caso.nome = this.pesquisa);
      }
      console.log(casos);
    },

    filtrarCasos(caso){
      if(caso.nome == this.pesquisa){
        return caso;
      }
    }
  }

};
</script>

<style scoped>
.vinculo-label {
  padding-left: 18%;
  padding-right: 18%;
}
.container {
  width: 64%;
}
.resultado {
  display: flex !important;
}
</style>