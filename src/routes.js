import * as AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";

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
];
