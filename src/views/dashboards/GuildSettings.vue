<template>
  <div class="component-area">
    <div class="dashboard-header">
      <h1>Guild Settings</h1>
    </div>
    <div class="dashboard-settings">
      <GeneralGuildSettings v-if="guild != null" :guild="guild"/>
      <LicenseSettings v-if="license != null" :license="license"/>
    </div>
  </div>
</template>

<script>

import API from "@/xbd_api/xbd_api";
import GeneralGuildSettings from "@/components/settings/guild/GeneralGuildSettings";
import LicenseSettings from "@/components/settings/guild/LicenseSettings";

export default {
  name: "GuildSettings",
  components: {LicenseSettings, GeneralGuildSettings},
  data(){
    return{
      guild: null,
      license: null
    }
  },

  mounted() {
    API.getGuild(this.$route.params.guildId).then(
        (guild) => {
          this.guild = guild;
          API.getGuildLicense(this.$route.params.guildId).then(
              (license) => {
                this.license = license;
              },
              (error) => {
                if(error.error === 403){
                  this.$emit("notify", "warning", "You are not allowed to view and edit those things");
                }else{
                  this.$emit("notify", "warning", "Failed to get data \"guild-license\" :"+error.error+": "+error.msg);
                }
                this.$router.push("/dashboard");
              }
          )
        },
        (error) => {
          if(error.error === 403){
            this.$emit("notify", "warning", "You are not allowed to view and edit those things");
          }else{
            this.$emit("notify", "warning", "Failed to get data \"guild\" :"+error.error+": "+error.msg);
          }
          this.$router.push("/dashboard");
        }
    )
  }
}
</script>

<style scoped>
.component-area{
  height: 100%;
  font-size: 21px;
  color: white;
  font-family: "Lato", sans-serif;
  padding-left: 1%;
}
</style>