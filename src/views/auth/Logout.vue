<template>
  <div>
    Logout...
  </div>
</template>

<script>

import {logout} from "@/xbd_api/httpcore"

export default {
  name: "Logout",
  mounted() {
    logout(()=> this.$router.push("/"));
  }
}
</script>

<style scoped>

</style>