<template>
  <div class="component-area">
    <div class="hero-image">
      <div class="hero-text">
        <h1>Logging you in ...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {BACKEND_URL} from "@/utils/routesutil";

export default {
  name: "Login",

  mounted() {
    if(localStorage.getItem("authToken") == null){
      setTimeout(function() {
        window.location.href = BACKEND_URL+"auth/discord/prepare";
      }, 2000);
    }else{
      window.location.href = "/dashboard";
    }
  },
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
  height: 66vh;
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