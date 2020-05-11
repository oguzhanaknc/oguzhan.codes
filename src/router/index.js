import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/post/:slug",
		name: "Post",
		component: () => import("../views/Post.vue")
	},

	{
		path: "/snippets",
		name: "Snippets",
		component: () => import("../views/Snippets.vue")
	},
	{
		path: "/posts",
		name: "Posts",
		component: () => import("../views/Posts.vue")
	},
	{
		path: "/admin",
		name: "Admin",
		component: () => import("../views/admin.vue")
	},
	{ path: "/404", component: () => import("../views/Notfound.vue") },
	{ path: "*", redirect: "/404" }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
