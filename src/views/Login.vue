<template>
  <v-sheet class="sheet d-flex" block d-flex fixed>
    <v-sheet class="brand">
      <h1>SIGEC</h1>
      <h3>Sistema de gestão de casos</h3>
      <hr width="10%" />
      <v-btn class="mt-3" rounded outlined color="white"
        >Acessar transparência</v-btn
      >
    </v-sheet>
    <v-card width="30%" height="90%" class="pa-10">
      <v-form>
        <v-card-title>Login</v-card-title>
        <v-text-field
          color="#008AB6"
          type="email"
          label="Email"
          rounded
          outlined
          dense
          prepend-inner-icon="mdi-email"
        ></v-text-field>
        <v-text-field
          color="#008AB6"
          type="password"
          label="Senha"
          rounded
          outlined
          dense
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
        <v-btn type="submit" dark color="#0C109C" block rounded> Entrar </v-btn>
      </v-form>
      <v-divider></v-divider>
      <v-row class="ma-10">
        <v-col sm="6">
          <v-img src="@/assets/lais-logo.svg"></v-img>
        </v-col>
        <v-col sm="6">
          <v-img src="@/assets/ufrn-logo.svg"></v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<script>
export default {};
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
.v-card {
  transform: translate(0%, -50%);
  position: relative;
  top: 50%;
  right: -50%;
}
.brand {
  background-color: transparent !important;
  position: relative;
  top: 25%;
  left: 5%;
  overflow: hidden;
}
.brand h1 {
  font-size: 105px;
  font-weight: inherit;
  color: #fca311;
  margin-bottom: -0.4em;
}
.brand h3 {
  color: white;
  font-size: 41px;
  font-weight: inherit;
}
</style>