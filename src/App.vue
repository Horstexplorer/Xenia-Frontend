<template>
  <div id="app">
    <Menu-bar/>
    Page not available
    <Footer/>
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default {
  name: 'App',
  components: {
    MenuBar,
    Footer
  }
}
</script>

<style>
html, body{
  height: 100%;
  background-color: black;
  font-size: 16px;
  color: white;
  margin: 0;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
h1{
  font-size: 30px;
  margin: 0;
}
a:link {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
  text-decoration: none;
}
a:focus   {
  color: white;
  text-decoration: none;
}
a:hover   {
  color: white;
  text-decoration: none;
}
a:active  {
  color: white;
  text-decoration: none;
}
</style>
