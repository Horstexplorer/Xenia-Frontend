<template>
  <div>
    <GuildListNavigationDrawer :guilds="guilds"/>
    <router-view></router-view>
  </div>
</template>

<script>
import API from "@/xbd_api/httpcore"
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
      this.$router.push("/");
    }
    // load data for guilds
    API.rawHTTP_GET("/data/frontend/meta/guilds").then(
        response => {
          this.guilds = response.body.guilds;
        }, () => {}
    )
  }
}
</script>

<style scoped>

</style>