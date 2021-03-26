import Vue from "vue";
import App from "./App";
import VueRouter from 'vue-router';
import thisIsVue from './directives/this-is-vue';
import CardItem from './components/CardItem';
import routes from './routes';
import TodosView from './modules/todos/TodosView';
import AngularView from './modules/angular/AngularView';

/*
  Following code would be standar Vue main file, but it has been wrapped into a function
  to ensure Vue is loaded after Angular.
*/
export const loadVue = function() {
  Vue.config.productionTip = false; // Ignore Stackblitz messages

  // Dependencies
  Vue.use(VueRouter);
  const router = new VueRouter({
    mode: 'history', // Avoid hashing for Stackblitz hack
    routes
  })
  
  // Global registration
  Vue.component("card-item", CardItem);
  Vue.component("todos-view", TodosView);
  Vue.component("angular-view", AngularView);
  Vue.directive('this-is-vue', thisIsVue);

  // Main instance registration
  new Vue({
    render: h => h(App),
    router
  }).$mount("#app");
};
