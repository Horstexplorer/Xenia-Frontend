import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from "@/router";
import VueResource from "vue-resource";

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
