<template>
  <div>
    Dashboard
  </div>
</template>

<script>
export default {
  name: "Dashboard",

  mounted() {
    if(localStorage.getItem("authToken") == null){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>