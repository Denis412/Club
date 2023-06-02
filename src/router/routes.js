const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "work",
        name: "work",
        component: () => import("pages/ClubWorkPage.vue"),
      },
      {
        path: "development",
        name: "development",
        component: () => import("pages/ClubDevelopmentPage.vue"),
      },
      {
        path: "business",
        name: "business",
        component: () => import("pages/ClubBusinessPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
