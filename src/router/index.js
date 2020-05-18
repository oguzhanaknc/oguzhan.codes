import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import * as utils from "../utils/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { allowAnonymous: true },
    component: Home
  },

  {
    path: "/post/:slug",
    name: "Post",
    meta: { allowAnonymous: true },
    component: () => import("../views/Post.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: { allowAnonymous: true },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/post/:slug/edit",
    name: "Post",
    meta: { allowAnonymous: false },
    component: () => import("../views/Edit.vue")
  },
  {
    path: "/snippets",
    name: "Snippets",
    meta: { allowAnonymous: true },
    component: () => import("../views/Snippets.vue")
  },
  {
    path: "/posts",
    name: "Posts",
    meta: { allowAnonymous: true },
    component: () => import("../views/Posts.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    meta: { allowAnonymous: false },
    component: () => import("../views/Admin.vue")
  },
  {
    path: "/admin/add",
    name: "Add",
    meta: { allowAnonymous: false },
    component: () => import("../views/Add.vue")
  },
  {
    path: "/404",
    meta: { allowAnonymous: true },
    component: () => import("../views/Notfound.vue")
  },
  { path: "*", redirect: "/404" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  utils.getUser().then(user => {
    if (!to.meta.allowAnonymous && !user) {
      console.log(to.meta.allowAnonymous, 987);

      next({
        path: "/login"
      });
    } else {
      next();
    }
  });
});
export default router;
