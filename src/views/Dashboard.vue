<template>
  <div>
    <GuildListNavigationDrawer :guilds="guilds"/>
    <router-view></router-view>
  </div>
</template>

<script>

import GuildListNavigationDrawer from "@/components/GuildListNavigationDrawer";

export default {
  name: "Dashboard",
  components: {GuildListNavigationDrawer},

  data(){
    return{
      guilds:[]
    }
  },

  mounted() {
    if(localStorage.getItem("authToken") == null){
      //this.$router.push("/");
    }
    // LOAD GUILDS FROM BACKEND

  }
}
</script>

<style scoped>

</style>