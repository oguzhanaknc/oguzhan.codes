import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
  faRedo,
  faUndo,
  faQuoteRight,
  faParagraph,
  faItalic,
  faBold,
  faStrikethrough,
  faUnderline,
  faListOl,
  faListUl
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
  faRedo,
  faUndo,
  faQuoteRight,
  faParagraph,
  faItalic,
  faBold,
  faStrikethrough,
  faUnderline,
  faListOl,
  faListUl
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueTailwind);
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
