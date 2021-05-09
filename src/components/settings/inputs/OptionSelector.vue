<template>
  <div class="option-selector">
    <v-list
      dense
      dark
    >
      <v-item-group>
        <div v-if="value.settings.selectable === -1">
          <v-list-item
              v-for="(value, name) in value.options"
              :key="name"
          >
            <v-item>
              <div>
                <v-badge
                    :color="value.value ? 'green': 'red'"
                    inline
                    left
                    dark
                >{{ value.option.name }}</v-badge>
              </div>
            </v-item>
          </v-list-item>
        </div>
        <div v-if="value.settings.selectable === 0">
          <v-radio-group @change="changeRadioGroup" :value="radioSelected">
            <v-radio
                v-for="(value, name) in value.options"
                :key="name"
                :label="value.option.name"
                dark
            ></v-radio>
          </v-radio-group>
        </div>
        <div v-if="value.settings.selectable === 1">
          <v-list-item
              v-for="(value, name) in value.options"
              :key="name"
          >
            <v-item>
              <div>
                <v-switch
                    :label="value.option.name"
                    color="green"
                    v-model="value.value"
                    :disabled="!value.option.modifiable"
                    dark
                    @change="this.sync()"
                ></v-switch>
              </div>
            </v-item>
          </v-list-item>
        </div>
     </v-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "OptionSelector",
  props: {
    value: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      modelValue: this.value
    }
  },

  methods: {
    changeRadioGroup(i) {
      Object.values(this.modelValue.options).forEach(option => option.value = false)
      Object.values(this.modelValue.options)[i].value = true
      this.sync()
    },
    sync(){
      this.$emit('input', this.modelValue)
    }
  },

  computed: {
    radioSelected() {
      return Object.values(this.modelValue.options).findIndex(option => option.value === true)
    }
  }
}
</script>

<style scoped>

</style>