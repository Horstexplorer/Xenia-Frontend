<template>
  <div class="dashboard">
    <GuildListNavigationDrawer :guilds="guilds"/>
    <router-view @notify="addAlert"></router-view>
  </div>
</template>

<script>
import API from "@/xbd_api/httpcore"
import GuildListNavigationDrawer from "@/components/GuildListNavigationDrawer";

export default {
  name: "Dashboard",
  components: {GuildListNavigationDrawer},
  methods:{
    addAlert(level, message){
      this.$emit("notify", level, message)
    }
  },
  data(){
    return{
      guilds:[]
    }
  },
  mounted() {
    if(!API.AUTH_TOKEN.isSet){
      this.$router.push("/");
      this.$emit("notify", "warning", "You need to be logged in to view this page");
      return;
    }
    // load data for guilds
    API.rawHTTP_GET("/data/client/frontend/meta/guilds").then(
        response => {
          this.guilds = response.body.guilds;
        }, () => {}
    )
  }
}
</script>

<style scoped>
  .dashboard{
    display:flex;
  }
</style>