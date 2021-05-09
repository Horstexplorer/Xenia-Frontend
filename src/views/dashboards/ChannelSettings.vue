<template>
  <div class="component-area">
    <div class="dashboard-header">
      <h1>Channel Settings</h1>
    </div>
    <div class="dashboard-settings" v-if="ready">
      <ChannelSelector :channels="channels"  v-model="selectedChannel" @notify="addAlert"/>
      <GeneralChannelSettings v-if="selectedChannel != null" :channel="selectedChannel" @notify="addAlert"/>
    </div>
  </div>
</template>

<script>
import API from "@/xbd_api/xbd_api";
import ChannelSelector from "@/components/settings/channel/ChannelSelector";
import GeneralChannelSettings from "@/components/settings/channel/GeneralChannelSettings";

export default {
  name: "ChannelSettings",
  components: {GeneralChannelSettings, ChannelSelector},

  data(){
    return{
      channels: null,
      selectedChannel: null,
      ready: false
    }
  },

  methods: {
    addAlert(level, message){
      this.$emit("notify", level, message)
    }
  },

  mounted() {
    API.getGuildChannels(this.$route.params.guildId).then(
        (channels) => {
          this.channels = channels
          this.ready = true;
        },
        (error) => {
          if(error.error === 403){
            this.$emit("notify", "warning", "You are not allowed to view and edit those things");
          }else{
            this.$emit("notify", "warning", "Failed to get data \"guild-channels\" :"+error.error+": "+error.msg);
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