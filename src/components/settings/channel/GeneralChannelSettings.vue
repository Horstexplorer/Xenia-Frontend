<template>
  <div class="container">
    <div class="title">
      <h1>{{ channel.getMetaName() }}</h1>
    </div>
    <div class="channel">
      <v-row>
        <v-col :id="1">
          <div class="description">
            {{ channel.getChannelId() }} <br/>
            {{ channel.getMetaTopic() }}
          </div>
        </v-col>
        <v-col :id="2">
          <div class="until">
            {{ new Date(channel.getCreationTimestamp()) }}
          </div>
        </v-col>
        <v-col :id="3">
          <v-btn
              elevation="2"
              dark
              rounded
              @click="save"
          >Update</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col :id="1">
          <div class="name">
            Access mode
          </div>
          <div class="value">
            <OptionSelector v-model="channel_access_mode" :options="getAccessMode()"/>
          </div>
        </v-col>
        <v-col :id="2">
          <div class="name">
            Flags
          </div>
          <div class="value">
            <OptionSelector v-model="channel_flags" :options="getChannelFlags()"/>
          </div>
        </v-col>
        <v-col :id="3">
          <div class="name">
            Settings
          </div>
          <div class="value">
            <OptionSelector v-model="channel_general_settings" :options="getChannelSettings()"/>
          </div>
        </v-col>
        <v-col :id="4">
          <div class="name">
            Chatbot Settings
          </div>
          <div class="value">
            <OptionSelector v-model="channel_chatbot_settings" :options="getChatbotSettings()"/>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :id="1">
          <div class="name">
            Logging
          </div>
          <div class="value">
            <v-switch
                dark
                color="green"
                :value="channel.getTmpLoggingActive()"
                v-model="channel_tmp_logging_active"
            />
          </div>
        </v-col>
        <v-col :id="2">
          <div class="name">
            Logging channel
          </div>
          <div class="value">
            {{ channel.getTmpLoggingChannelId() == -1 ? "none" : channel.getTmpLoggingChannelId()}}
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Channel from "@/xbd_api/objects/Channel";
import OptionSelector from "@/components/settings/inputs/OptionSelector";
import {
  ChannelAccessModeDefs,
  ChannelD43Z1SettingsDefs, ChannelFlagsDefs,
  ChannelSettingsDefs,
  getOptionsOf,
} from "@/xbd_api/objects/misc/options/OptionSet";

export default {
  name: "GeneralChannelSettings",
  components: {OptionSelector},
  props: {
    channel: {
      required: true,
      type: Channel
    }
  },
  methods: {
    getAccessMode(){
      return getOptionsOf(ChannelAccessModeDefs, this.channel.getAccessModeRaw())
    },
    getChannelFlags(){
      return getOptionsOf(ChannelFlagsDefs, this.channel.getChannelFlagsRaw())
    },
    getChannelSettings(){
      return getOptionsOf(ChannelSettingsDefs, this.channel.getChannelSettingsRaw())
    },
    getChatbotSettings(){
      return getOptionsOf(ChannelD43Z1SettingsDefs, this.channel.getD43Z1SettingsRaw())
    },
    save(){

    }
  }
}
</script>

<style scoped lang="scss">
.container {
  min-width: 97vw;
  min-height: 5vh;
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
  .channel {
    .description {
      font-size: 18px;
      color: gray;
    }
    .until {
      color: gray;
    }
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
</style>