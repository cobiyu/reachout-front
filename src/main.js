import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import { Datetime } from 'vue-datetime'
import './assets/scss/reachout.scss'
import './assets/tailwindoutput.css';
import 'vue-datetime/dist/vue-datetime.css'
import store from './store/store'



Vue.use(BootstrapVue);
Vue.use(Datetime);
Vue.component('datetime', Datetime);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");