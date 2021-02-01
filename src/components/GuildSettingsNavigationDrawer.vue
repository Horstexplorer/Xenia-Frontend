<template>
  <v-navigation-drawer
      v-model="drawer"
      clipped
  >
    <v-list shaped nav>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ guildId }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ guildId }}</v-list-item-title>
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