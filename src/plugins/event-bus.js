import Vue from "vue";

const eventBus = {}

eventBus.install = function () {

  Vue.prototype.$bus = new Vue();


}

export default eventBus
