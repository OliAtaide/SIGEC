<template>
  <v-app-bar color="#0096C7" app>
    <v-app-bar-title>SiGEC</v-app-bar-title>
    <v-spacer></v-spacer>
    <div>Kelly Gomez</div>
    <v-avatar>
      <v-img src="@/assets/ig.jpg"></v-img>
    </v-avatar>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-card class="">
        <v-list class="pa-0">
          <v-list-item>
              <a to="/FormReceita">Adicionar um vínculo</a>
          </v-list-item>
          <v-list-item>
              <a to="EditarPerfil">Meu perfil</a>
          </v-list-item>
          <v-list-item>
              <a @click="logout()">Sair</a>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.v-app-bar {
  height: 120px;
  padding-left: 18%;
  padding-right: 18%;
}
.v-avatar {
  border: 0.1em solid white;
}
</style>