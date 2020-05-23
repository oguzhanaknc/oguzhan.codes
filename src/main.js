import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueMeta from "vue-meta";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
  faPenAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
  faPenAlt,
  faSignOutAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});
Vue.use(VueTailwind);
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
