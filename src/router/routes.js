import { Children, lazy } from "react";

// import Main from "../pages/main";
// import Login from "../pages/login";
// 动态加载组件
// const Main = lazy(() => import("../pages/main"));
const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/Home"));
const Guidance = lazy(() => import("../pages/layout/layout"));
const routers = [
  { 
    path: "/", element: <Guidance /> ,
    children: [{ path: "/home", element: <Home /> },]

  },
  { path: "/login", element: <Login /> },
  
];
export default routers;
