import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Loading from "../components/Loding";
export default function Router() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}
