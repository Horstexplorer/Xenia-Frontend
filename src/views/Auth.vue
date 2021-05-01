<template>
  <div>
    <router-view @notify="addAlert"/>
  </div>
</template>

<script>
export default {
  name: "Auth",
  mounted() {
    if(this.$route.path.toLowerCase() === "/auth"){
      this.$router.push("/");
    }
  },
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods:{
    addAlert(level, message){
      this.$emit("notify", level, message)
    }
  },
}
</script>

<style scoped>

</style>