import Vue from "vue";
import App from "./App";
import thisIsVue from './directives/this-is-vue';
import CardItem from './components/CardItem';

/*
  Following code would be standar Vue main file, but it has been wrapped into a function
  to ensure Vue is loaded after Angular.
*/
export const loadVue = function() {
  Vue.config.productionTip = false; // Ignore Stackblitz messages
  
  // Global registration
  Vue.component("card-item", CardItem);
  Vue.directive('this-is-vue', thisIsVue);

  // Main instance registration
  new Vue({
    render: h => h(App)
  }).$mount("#app");
};
