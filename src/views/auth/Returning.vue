<template>
  <div>
    Login...
  </div>
</template>

<script>
import API from "@/xbd_api/httpcore"

export default {
  name: "Returning",
  mounted() {
    if(this.$route.query.code === undefined || this.$route.query.state === undefined){
      this.$router.replace({query:null});
      this.$router.push("/");
    }else{
      let authCode = this.$route.query.code;
      let state = this.$route.query.state;
      this.$router.replace({query:null});
      // send
      API.login(authCode, state,
          () => window.location.href = "/dashboard",
          () => window.location.href = "/"
      );
    }
  }
}
</script>

<style scoped>

</style>