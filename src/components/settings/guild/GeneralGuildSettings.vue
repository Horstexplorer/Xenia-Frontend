<template>
  <div class="container">
    <div class="title">
      <h1> {{ guild.getMetaName() }} </h1>
    </div>
    <div class="guild">
      <div class="settings">
        <v-row>
          <v-col :key="1">
            <div class="guildId">
              {{ guild.getGuildId().toString()}}
            </div>
          </v-col>
          <v-col :key="2">
            <div class="created">
              known: {{ new Date(guild.getCreationTimestamp()) }}
            </div>
          </v-col>
          <v-col :key="3" >
            <v-btn
                elevation="2"
                dark
                rounded
                @click="save"
            >Update</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col :key="1">
            <div class="name">
              Prefix
            </div>
            <div class="value">
              <TextInput  v-model="guild_prefix" :max_length="4" :default_content="guild.getPrefix()"/>
            </div>
          </v-col>
          <v-col :key="2">
            <div class="name">
              Preferred language
            </div>
            <div class="value">
              {{ guild.getPreferredLanguage() }}
            </div>
          </v-col>
          <v-col :key="3"></v-col>
        </v-row>
        <v-row>
          <v-col :key="1">
            <div class="name">
              General settings
            </div>
            <div class="value">
              <OptionSelector v-model="guild_settings_general" :options="getGuildSettings()"/>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col :key="1">
            <div class="name">
              General chatbot settings
            </div>
            <div class="value">
              <OptionSelector v-model="guild_settings_chatbot" :options="getChatbotSettings()"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Guild from "@/xbd_api/objects/Guild";
import TextInput from "@/components/settings/inputs/TextInput";
import OptionSelector from "@/components/settings/inputs/OptionSelector";
import {getOptionsOf, GuildD43Z1ModeDefs, GuildSettingOptionDefs} from "@/xbd_api/objects/misc/options/OptionSet";

export default {
  name: "GeneralGuildSettings",
  components: {OptionSelector, TextInput},
  props: {
    guild: {
      required: true,
      type: Guild,
    },
  },
  methods: {
    getGuildSettings(){
      return getOptionsOf(GuildSettingOptionDefs, this.guild.getSettingsRaw())
    },
    getChatbotSettings(){
      return getOptionsOf(GuildD43Z1ModeDefs, this.guild.getD43Z1ModeRaw())
    },
    save(){

    }
  }
}
</script>

<style scoped lang="scss">
.container {
  min-width: 97vw;
  min-height: 30vh;
  background-color: #111111;
  font-size: 21px;
  color: white;
  font-family: "Lato", sans-serif;
  padding-left: 1%;
  margin-top: 1%;
  .title {
    h1{
      font-size: 32px;
    }
  }
  .guild {
    .guildId {
      display: inline-block;
      font-size: 16px;
      color: gray;
    }
    .created {
      color: gray;
    }
    .settings {
      .name {
        font-size: 20px;
        color: white;
      }
      .value {
        font-size: 20px;
        color: gray;
      }
    }
  }
}
</style>