const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/random",
    name: "random",
    title: "试试手气",
    component: () => import("../components/BookPanel.vue"),
  },
  {
    path: "/current",
    name: "current",
    title: "当前在读",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/program",
    name: "program",
    title: "编程",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/economy",
    name: "economy",
    title: "经济",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/building",
    name: "building",
    title: "建筑",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/history",
    name: "history",
    title: "历史",
    component: () => import("../components/CardPanel.vue"),
  },
  {
    path: "/404",
    name: "not-found",
    title: "not-found",
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: {
      name: "not-found",
    },
  },
];

export default routes;
