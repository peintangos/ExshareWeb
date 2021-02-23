import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";

Vue.config.productionTip = false;
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  // i18n:i18n,
  render: h => h(App)
}).$mount("#app");
