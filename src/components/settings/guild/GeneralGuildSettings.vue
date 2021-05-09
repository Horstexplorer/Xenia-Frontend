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
                @click="save()"
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
              <OptionSelector v-model="guildOptions"/>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col :key="1">
            <div class="name">
              General chatbot settings
            </div>
            <div class="value">
              <OptionSelector v-model="chatbotOptions"/>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/xbd_api/xbd_api";
import Guild from "@/xbd_api/objects/Guild";
import TextInput from "@/components/settings/inputs/TextInput";
import OptionSelector from "@/components/settings/inputs/OptionSelector";
import {getOptionsOf, getRawOf, GuildD43Z1ModeDefs, GuildSettingOptionDefs} from "@/xbd_api/objects/misc/options/OptionSet";

export default {
  name: "GeneralGuildSettings",
  components: {OptionSelector, TextInput},
  props: {
    guild: {
      required: true,
      type: Guild,
    },
  },

  data() {
    return {
      guildOptions: getOptionsOf(GuildSettingOptionDefs, this.guild.getSettingsRaw()),
      chatbotOptions: getOptionsOf(GuildD43Z1ModeDefs, this.guild.getD43Z1ModeRaw()),
      guild_prefix: this.guild.getPrefix()
    }
  },

  methods: {
    save(){
      this.guild.setPrefix(this.guild_prefix)
      this.guild.setSettingsRaw(getRawOf(this.guildOptions))
      this.guild.setD43Z1ModeRaw(getRawOf(this.chatbotOptions))

      API.updateGuild(this.guild).then(
          () => {
            this.$emit("notify", "info", "Updated!");
            setTimeout(function() {
              location.reload();
            }, 2000);
          },
          (error) => {
            if(error.error === 403){
              this.$emit("notify", "warning", "You are not allowed to view and edit those things");
            }else{
              this.$emit("notify", "warning", "Failed to update data \"guild\" :"+error.error+": "+error.msg);
            }
            setTimeout(function() {
              location.reload();
            }, 2000);
          }
      )
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