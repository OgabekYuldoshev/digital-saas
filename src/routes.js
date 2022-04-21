import * as AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import TasksPage from "./pages/Tasks";
import CreateTasksPage from "./pages/Tasks/containers/Create";
import UpdateTasksPage from "./pages/Tasks/containers/Update";
import PlansPage from "./pages/Plans";
import CreatePlansPage from "./pages/Plans/containers/Create";
import UpdatePlansPage from "./pages/Plans/containers/Update";
import AdsPage from "./pages/Ads";
import SEO from "./pages/SEO/SEO.jsx";
import SEM from "./pages/SEM/SEM";

export const publicRoutes = [
  {
    name: "Sign In",
    path: "/login",
    component: AuthPage.SignIn,
  },
  {
    name: "Sign up",
    path: "/register",
    component: AuthPage.SignUp,
  },
  {
    name: "Forgot",
    path: "/forgot",
    component: AuthPage.Forgot,
  },
];

export const privateRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: TasksPage,
  },
  {
    name: "Create Tasks",
    path: "/tasks/create",
    component: CreateTasksPage,
  },
  {
    name: "Update Tasks",
    path: "/tasks/update/:id",
    component: UpdateTasksPage,
  },

  {
    name: "Plans",
    path: "/plans",
    component: PlansPage,
  },
  {
    name: "Create Plans",
    path: "/plans/create",
    component: CreatePlansPage,
  },
  {
    name: "Update Plans",
    path: "/plans/update/:id",
    component: UpdatePlansPage,
  },

  {
    name: "Ads",
    path: "/ads",
    component: AdsPage,
  },

  {
    name: "SEO",
    path: "/seo",
    component: SEO,
  },

  {
    name: "SEM",
    path: "/sem",
    component: SEM,
  },
];
