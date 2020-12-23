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
          () => this.$router.push("/dashboard"),
          () => this.$router.push("/")
      );
    }
  }
}
</script>

<style scoped>

</style>