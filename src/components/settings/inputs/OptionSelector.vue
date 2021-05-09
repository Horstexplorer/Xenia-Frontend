<template>
  <div class="option-selector">
    <v-list
      dense
      dark
    >
      <v-item-group>
        <div v-if="options.settings.selectable === -1">
          <v-list-item
              v-for="(value, name) in options.options"
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
        <div v-if="options.settings.selectable === 0">
          <v-radio-group>
            <v-radio
                v-for="(value, name) in options.options"
                :key="name"
                :label="value.option.name"
                :value="value.option.id"
                dark
            ></v-radio>
          </v-radio-group>
        </div>
        <div v-if="options.settings.selectable === 1">
          <v-list-item
              v-for="(value, name) in options.options"
              :key="name"
          >
            <v-item>
              <div>
                <v-switch
                    :label="value.option.name"
                    color="green"
                    :value="value.value"
                    :disabled="!value.option.modifiable"
                    dark
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
      required: true
    },
    options: {
      required: true,
      type: Object
    }
  },
}
</script>

<style scoped>

</style>