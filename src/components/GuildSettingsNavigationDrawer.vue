<template>
  <v-navigation-drawer
      :value="true"
      clipped
  >
    <v-list shaped nav>
      <v-list-item
          :to="`/dashboard/guilds/${this.$route.params.guildId}/guildsettings`"
      >
        <v-list-item-content>
          <v-list-item-title>Guild Scoped Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
          :to="`/dashboard/guilds/${this.$route.params.guildId}/channelsettings`"
      >
        <v-list-item-content>
          <v-list-item-title>Channel Scoped Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
          :to="`/dashboard/guilds/${this.$route.params.guildId}/virtualrolesettings`"
      >
        <v-list-item-content>
          <v-list-item-title>Virtual Roles</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "GuildSettingsNavigationDrawer"
}
</script>

<style scoped>

</style>