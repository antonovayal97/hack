import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/:pageId",
    name: "Page",
    component: () => import("../views/Page.vue")
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
