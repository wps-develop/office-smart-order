import type { RouteRecordRaw } from "vue-router";
import { estimateRoutes } from "./estimate";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    // ルートアクセスを /scrip へ転送（リダイレクト）
    redirect: "/estimates",
  },

  ...estimateRoutes,

  // どこにも当てはまらぬ場合の退路
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('@/pages/ErrorNotFound.vue'),
  // },
];

export default routes;
