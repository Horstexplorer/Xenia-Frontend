<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Auth",
  mounted() {
    if(this.$route.path.toLowerCase() === "/auth"){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>