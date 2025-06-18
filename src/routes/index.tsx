import { useRoutes } from "react-router";
import { routes } from "./config";

/**
 * RouterProvider component that renders routes based on configuration
 */
export const AppRoutes = () => {
  return useRoutes(routes);
};
export default AppRoutes;
