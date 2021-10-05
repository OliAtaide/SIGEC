<template>
  <v-container>
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
            v-model="perfil"
          >
          </v-text-field>
          <v-text-field
            label="Estabelecimento de saúde"
            dense
            rounded
            outlined
            color="#0086B2"
            v-model="estabelecimento"
          >
          </v-text-field>
          <v-row>
            <v-col>
              <v-btn
                type="submit"
                block
                rounded
                color="#0C109C"
                class="text-none"
                dark
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
                class="text-none"
                dark
                @click="$router.push('..')"
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
        .post("vinculo", formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.v-card__title {
  color: #0c109c;
}
.container{
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