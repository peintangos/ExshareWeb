import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  /* オプション色々あります。公式サイトから確認できます。 */
  duration: 1000,
  easing: "ease"
})


Vue.use(VueRouter);

 

const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
