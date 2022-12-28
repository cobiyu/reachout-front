import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Mentor from "./views/Mentor.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        default: Main,
      }
    },
    {
      path: "/mentor",
      name: "mentor",
      components: {
        default: Mentor,
      }
    },
  ],
  // scrollBehavior: to => {
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // }
});
