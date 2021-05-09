<template>
  <div class="textInput">
    <v-text-field
        v-model="input"
        :placeholder="default_content"
        :value="default_content"
        :counter="max_length"
        rounded
        solo
        dark
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: {
      required: true
    },
    min_length: {
      required: false,
      default: 1,
      type: Number
    },
    max_length: {
      required: false,
      type: Number
    },
    default_content: {
      required: false,
      default: "",
      type: String
    }
  },

  computed: {
    input: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>