<template>
  <v-app-bar dark color="#0096C7" app>
    <v-app-bar-title>
      <router-link
        height="100%"
        class="text-decoration-none brand"
        to="/dashboard"
      >
        SiGEC
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="nome">Kelly Gomez</div>
    <v-menu content-class="rounded-xl">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="elevation-0" rounded color="transparent" dark v-bind="attrs" v-on="on">
          <v-avatar size="36">
            <v-img src="@/assets/ig.jpg"></v-img>
          </v-avatar>
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense class="d-flex flex-column align-end">
        <v-list-item>
          <router-link to="/adicionar-vinculo">Adicionar um vínculo</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/dashboard">Meu perfil</router-link>
        </v-list-item>
        <v-list-item>
          <a @click="logout()">Sair</a>
        </v-list-item>
      </v-list>
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
.brand {
  color: white;
  font-size: 2em;
}
@media only screen and (max-width: 600px) {
  .v-app-bar {
    padding-left: inherit;
    padding-right: inherit;
  }
  .nome {
    display: none;
  }
}
</style>