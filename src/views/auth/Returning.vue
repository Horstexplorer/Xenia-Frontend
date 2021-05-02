<template>
  <div class="component-area">
    <div class="hero-image">
      <div class="hero-text">
        <h1>Proceeding to log you in ...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/xbd_api/httpcore"

export default {
  name: "Returning",
  mounted() {
    if(this.$route.query.code === undefined || this.$route.query.state === undefined){
      this.$router.replace({query:null});
      this.$emit("notify", "warning", "Login failed. No data has been received.");
      this.$router.push("/");
    }else{
      let authCode = this.$route.query.code;
      let state = this.$route.query.state;
      this.$router.replace({query:null});
      // send
      API.login(authCode, state,
          () => window.location.href = "/dashboard",
          () => {
            this.$emit("notify", "warning", "Login failed. This might happen because you haven't interacted with the bot yet or the transmission was faulty");
            this.$router.push("/");
          }
      );
    }
  }
}
</script>

<style scoped>
.component-area{
  height: 100%;
  font-size: 21px;
  color: white;
  font-family: "Lato", sans-serif;
}
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/background.jpg");
  height: 34vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hero-text {
  text-align: center;
  color: white;
}
.hero-text a{
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(66, 226, 244);
  border-radius: 20px;
  color: rgb(66, 226, 244);
}
</style>