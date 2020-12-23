<template>
  <div>
    Logout...
  </div>
</template>

<script>

import API from "@/xbd_api/httpcore"

export default {
  name: "Logout",
  mounted() {
    API.logout(()=> this.$router.push("/"));
  }
}
</script>

<style scoped>

</style>