<template>
  <div class="home">
    <div class="empty"></div>

    <div class="hero-image">
      <div class="hero-text">
        <h1>I am Xenia</h1>
        <p>Here to improve your Discord</p>
        <p>&nbsp; </p>
        <a href="https://discord.com/oauth2/authorize?client_id=509065864763408385&permissions=388160&scope=bot%20applications.commands"> Add to Discord </a>
      </div>
    </div>

    <div class="emptysmall"></div>

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
            <a>Unknown</a>
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
      <h3>Features</h3>
      <pre>
        - Reminders
        - Twitch stream notification
        - Hastebin upload
        - Message logging
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home{
  height: 100vh;
  min-height: 100vh;
  background-color: black;
  font-size: 21px;
  color: white;
  margin: 0;
  font-family: "Lato", sans-serif;
}
a:link, a:visited, a:focus, a:hover, a:active {
  color: white;
  text-decoration: none;
}
.empty{
  height: 10%;
}
.emptysmall{
  height: 5%;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/background.jpg");
  height: 70%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  padding-left: 5%;
  padding-right: 5%;
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