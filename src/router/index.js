import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Youtube from "../views/Youtube.vue";
import YoutubeDetail from "../views/YoutubeDetail.vue";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/youtubeDetail/:id",
    name: "YoutubeDetail",
    component: YoutubeDetail,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
