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
      window.location.href = "https://discord.com/api/oauth2/authorize?client_id=509065864763408385&redirect_uri=https%3A%2F%2Fxenia.netbeacon.de%2Fauth%2Freturning&response_type=code&scope=identify";
    }else{
      this.$router.push("/dashboard");
    }
  },
}
</script>

<style scoped>

</style>