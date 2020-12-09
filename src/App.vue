<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>Xenia</v-toolbar-title>
        <v-spacer/>
        <router-link to="/">Home</router-link>
        <router-link to="dashboard">Dashboard</router-link>
        <v-spacer/>
        <v-btn right href="https://discord.com/api/oauth2/authorize?client_id=509065864763408385&redirect_uri=https%3A%2F%2Fxenia.netbeacon.de%2Foauth&response_type=code&scope=identify">Login</v-btn>
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
