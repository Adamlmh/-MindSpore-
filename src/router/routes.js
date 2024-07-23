import { Children, lazy } from "react";

// import Main from "../pages/main";
// import Login from "../pages/login";
// 动态加载组件
const Main = lazy(() => import("../pages/main"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"))
const NoAccount = lazy(() => import("../pages/loginnoaccount"))
const Guidance = lazy(() => import("../pages/layout/layout"))
const Home = lazy(() => import("../pages/Home"))
const Workbench = lazy(() => import("../pages/workbench/workbench"))
const Center = lazy(() => import("../pages/Center"))
const routers = [
  {
    path: "/", element: <Guidance />,
    children: [

      { path: "/home", element: <Home /> },
      { path: "/center", element: <Center /> },
      {
        path: "/workbench", element: <Workbench />,
      }
    ]
  },
  {
    path: "/main", element: <Main />,
    children: [
      { path: "/main/login", element: <Login /> },
      { path: "/main/register", element: <Register /> },
      { path: "/main/noaccount", element: <NoAccount /> }
    ]
  }
];
export default routers;
