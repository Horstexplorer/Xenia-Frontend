<template>
  <div class="component-area">
    <div class="dashboard-header">
      <h1>Channel Settings</h1>
    </div>
    <div class="dashboard-settings">
      <ChannelSelector v-if="channels != null" :channels="channels"  v-model="selectedChannel"/>
      <GeneralChannelSettings v-if="selectedChannel != null" :channel="selectedChannel"/>
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
      selectedChannel: null
    }
  },

  methods: {
    save(){

    }
  },

  mounted() {
    API.getGuildChannels(this.$route.params.guildId).then(
        (channels) => this.channels = channels,
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