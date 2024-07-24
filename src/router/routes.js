import { lazy } from "react";
// 动态加载组件
const Login = lazy(() => import("../pages/login"));
const Guidance = lazy(() => import("../pages/layout/layout"));
const Home = lazy(() => import("../pages/Home"));
const Workbench = lazy(() => import("../pages/workbench/workbench"));
const Center = lazy(() => import("../pages/Center"));

const routers = [
  {
    path: "/",
    element: <Guidance />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/workbench",
    element: <Workbench />,
  },
  { path: "/login", element: <Login /> },
  { path: "/center", element: <Center /> },
];
export default routers;
