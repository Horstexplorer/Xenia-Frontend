<template>
  <div>
    Login...
  </div>
</template>

<script>
import HTTPCore from "../../xbd_api/core/httpcore"

export default {
  name: "Returning",
  mounted() {
    if(this.$route.query.code === undefined || this.$route.query.state === undefined){
      this.$router.replace({query:null});
      this.$route.push("/");
    }else{
      let authCode = this.$route.query.code;
      let state = this.$route.query.state;
      this.$router.replace({query:null});
      // send
      HTTPCore.login(authCode, state,
          () => this.$router.push("/dashboard"),
          () => this.$router.push("/")
      );
    }
  }
}
</script>

<style scoped>

</style>