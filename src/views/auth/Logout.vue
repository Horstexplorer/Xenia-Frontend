<template>
  <div>
    Logout...
  </div>
</template>

<script>
export default {
  name: "Logout",
  mounted() {
    localStorage.removeItem("authToken");
    this.$router.push("/");
  }
}
</script>

<style scoped>

</style>