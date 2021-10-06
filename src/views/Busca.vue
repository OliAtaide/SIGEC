<template>
  <v-sheet class="sheet" width="100%">
    <v-sheet width="100%" class="vinculo-label"
      >Estabelecimento de saúde: UBS do Alecrim</v-sheet
    >
    <v-container>
      <v-col>
        <v-row>
          <v-icon>mdi-home-outline</v-icon>
          <router-link to="dashboard" class="mr-1" href="">Início</router-link>
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
                class="pesquisa"
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
              <v-btn @click="filtro.visivel = !filtro.visivel" rounded outlined color="#0C109C" class="text-none">
                <v-icon left> mdi-filter-outline</v-icon>
                Filtrar
              </v-btn>
            </v-row>
            <v-row v-if="filtro.visivel" class="ma-10">
              <v-card outlined>
                <v-card-title>Filtros</v-card-title>
                <v-card-text
                  >Preencha pelo menos um dos campos de pesquisa
                  abaixo:</v-card-text
                >
                <v-col>
                  <v-row class="pb-5">
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Data de nascimento</v-subheader>
                      <v-text-field
                        type="date"
                        rounded
                        outlined
                        dense
                        hide-details
                        v-model="filtro.data_de_nascimento"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Sexo</v-subheader>
                      <v-select
                        rounded
                        outlined
                        dense
                        hide-details
                        :items="['', 'Masculino', 'Feminino', 'Não informado']"
                        v-model="filtro.sexo"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Nome da mãe</v-subheader>
                      <v-text-field
                        placeholder="Ex.: Maria da Silva"
                        rounded
                        outlined
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Bairro</v-subheader>
                      <v-text-field
                        rounded
                        outlined
                        dense
                        hide-details
                        v-model="filtro.bairro"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Escolaridade</v-subheader>
                      <v-select
                        rounded
                        outlined
                        dense
                        hide-details
                        :items="['', 'fundamental', 'medio', 'superior']"
                        v-model="filtro.escolaridade"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Raça</v-subheader>
                      <v-text-field
                        rounded
                        outlined
                        dense
                        hide-details
                        v-model="filtro.raca"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Status</v-subheader>
                      <v-select
                        rounded
                        outlined
                        dense
                        hide-details
                        :items="[
                          '',
                          'Diagnosticado',
                          'Descartado',
                          'Em tratamento',
                          'Encerrado',
                        ]"
                        v-model="filtro.status"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Data de abertura</v-subheader>
                      <v-text-field
                        type="date"
                        rounded
                        outlined
                        dense
                        hide-details
                        v-model="filtro.data_abertura"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                      <v-subheader>Data de encerramento</v-subheader>
                      <v-text-field
                        type="date"
                        rounded
                        outlined
                        dense
                        hide-details
                        v-model="filtro.data_encerramento"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      ><v-btn
                        @click="limparFiltro()"
                        dark
                        rounded
                        color="#FCA311"
                        class="text-none mr-5"
                      >
                        <v-icon left>mdi-eraser</v-icon>
                        Limpar
                      </v-btn>
                      <v-btn
                        @click="buscaCasos()"
                        dark
                        rounded
                        color="#0C109C"
                        class="text-none"
                      >
                        <v-icon left>mdi-magnify</v-icon>
                        Buscar
                      </v-btn></v-col
                    >
                  </v-row>
                </v-col>
              </v-card>
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
      filtro: {
        visivel: false,
        data_de_nascimento: "",
        bairro: "",
        sexo: "",
        escolaridade: "",
        raca: "",
        status: "",
        data_abertura: "",
        data_encerramento: "",
      },
    };
  },

  methods: {
    fetchCasos() {
      axios
        .get("/casos")
        .then((response) => (this.casos = response.data.data))
        .catch((error) => console.log(error));
    },

    buscaCasos() {
      axios
        .get("/casos")
        .then((response) => {
          var casos = response.data.data;
          this.casos = casos.filter((caso) => this.filtrarCasos(caso));
        })
        .catch((error) => console.log(error));
      // this.casos = this.casos.filter((caso) => this.filtrarCasos(caso));
    },

    getIdade(d) {
      const dia = d.slice(0, 2);
      const mes = d.slice(3, 5);
      const ano = d.slice(6, 10);
      const dn = new Date(ano, mes, dia);
      const agora = new Date();
      const date = Math.abs(dn - agora);
      return parseInt(date / 31536000000);
    },

    filtrarCasos(caso) {
      var casoNome =
        caso.nome.toLowerCase().includes(this.pesquisa) || this.pesquisa == "";
      var casoSexo = caso.sexo == this.filtro.sexo || this.filtro.sexo == "";
      var casoEsco =
        caso.escolaridade == this.filtro.escolaridade ||
        this.filtro.escolaridade == "";
      var casoRaca = caso.raca == this.filtro.raca || this.filtro.raca == "";
      var casoStat =
        caso.status == this.filtro.status || this.filtro.status == "";

      if (casoNome && casoSexo && casoEsco && casoRaca && casoStat) {
        return caso;
      }
    },

    limparFiltro(){
      this.filtro.data_de_nascimento = '';
      this.filtro.bairro = '';
      this.filtro.sexo = '';
      this.filtro.escolaridade = '';
      this.filtro.raca = '';
      this.filtro.status = '';
      this.filtro.data_abertura = '';
      this.filtro.data_encerramento = '';
      console.log('ok');
    }
  },
};
</script>

<style scoped>
.vinculo-label {
  padding-left: 18%;
  padding-right: 18%;
}
.sheet {
  background-color: inherit !important;
}
.resultado {
  display: flex !important;
}
.pesquisa {
  width: 10% !important;
}
.filtros{

}
</style>