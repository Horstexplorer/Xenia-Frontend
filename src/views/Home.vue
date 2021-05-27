<template>
  <div class="home">
    <div class="hero-image">
      <div class="hero-text">
        <h1>I am Xenia</h1>
        <p>Obviously</p>
        <p>&nbsp; </p>
        <a href="https://discord.com/oauth2/authorize?client_id=509065864763408385&permissions=388176&scope=bot%20applications.commands"> Add to Discord </a>
      </div>
    </div>

    <table class="table">
      <tbody>
      <tr>
        <td>
          <div class="innertable">
            <h3>Stats</h3>
          </div>
        </td>
        <td>
          <div class="innertable">
            <h3>Check out the source code</h3>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="innertable">
            <a>Users: {{ users }}</a><br/>
            <a>Guilds: {{ guilds }}</a>
          </div>
        </td>
        <td>
          <div class="innertable">
            <a class="link" href="https://github.com/Horstexplorer/Xenia"> GitHub </a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="empty"></div>

    <div class="description">
      <MDViewer
          url="https://raw.githubusercontent.com/Horstexplorer/Xenia/master/README.MD"
          alternate-origin="https://github.com/Horstexplorer/Xenia"
          :show-origin=true
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import httpcore from "@/xbd_api/httpcore";
import MDViewer from "@/views/misc/MDViewer";

export default {
  name: "Home",
  components: {MDViewer},
  data(){
    return{
      users: "unknown",
      guilds: "unknown",
    }
  },

  mounted() {
    Vue.http.get(httpcore.getFullRequestURL("info/public")).then(
        response => {
          if (response.code !== 200){
            return;
          }
          this.users = response.body.users
          this.guilds = response.body.guilds
        }
    )
  }
}
</script>

<style scoped>
.home{
  height: 100%;
  font-size: 21px;
  color: white;
  font-family: "Lato", sans-serif;
}
a:link, a:visited, a:focus, a:hover, a:active {
  color: white;
  text-decoration: none;
}
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/background.jpg");
  height: 65vh;
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
.hero-text a:hover{
  border-color: rgba(144, 255, 96, 1);
  color: rgba(144, 255, 96, 1);
}

.description{
  padding-left: 16px;
  padding-right: 16px;
}

.description h3{
  text-align: center;
}
a.link{
  padding: 6px;
  border-style: solid;
  border-width: 2px;
  border-color: #aaaaaa;
  color: #aaaaaa;
}
.table{
  width: 100%;
  table-layout:fixed;
  padding: 2px;
  padding-left: 1%;
  text-align: center;
}
.innertable{
  min-width: 100%;
}
</style>
