import type { RouteRecordRaw } from "vue-router";

export const estimateRoutes: RouteRecordRaw[] = [
  {
    path: "/estimates",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "estimates-index",
        // 指示通り views(pages) / scrip / pages / Index.vue を呼び出す
        component: () => import("@/views/estimate/pages/Index.vue"),
        meta: { title: "見積一覧" },
      },
    ],
  },
];
