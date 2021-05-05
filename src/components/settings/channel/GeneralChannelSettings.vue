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
      </v-row>
      <v-row>
        <v-col :id="1">
          <div class="name">
            Access mode
          </div>
          <div class="value">
            {{ channel.getAccessModeRaw() }}
          </div>
        </v-col>
        <v-col :id="2">
          <div class="name">
            Flags
          </div>
          <div class="value">
            {{ channel.getChannelFlagsRaw() }}
          </div>
        </v-col>
        <v-col :id="3">
          <div class="name">
            Settings
          </div>
          <div class="value">
            {{ channel.getChannelSettingsRaw() }}
          </div>
        </v-col>
        <v-col :id="4">
          <div class="name">
            Chatbot Settings
          </div>
          <div class="value">
            {{ channel.getD43Z1SettingsRaw() }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :id="1">
          <div class="name">
            Logging
          </div>
          <div class="value">
            {{ channel.getTmpLoggingActive() }}
          </div>
        </v-col>
        <v-col :id="2">
          <div class="name">
            Logging channel
          </div>
          <div class="value">
            {{ channel.getTmpLoggingChannelId() }}
          </div>
        </v-col>
        <v-col :id="3">
          <div class="name">

          </div>
          <div class="value">

          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Channel from "@/xbd_api/objects/Channel";

export default {
  name: "GeneralChannelSettings",

  props: {
    channel: {
      required: true,
      type: Channel
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