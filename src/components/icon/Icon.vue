<template>
  <v-avatar color="icon == null ? 'grey' : undefined">
    <span v-if="hasNoIcon" :style="{ 'font-size': `${size / 2.5}px` }">{{ shortText }}</span>
    <v-img v-else :src="icon" :alt="alt"/>
  </v-avatar>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: "",
    },
    tile: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 128,
    },
  },
  computed: {
    shortText() {
      if (this.text == null) {
        return "";
      }
      let text = this.text;
      if (this.text.includes(" ")) {
        text = this.text
            .split(" ")
            .map((n) => n[0])
            .join("");
      }
      return text.substr(0, this.size > 42 ? 3 : 2);
    },
    hasNoIcon() {
      return this.icon == null || this.icon === "";
    },
  },
}
</script>

<style scoped>

</style>