<template>
  <div class="md-viewer">
    <vue-markdown
        html
        xhtml-out
        breaks
        linkify
        :source=data
    />
    <div v-if=showOrigin>
      <a class='link' :href="alternateOrigin ? alternateOrigin : url"> The original file can be found here </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMarkdown from "vue-markdown/src/VueMarkdown";

export default {
  name: "MDViewer",
  components: {VueMarkdown},

  props: {
    url: {
      required: true,
      type: String
    },
    showOrigin: {
      required: false,
      type: Boolean,
      default: false
    },
    alternateOrigin: {
      required: false,
      type: String,
    }
  },

  data(){
    return{
      data: "unknown",
    }
  },

  mounted() {
    Vue.http.get(this.url).then(
        response => {
          this.data = response.bodyText.toString();
        },
    )
  }
}
</script>

<style scoped>

</style>