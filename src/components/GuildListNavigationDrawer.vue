<template>
  <v-navigation-drawer
      :value="true"
      clipped
  >
    <v-list shaped nav>
      <v-list-item
        v-for="guild in guilds"
        :key="guild.guildId"
        :to="`/dashboard/guilds/${guild.guildId}`"
        exact
      >
        <v-list-item-avatar>
          <icon
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
import Icon from "@/components/Icon";
export default {
  name: "GuildListNavigationDrawer",
  props: {
    guilds: {
      required: true,
      type: Array,
    },
  },
  components: {Icon},
}
</script>

<style scoped>

</style>