<template>
  <div class="component-area">
    <div class="dashboard-header">
      <h1>Guild Settings</h1>
    </div>
    <div class="dashboard-settings">

    </div>
  </div>
</template>

<script>

import API from "@/xbd_api/xbd_api";

export default {
  name: "GuildSettings",

  mounted() {

    this.$emit("notify", "info", "Not implemented yet");
    this.$router.push("/dashboard");
    if(this){
      return;
    }

    API.getGuild("").then(
        (guild) => {
          console.log(guild.getJSON())
          API.getGuildLicense(guild.getGuildId()).then(
              (license) => {
                console.log(license.getJSON())

                this.$emit("notify", "info", "Not implemented yet");
                this.$router.push("/dashboard");
                return;

              },
              (error) => {
                this.$emit("notify", "warning", "Failed to get data \"guild-license\" :"+error.error+": You might not have the right permissions to view and edit those things");
                this.$router.push("/dashboard");
                return;
              }
          )
        },
        (error) => {
          this.$emit("notify", "warning", "Failed to get data \"guild\" :"+error.error+": You might not have the right permissions to view and edit those things");
          this.$router.push("/dashboard");
          return;
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