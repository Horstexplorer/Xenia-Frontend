<template>
  <div class="dashboard">
    <GuildSettingsNavigationDrawer></GuildSettingsNavigationDrawer>
    <router-view @notify="addAlert"></router-view>
  </div>
</template>

<script>
import GuildSettingsNavigationDrawer from "@/components/GuildSettingsNavigationDrawer";
export default {
  name: "GuildDashboard",
  components: {GuildSettingsNavigationDrawer},
  computed: {
    guildId(){
      return this.$route.params.guildId;
    }
  },
  methods:{
    addAlert(level, message){
      this.$emit("notify", level, message)
    }
  }
}
</script>

<style scoped>
  .dashboard{
    display:flex;
  }
</style>