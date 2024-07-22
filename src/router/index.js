import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
  );
}
