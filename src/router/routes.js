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
const routers = [
  { path: "/", element: <Guidance />,
    children:[
      {
        path: "/home", element: <Home />,
      }
    ]
   },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/noaccount", element: <NoAccount /> }
];
export default routers;
