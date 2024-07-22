import { lazy } from "react";

// import Main from "../pages/main";
// import Login from "../pages/login";
// 动态加载组件
const Main = lazy(() => import("../pages/main"));
const Login = lazy(() => import("../pages/login"));
const routers = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
];
export default routers;
