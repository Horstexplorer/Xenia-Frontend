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
    API.logout(()=> window.location.href = "/");
  }
}
</script>

<style scoped>

</style>