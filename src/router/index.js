import Vue from "vue";
import VueRouter from "vue-router";
import JokeList from "../views/JokeList.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "joke-list",
    component: JokeList
  },
  {
    path: "/About",
    name: "about",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
