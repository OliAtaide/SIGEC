<template>
  <v-sheet class="sheet d-flex" block d-flex fixed>
    <v-row>
      <v-col class="brand d-none d-md-flex">
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
        <v-card class="pa-10 mt-5 mb-5 d-flex flex-column">
          <div class="d-flex flex-column d-md-none">
            <v-card-title class="title text-center justify-center">
              SiGEC
            </v-card-title>
            <v-divider></v-divider>
          </div>
          <v-card-title class="text-center justify-center">
            Autocadastro
          </v-card-title>
          <v-form>
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
              label="Telefone"
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
              class="text-none white--text"
              type="submit"
              color="var(--color1)"
              block
              rounded
            >
              Cadastrar
            </v-btn>
            <v-btn
              rounded
              class="text-none"
              text
              color="var(--color1)"
              to="login"
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
            class="text-none d-flex d-md-none"
          >
            Acessar transparência
          </v-btn>
          <v-spacer></v-spacer>
          <v-row class="logos align-center">
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

export default {
  name: "Login",
  
};
</script>

<style scoped>
.logos {
  margin: 10%;
}
.sheet {
  overflow: hidden;
  background-image: url("~@/assets/bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card {
  position: relative;
  width: 70%;
  color: var(--color1) !important;
}
.brand {
  position: relative;
  top: 25%;
  left: 5%;
  overflow: hidden;
}
.brand h1 {
  font-size: 90px;
  color: var(--color4);
  font-weight: inherit;
  margin-bottom: -0.4em;
}
.brand .v-sheet {
  background-color: transparent !important;
}
.title {
  color: var(--color4);
}
.brand h3 {
  color: white;
  font-size: 30px;
  font-weight: inherit;
}
input {
  padding: 0 !important;
  margin: 0 !important;
}
@media only screen and (max-width: 960px) {
  .v-card {
    margin: 1em;
    width: auto;
  }
}
</style>