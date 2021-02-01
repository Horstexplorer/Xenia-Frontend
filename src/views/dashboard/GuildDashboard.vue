<template>
  <div>
    <GuildSettingsNavigationDrawer></GuildSettingsNavigationDrawer>
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
  }
}
</script>

<style scoped>

</style>