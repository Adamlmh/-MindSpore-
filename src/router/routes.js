import { lazy } from "react";
// 动态加载组件
const Login = lazy(() => import("../pages/login"));
const Person = lazy(() => import("../pages/person/person"));
const Guidance = lazy(() => import("../pages/layout/layout"));
const Home = lazy(() => import("../pages/Home"));
const Workbench = lazy(() => import("../pages/workbench/workbench"));
const Center = lazy(() => import("../pages/Center"));
const routers = [
  {
    path: "/",
    element: <Guidance />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/workbench",
        element: <Workbench />,
      },
      {
        path: "/center",
        element: <Center />,
      },
      {
        path: "/person",
        element: <Person />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
];
export default routers;
