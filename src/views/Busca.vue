<template>
  <v-sheet class="sheet" width="100%">
    <v-overlay :value="overlay">
      <v-card light class="ok-card" width="50vw">
        <v-row class="title ma-0">
          <v-card-title> Encerramento de caso </v-card-title>
          <v-spacer></v-spacer>
          <v-btn class="float-right align-self-center white--text" icon>
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-row>
        <v-sheet class="pa-16">
          <v-subheader class="mb-10 text-center">
            Você está encerrando o caso, deseja continuar?
          </v-subheader>
          <v-row class="">
            <v-col>
              <v-btn
                @click="overlay = false"
                width="100%"
                color="#9D0208"
                class="text-none white--text"
                rounded
              >
                <v-icon left> mdi-close </v-icon>
                Cancelar
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                @click="encerrarCaso"
                width="100%"
                color="#E63946"
                class="text-none white--text"
                rounded
              >
                <v-icon left> mdi-cancel </v-icon>
                Encerrar o caso
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card>
    </v-overlay>
    <v-sheet width="100%" class="vinculo-label">
      <strong>Estabelecimento de saúde:</strong>
      {{ vinculo.estabelecimento }}
    </v-sheet>
    <v-container>
      <v-col>
        <v-row>
          <v-icon>mdi-home-outline</v-icon>
          <v-breadcrumbs
            divider="/"
            :items="[
              {
                text: 'Início',
                disabled: false,
                to: '/dashboard',
              },
              {
                text: 'Gestão de caso',
                disabled: true,
              },
            ]"
          ></v-breadcrumbs>
        </v-row>
        <v-row class="mb-5">
          <v-icon class="mr-5">mdi-account-outline</v-icon>
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
                @submit.prevent="buscaCasos"
              >
              </v-text-field>
              <v-btn
                @click="buscaCasos()"
                rounded
                color="#AFAFAF"
                class="botao-buscar text-none ml-3 mr-3 white--text"
              >
                <v-icon left> mdi-magnify</v-icon>
                Buscar
              </v-btn>
              <v-btn
                @click="filtro.visivel = !filtro.visivel"
                rounded
                outlined
                color="#0C109C"
                class="botao-filtro text-none"
              >
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
                        :items="[
                          '',
                          'Ensino Fundamental',
                          'Ensino Médio',
                          'Graduação',
                          'Mestrado',
                        ]"
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
                        rounded
                        color="#FCA311"
                        class="text-none mr-5 white--text"
                      >
                        <v-icon left>mdi-eraser</v-icon>
                        Limpar
                      </v-btn>
                      <v-btn
                        @click="buscaCasos()"
                        rounded
                        color="#0C109C"
                        class="text-none white--text"
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
              <v-subheader>
                {{ casos.length }} registros foram encontrados
              </v-subheader>
              <v-spacer></v-spacer>
              <v-btn rounded color="#0C109C" class="text-none white--text">
                <v-icon left>mdi-file-export</v-icon>
                Exportar
              </v-btn>
            </v-row>
            <v-row class="ma-10">
              <v-card
                v-for="(c, i) in casos"
                :key="i"
                width="100%"
                class="pa-5 resultado mb-5 rounded-lg"
                outlined
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-sheet>
                      <p><strong>Nome: </strong>{{ c.nome }}</p>
                      <p>
                        <strong>Idade: </strong>
                        {{ getIdade(c.data_de_nascimento) }}
                      </p>
                      <p><strong>Bairro: </strong>{{ c.bairro }}</p>
                      <p><strong>Status: </strong>{{ c.status }}</p>
                    </v-sheet>
                    <v-spacer></v-spacer>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    class="flex-grow-0 d-flex flex-column justify-space-around"
                  >
                    <v-btn rounded class="text-none white--text" color="#0C109C">
                      <v-icon left>mdi-eye-outline</v-icon>
                      Visualizar detalhes
                    </v-btn>
                    <v-btn
                      width="100%"
                      rounded
                      class="text-none white--text"
                      color="#E63946"
                      @click="
                        overlay = true;
                        index = i;
                      "
                    >
                      <v-icon left>mdi-cancel</v-icon>
                      Encerrar o caso
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
            <!-- <v-pagination
              :length="1"
              circle
            >
            </v-pagination> -->
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
    this.getVinculo();
    this.fetchCasos();
  },

  data() {
    return {
      vinculo: "",
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
      overlay: false,
      index: null,
    };
  },

  methods: {
    getVinculo() {
      axios.get("/vinculos").then((response) => {
        var vinculos = response.data.data;
        var i = this.$route.params.id;
        this.vinculo = vinculos[i];
      });
    },

    fetchCasos() {
      axios
        .get("/casos")
        .then((response) => (this.casos = response.data.data))
        .catch((error) => console.log(error));
    },

    encerrarCaso() {
      this.casos[this.index].status = "Encerrado";
      this.$store.commit("setCasos", this.casos);
      this.overlay = false;
    },

    buscaCasos() {
      var casos = this.$store.state.casos;
      this.casos = casos.filter((caso) => this.filtrarCasos(caso));
      console.log(this.casos);
    },

    formatarData(d, f) {
      const date = d.split("-");
      if (f == "dmy") {
        return new Date(date[2], date[1], date[0]);
      }
      return new Date(date[0], date[1], date[2]);
    },

    getIdade(d) {
      const dn = this.formatarData(d, "dmy");
      const agora = new Date();
      const date = Math.abs(agora - dn);
      return parseInt(date / 31536000000);
    },

    compararDatas(data, filtro) {
      var dn1 = this.formatarData(data, "dmy");
      var dn2 = this.formatarData(filtro, "ymd");
      return dn1.getTime() == dn2.getTime() || filtro == "";
    },

    filtrarCasos(caso) {
      var casoNome =
        caso.nome.toLowerCase().includes(this.pesquisa) || this.pesquisa == "";

      var casoBair =
        caso.bairro.toLowerCase().includes(this.filtro.bairro) ||
        this.filtro.bairro == "";

      var casoRaca =
        caso.raca.toLowerCase().includes(this.filtro.raca) ||
        this.filtro.raca == "";

      var casoSexo = caso.sexo == this.filtro.sexo || this.filtro.sexo == "";

      var casoEsco =
        caso.escolaridade == this.filtro.escolaridade ||
        this.filtro.escolaridade == "";

      var casoStat =
        caso.status == this.filtro.status || this.filtro.status == "";

      var casoNasc = this.compararDatas(
        caso.data_de_nascimento,
        this.filtro.data_de_nascimento
      );

      var casoAber = this.compararDatas(
        caso.data_abertura,
        this.filtro.data_abertura
      );

      var casoEnce = this.compararDatas(
        caso.data_encerramento,
        this.filtro.data_encerramento
      );

      if (
        casoNome &&
        casoBair &&
        casoSexo &&
        casoEsco &&
        casoRaca &&
        casoStat &&
        casoNasc &&
        casoAber &&
        casoEnce
      ) {
        return caso;
      }
    },

    limparFiltro() {
      this.filtro.data_de_nascimento = "";
      this.filtro.bairro = "";
      this.filtro.sexo = "";
      this.filtro.escolaridade = "";
      this.filtro.raca = "";
      this.filtro.status = "";
      this.filtro.data_abertura = "";
      this.filtro.data_encerramento = "";
      this.buscaCasos();
    },
  },
};
</script>

<style scoped>
.vinculo-label {
  padding-left: 19%;
  padding-right: 19%;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
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
.title {
  background-color: #0096c7;
  color: white;
}
@media only screen and (max-width: 960px) {
  .vinculo-label{
    padding-left: 1%;
    padding-right: 1%;
  }
  .pesquisa {
    width: 100% !important;
  }
  .botao-buscar {
    margin: 0 !important;
  }
  .botao-buscar,
  .botao-filtro {
    width: 50%;
  }
  .resultado .v-btn{
    margin-top: 1em;
    margin-bottom: 1em;
  }
}
</style>