<template>
  <v-navigation-drawer
      v-model="drawer"
      clipped
      app
  >
    <v-list shaped nav>
      <v-list-group
          v-for="guild in guilds"
          :key="guild.guildId"
          :to="`/dashboard/guilds/${guild.guildId}`"
          :value="isSelected(guild.guildId)"
          exact
      >
        <template v-slot:activator>
          <v-list-item-avatar>
            <icon
                :icon="guild.iconUrl"
                :alt="`${guild.guildName} guild`"
                :text="guild.guildName"
                :size="40"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ guild.guildName }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(setting, i) in settings" :key="i" :to="`/dashboard/guilds/${guild.guildId}/${setting.url}`">
          <v-list-item-content>
            <v-list-item-title>{{ setting.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Icon from "@/components/icon/Icon";
export default {
  name: "GuildListNavigationDrawer",
  props: {
    guilds: {
      required: true,
      type: Array,
    },
    value: {
      required: true
    }
  },
  components: {Icon},

  data() {
    return {
      settings: [
        {
          url: "guildsettings",
          name: "Guild Scoped Settings"
        },
        {
          url: "channelsettings",
          name: "Channel Scoped Settings"
        },
        {
          url: "virtualrolesettings",
          name: "Virtual Roles"
        },
      ]
    }
  },

  computed: {
    guildId(){
      return this.$route.params.guildId;
    },
    drawer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    isSelected(guildId){
      return this.guildId == guildId
    }
  }
}
</script>

<style scoped>

</style>