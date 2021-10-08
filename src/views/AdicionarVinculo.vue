<template>
  <v-container>
    <!-- <v-overlay :value="true">
      <v-card light class="ok-card pa-5" width="50vw">
        <v-btn class="float-right" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-sheet class="d-flex flex-column justify-center align-center ">
          <v-icon color="#03972A" size="7em">
          mdi-check-circle
        </v-icon>
        <v-card-title>
          Vínculo adicionado com sucesso
        </v-card-title>
        </v-sheet>
      </v-card>
    </v-overlay> -->
    <v-card width="50%" elevation="0">
      <v-card-title>Adicionar um novo vínculo</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="postVinculo">
          <v-text-field
            label="Cargo"
            dense
            rounded
            outlined
            color="#0086B2"
            :rules="v => !!v || 'Name is required'"
            v-model="perfil"
            required
          >
          </v-text-field>
          <v-text-field
            label="Estabelecimento de saúde"
            dense
            rounded
            outlined
            color="#0086B2"
            v-model="estabelecimento"
            required
          >
          </v-text-field>
          <v-row>
            <v-col>
              <v-btn
                type="submit"
                block
                rounded
                color="#0C109C"
                class="text-none white--text"
                :disabled="perfil == '' || estabelecimento == ''"
              >
                <v-icon left> mdi-plus-circle-outline</v-icon>
                Adicionar vínculo
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                block
                rounded
                color="#C82929"
                class="text-none white--text"
                to="../../dashboard"
              >
                <v-icon left> mdi-close-circle-outline</v-icon>
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AdicionarVinculo",

  data() {
    return {
      perfil: "",
      estabelecimento: "",
    };
  },

  methods: {
    postVinculo() {
      const formData = {
        perfil: this.perfil,
        estabelecimento: this.estabelecimento,
      };
      axios
        .post("vinculos", formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      this.$store.commit("setVinculo", formData);
      this.$router.push("../../dashboard");
    },
  },
};
</script>

<style scoped>
.v-card__title {
  color: #0c109c;
}
.container {
  background-color: white;
}
@media only screen and (max-width: 600px) {
  .container {
    background-color: inherit;
  }
  .v-card {
    width: 100% !important;
  }
}
</style>