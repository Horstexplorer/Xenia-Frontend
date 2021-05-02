<template>
  <div class="component-area">
    <div class="dashboard-header">
      <h1>Channel Settings</h1>
    </div>
    <div class="dashboard-settings">

    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelSettings",

  mounted() {
    this.$emit("notify", "info", "Not implemented yet");
    this.$router.push("/dashboard");
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