<template>
  <div class="dashboard">
    <guild-list-navigation-drawer v-model="drawer" :guilds="guilds" />
    <router-view @notify="addAlert" />
  </div>
</template>

<script>
import APICORE from "@/xbd_api/httpcore"
import GuildListNavigationDrawer from "@/components/guildlist/GuildListNavigationDrawer";

export default {
  name: "Dashboard",

  props: {
    value: {
      required: true
    }
  },

  components: {GuildListNavigationDrawer},

  data(){
    return{
      guilds: []
    }
  },

  mounted() {
    if(!APICORE.AUTH_TOKEN.isSet){
      this.$emit("notify", "warning", "You need to be logged in to view this page");
      this.$router.push("/");
      return;
    }
    // load data for guilds
    APICORE.rawHTTP_GET("data/client/frontend/meta/guilds").then(
        response => {
          this.guilds = response.body.guilds;
        }, () => {}
    )
  },

  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods:{
    addAlert(level, message){
      this.$emit("notify", level, message)
    }
  },

}
</script>

<style scoped>
.dashboard{
  display:flex;
}
</style>