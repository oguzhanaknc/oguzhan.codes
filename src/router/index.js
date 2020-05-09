import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/snippet/:slug",
    name: "Snippet",
    component: () => import("../views/Snippet.vue"),
  },

  {
    path: "/snippets",
    name: "Snippets",
    component: () => import("../views/Snippets.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
