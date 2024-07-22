import { lazy } from "react";

// import Main from "../pages/main";
// import Login from "../pages/login";
// 动态加载组件
const Main = lazy(() => import("../pages/main"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"))
const NoAccount = lazy(() => import("../pages/loginnoaccount"))
const routers = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/noaccount", element: <NoAccount /> }
];
export default routers;
