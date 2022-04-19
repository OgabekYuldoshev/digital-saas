import * as AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import TasksPage from "./pages/Tasks";
import CreateTasksPage from "./pages/Tasks/containers/Create";
import UpdateTasksPage from "./pages/Tasks/containers/Update";

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
];
