import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import { library } from "@fortawesome/fontawesome-svg-core";
import VTooltip from "v-tooltip";

import {
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouseDamage, faCode, faTags, faBookOpen, faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.directive("tooltip", VTooltip.VTooltip);
Vue.directive("close-popover", VTooltip.VClosePopover);
Vue.component("v-popover", VTooltip.VPopover);
Vue.use(VueTailwind);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
