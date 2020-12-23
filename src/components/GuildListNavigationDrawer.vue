<template>
  <v-navigation-drawer
      v-model="drawer"
      clipped
  >
    <v-list shaped nav>
      <v-list-item
        v-for="guild in guilds"
        :key="guild.guildId"
        :to="`dashboard/guilds/${guild.guildId}`"
        exact
      >
        <v-list-item-avatar>
          <guild-icon
              :icon="guild.iconUrl"
              :alt="'${guild.guildName} guild'"
              :text="guild.guildName"
              :size="40"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ guild.guildName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import GuildIcon from "@/components/GuildIcon";
export default {
  name: "GuildListNavigationDrawer",
  props: {
    guilds: {
      required: true,
      type: Array,
    },
  },
  components: {GuildIcon}
}
</script>

<style scoped>

</style>