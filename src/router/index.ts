import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes/index";

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  // Vite環境での標準的なHistoryモード
  history: createWebHashHistory(import.meta.env.VUE_ROUTER_BASE),
});

// ページ遷移ごとにタイトルを書き換える「動的看板」
Router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = `${title} | スマートオーダー【管理】`;
  }
  next();
});

export default Router;
