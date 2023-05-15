// ** React Imports
// import { lazy } from "react";

// ** Routes Imports
import AuthenticationRoutes from "./Authentication";
// import AppsRoutes from "./Apps";

// ** Default Route
const DefaultRoute = "/home";

// ** Document title
const TemplateTitle = "%s - Solution";

// ** Merge Routes
const allRoutes = [
  ...AuthenticationRoutes,
  // ...AppsRoutes,
];

export { DefaultRoute, TemplateTitle, allRoutes };
