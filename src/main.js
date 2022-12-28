import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/reachout.scss'
import './assets/tailwindoutput.css';
import './assets/some.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");