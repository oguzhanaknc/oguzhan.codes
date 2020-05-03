import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faJs, faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCodeHighlight from "vue-code-highlight";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
library.add(
  faHouseDamage,
  faCode,
  faTags,
  faBookOpen,
  faCoffee,
  faJs,
  faAirbnb
);

import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);
Vue.use(VueSimpleMarkdown);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueCodeHighlight);
Vue.use(VueTailwind);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
