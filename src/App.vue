<template>
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
      <div class="alerts">
        <v-alert v-for="(alert, i) in alerts" :key="i" class="alert" :type=alert.level dense dismissible >
          {{alert.message}}
        </v-alert>
      </div>
      <router-view class="content" @notify="addAlert"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import API from "@/xbd_api/httpcore"

export default {
  name: 'App',

  data(){
    return{
      alerts: []
    }
  },

  computed: {
    isLoggedIn(){
      return API.AUTH_TOKEN.isSet;
    }
  },

  methods:{
    addAlert(level, message){
      this.alerts.push({
        level: level,
        message: message
      })
    }
  },

}
</script>

<style>
html, body, #app{
  height: 100%;
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;

}
.alerts{
  position: absolute;
  z-index: 1000;
  width: 100%;
}

.alert{
  margin-bottom: 0 !important;
}

.alerts{
  position: absolute;
  z-index: 1000;
  width: 100%;
}
</style>
