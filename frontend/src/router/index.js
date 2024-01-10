import { createRouter, createWebHistory } from "vue-router";
// Admin
import AdminDashboard from "../views/Admin/DashboardAdmin.vue";
import User from "../views/Admin/User.vue";
import Signin from "../views/Login/Signin.vue";
import Kendaraan from "../views/Admin/Kendaraan.vue";
import Service from "../views/Admin/Service.vue";
import AdminPenggunaan from "../views/Admin/Penggunaan.vue";
// Validator
import ValidatorDashboard from "../views/Validator/DashboardValidator.vue";
import ValidatorPenggunaan from "../views/Validator/Penggunaan.vue";
// ERROR
// import ErrorPage from "@/components/ErrorPage.vue";
// User
import UserDashboard from "../views/User/DashboardUser.vue";
import UserPenggunaan from "../views/User/Penggunaan.vue";
import UserKendaraan from "../views/User/Kendaraan.vue"

const adminRoutes = [
  {
    path: "/Admin/dashboard-admin-default",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/Admin/user",
    name: "User",
    component: User,
  },
  {
    path: "/Admin/kendaraan",
    name: "Kendaraan",
    component: Kendaraan,
  },
  {
    path: "/Admin/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/Admin/penggunaan",
    name: "AdminPenggunaan",
    component: AdminPenggunaan,
  },
];

const validatorRoutes = [
  {
    path: "/Validator/dashboard-validator-default",
    name: "ValidatorDashboard",
    component: ValidatorDashboard,
  },
  {
    path: "/Validator/penggunaan",
    name: "ValidatorPenggunaan",
    component: ValidatorPenggunaan,
  },
];
const userRoutes = [
  {
    path: "/User/dashboard-user-default",
    name: "UserDashboard",
    component: UserDashboard,
  },
  {
    path: "/User/penggunaan",
    name: "UserPenggunaan",
    component: UserPenggunaan,
  },
  {
    path: "/User/kendaraan",
    name: "KendaraanUser",
    component: UserKendaraan,
  },
];

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/signin",
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  // {
  //   path: "/:catchAll(.*)", // Menangkap semua rute yang tidak cocok
  //   name: "ErrorPage",
  //   component: ErrorPage,
  // },
  ...adminRoutes,
  ...validatorRoutes,
  ...userRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
