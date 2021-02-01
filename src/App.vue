<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>Xenia</v-toolbar-title>
        <v-spacer/>
        <v-btn small text elevation="0" to="/">Home</v-btn>
        <v-btn small text elevation="0" to="/dashboard">Dashboard</v-btn>
        <v-btn small text elevation="0" to="/processing">Data Processing</v-btn>
        <v-btn small text elevation="0" to="/report">Report Content</v-btn>
        <v-btn small text elevation="0" to="/contact">Contact</v-btn>
        <v-spacer/>

        <v-btn right to="/auth/login" v-if=!isLoggedIn>Login</v-btn>
        <v-btn right to="/auth/logout" v-else>Logout</v-btn>

      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import API from "@/xbd_api/httpcore"

export default {
  name: 'App',

  computed: {
    isLoggedIn(){
      return API.AUTH_TOKEN.isSet;
    }
  },

  mounted() {
    window.addEventListener("")
  }
}
</script>

<style>
html, body, #app{
  font-size: 16px;
  margin: 0;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
