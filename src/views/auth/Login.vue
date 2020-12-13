<template>
  <div>
    Login...
  </div>
</template>

<script>
export default {
  name: "Login",

  mounted() {
    if(localStorage.getItem("authToken") == null){
      window.location.href = "https://backend.xenia.netbeacon.de/auth/discord/prepare";
    }else{
      this.$router.push("/dashboard");
    }
  },
}
</script>

<style scoped>

</style>