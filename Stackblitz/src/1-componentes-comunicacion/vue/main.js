import Vue from "vue";
import App from "./App";

/*
  Following code would be standar Vue main file, but it has been wrapped into a function
  to ensure Vue is loaded after Angular.
*/
export const loadVue = function() {
  Vue.config.productionTip = false; // Ignore Stackblitz messages
  new Vue({
    render: h => h(App)
  }).$mount("#app");
};
