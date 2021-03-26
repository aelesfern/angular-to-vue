import Vue from "vue";
import App from "./App.vue";
import AppSection from "./components/AppSection.vue";
import AppCode from "./components/AppCode.vue";
import Introduction from "./sections/1_Introduction.vue";
import Cli from "./sections/2_Cli.vue";
import Instancia from "./sections/3_Instancia.vue";
import Modulos from "./sections/4_Modulos.vue";
// eslint-disable-next-line no-unused-vars
import Prism from "prismjs";

Vue.config.productionTip = false;

Vue.component("app-section", AppSection);
Vue.component("app-code", AppCode);

Vue.component("introduction", Introduction);
Vue.component("cli", Cli);
Vue.component("instancia", Instancia);
Vue.component("modulos", Modulos);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
