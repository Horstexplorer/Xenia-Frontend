<template>
  <div class="container">
    <div class="title">
      <h1>Channels</h1>
    </div>
    <div class="selection">
      <v-autocomplete
          v-model="selection"
          placeholder="Select channel"
          :items="parsedChannels"
          item-text="name"
          item-value="value"
          rounded
          background-color="#777777"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "ChannelSelector",

  props: {
    value: {
      required: true
    },
    channels: {
      required: true,
      type: Array
    }
  },

  computed: {
    parsedChannels() {
      return this.channels.map((channel) => {
        return {
          name: channel.getMetaName(),
          value: channel
        }
      })
    },
    selection: {
      get(){
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    }
  },
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
  .selection {

  }
}
</style>