import * as AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import TasksPage from "./pages/Tasks";
import CreateTasksPage from "./pages/Tasks/containers/Create";
import UpdateTasksPage from "./pages/Tasks/containers/Update";
import PlansPage from "./pages/Plans";
import CreatePlansPage from "./pages/Plans/containers/Create";
import UpdatePlansPage from "./pages/Plans/containers/Update";
import AdsPage from "./pages/Ads";
import { AdsCalculate, AdsList } from "./pages/AdsData";
import SEOPage from "./pages/SEO";
import SEMPage from "./pages/SEM";
import { Account, AutoPosting, Public } from "./pages/SMM";
import CommandsPage from "./pages/CommandList";
import ProfilePage from "./pages/Settings/Profile";
// import AccsessPage from "./pages/Settings/Accsess";
import SocialNetworkPage from "./pages/Settings/Social-network";

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
    name: "SMM account",
    path: "/smm/account",
    component: Account,
  },
  {
    name: "SMM posting",
    path: "/smm/posting",
    component: AutoPosting,
  },
  {
    name: "SMM puiblic",
    path: "/smm/public",
    component: Public,
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
    name: "Ads Calculate",
    path: "/ads/calculate",
    component: AdsCalculate,
  },
  {
    name: "Ads List",
    path: "/ads/list",
    component: AdsList,
  },
  {
    name: "SEO",
    path: "/seo",
    component: SEOPage,
  },
  {
    name: "SEM",
    path: "/sem",
    component: SEMPage,
  },

  {
    name: "Profile",
    path: "/settings/profile",
    component: ProfilePage,
  },
  // {
  //   name: "Access",
  //   path: "/settings/accsess",
  //   component: AccsessPage,
  // },
  {
    name: "Social-network",
    path: "/settings/networks",
    component: SocialNetworkPage,
  },
  {
    name: "Commands",
    path: "/command/list",
    component: CommandsPage,
  },
];
