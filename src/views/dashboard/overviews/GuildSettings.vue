<template>
  <div class="dashboard-settings">
    Guild Settings
  </div>
</template>

<script>
export default {
  name: "GuildSettings",
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