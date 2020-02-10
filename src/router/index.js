import Vue from "vue";
import VueRouter from "vue-router";

// import components
import Todo from "@/views/Todo";
import Home from "@/views/Home";
import Github from "@/views/Github";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/github",
    name: "Github",
    component: Github
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router;
