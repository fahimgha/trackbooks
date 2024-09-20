import { createRouter, createWebHistory } from "vue-router";
import PageBooks from "../components/PageBook.vue";
import AddBooks from "../components/addBook.vue";

const routes = [
  { path: "/", component: PageBooks },
  { path: "/addBook", component: AddBooks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
