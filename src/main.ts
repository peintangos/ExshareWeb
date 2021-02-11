import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
// const data = require('./message.json');
// Vue.use(VueI18n);
// const i18n = new VueI18n({
//   locale: 'ja',
//   messages: data
// });


new Vue({
  router,
  store,
  // i18n:i18n,
  render: h => h(App)
}).$mount("#app");
