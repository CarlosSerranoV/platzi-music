// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue  from "vue"
import App from"./App.vue"
import routes from './routes'
import VueRouter from 'Vue-router'
import blur from "./directives/blur";

import EventBus from "./plugins/event-bus";
import msToMm from "./filters/ms-to-mm-";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({
  routes,
  mode: 'history'

});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
