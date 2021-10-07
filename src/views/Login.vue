<template>
  <v-sheet class="sheet d-flex" block d-flex fixed>
    <v-row>
      <v-col class="brand d-none d-sm-flex">
        <v-sheet>
          <h1>SiGEC</h1>
          <h3>Sistema de gestão de casos</h3>
          <hr width="10%" />
          <v-btn
            to="transparencia"
            class="mt-3 text-none"
            rounded
            outlined
            color="white"
          >
            Acessar transparência
          </v-btn>
        </v-sheet>
      </v-col>
      <v-col>
        <v-card height="90%" class="pa-10">
          <div class="d-flex flex-column d-sm-none">
            <v-card-title class="title">SIGEC</v-card-title>
            <v-divider></v-divider>
          </div>
          <v-form v-if="login" @submit.prevent="submitForm">
            <v-card-title class="text-center justify-center">
              Login
            </v-card-title>
            <v-text-field
              color="#008AB6"
              type="email"
              label="Email"
              rounded
              outlined
              dense
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              type="password"
              label="Senha"
              rounded
              outlined
              dense
              prepend-inner-icon="mdi-lock"
              v-model="password"
            ></v-text-field>
            <v-btn
              class="text-none"
              type="submit"
              dark
              color="#0C109C"
              block
              rounded
            >
              Entrar
            </v-btn>
            <v-btn
              @click="
                login = false;
                cadastro = true;
              "
              text-color="#0C109C"
              class="text-none float-right"
              text
              to=""
            >
              Criar uma conta?
              <v-icon right>mdi-arrow-right-bold</v-icon>
            </v-btn>
          </v-form>
          <v-form v-if="cadastro">
            <v-card-title class="text-center justify-center">
              Autocadastro
            </v-card-title>
            <v-text-field
              color="#008AB6"
              label="Nome"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              label="CPF"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              type="date"
              label="Data de nascimento"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              type="email"
              label="Email"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              label="Email"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              type="password"
              label="Senha"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-text-field
              color="#008AB6"
              type="password"
              label="Confirmação des senha"
              rounded
              outlined
              dense
            ></v-text-field>
            <v-btn
              class="text-none"
              type="submit"
              dark
              color="#0C109C"
              block
              rounded
            >
              Cadastrar
            </v-btn>
            <v-btn
              @click="
                login = true;
                cadastro = false;
              "
              class="text-none"
              text
              to=""
            >
              <v-icon left>mdi-arrow-left-bold</v-icon>
              Login
            </v-btn>
          </v-form>
          <v-btn
            to="transparencia"
            block
            rounded
            outlined
            class="text-none d-flex d-sm-none"
          >
            Acessar transparência
          </v-btn>
          <v-row class="ma-10">
            <v-col cols="6">
              <v-img src="@/assets/lais-logo.svg"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img src="@/assets/ufrn-logo.svg"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
  <!-- e-mail
usuario@lais.huol.ufrn.br
senha
senha@123 -->
</template>



<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      user: "",
      email: "",
      password: "",
      errors: [],
      login: true,
      cadastro: false,
    };
  },

  methods: {
    async submitForm() {
      const formData = {
        password: this.password,
        email: this.email,
      };
      await axios
        .post("auth/login", formData)
        .then((response) => {
          console.log(response.data);
          this.$store.state.isAuthenticated = true;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.sheet {
  min-height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card {
  transform: translate(0%, -50%);
  position: relative;
  top: 50%;
  width: 70%;
  color: #0c109c !important;
}
.brand {
  position: relative;
  top: 25%;
  left: 5%;
  overflow: hidden;
}
.brand h1 {
  font-size: 105px;
  color: #fca311;
  font-weight: inherit;
  margin-bottom: -0.4em;
}
.brand .v-sheet {
  background-color: transparent !important;
}
.title {
  color: #fca311;
}
.brand h3 {
  color: white;
  font-size: 41px;
  font-weight: inherit;
}
input {
  padding: 0 !important;
  margin: 0 !important;
}
@media only screen and (max-width: 600px) {
  .v-card {
    margin: 1em;
    width: auto;
  }
}
</style>