<template>
  <div class="dashboard-settings">
    Dashboard Settings
  </div>
</template>

<script>
export default {
  name: "ChannelSettings",
  mounted() {
    this.$emit("notify", "warning", "You need to be logged in to view this page");
  }
}
</script>

<style scoped>
.dashboard-settings{
  color: white;
}
</style>