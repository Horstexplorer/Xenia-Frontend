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
        </v-row>
        <v-row>
          <v-col :key="1">
            <div class="name">
              Prefix
            </div>
            <div class="value">
              {{ guild.getPrefix() }}
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
      </div>
    </div>
  </div>
</template>

<script>
import Guild from "@/xbd_api/objects/Guild";

export default {
  name: "GeneralGuildSettings",

  props: {
    guild: {
      required: true,
      type: Guild,
    },
  },
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