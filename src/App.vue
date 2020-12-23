<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>Xenia</v-toolbar-title>
        <v-spacer/>


        <v-btn right to="/auth/login" v-if="localStorage.getItem('authToken') == null">Login</v-btn>
        <v-btn right to="/auth/logout" v-else>Logout</v-btn>


      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App'
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
