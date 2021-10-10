<template>
  <v-app-bar class="white--text" color="var(--color3)" app>
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
    <v-menu content-class="rounded-xl" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="elevation-0 text-none white--text"
          rounded
          color="transparent"
          v-bind="attrs"
          v-on="on"
        >
          <div class="nome mr-3">Kelly Gomez</div>
          <v-avatar size="36">
            <v-img src="@/assets/ig.jpg"></v-img>
          </v-avatar>
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense class="d-flex flex-column align-end">
        <v-list-item>
          <router-link
            class="text-decoration-none black--text"
            to="/adicionar-vinculo"
            >Adicionar um vínculo</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link class="text-decoration-none black--text" to="/perfil"
            >Meu perfil</router-link
          >
        </v-list-item>
        <v-list-item>
          <a class="text-decoration-none black--text" @click="logout()">Sair</a>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({name: 'Login'});
    },
  },
};
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
.v-list {
  font-size: 14px !important;
}
@media only screen and (max-width: 960px) {
  .v-app-bar {
    padding-left: inherit;
    padding-right: inherit;
  }
  .nome {
    display: none;
  }
}
</style>