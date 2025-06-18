import Logo from "@/assets/images/logo.png";
import { ROUTES } from "@/routes/constants";
import { lazy, Suspense } from "react";
import { Outlet, RouteObject } from "react-router";

const DemoComponent = lazy(() => import("@/app/demo"));

const LogoComponent = () => (
  <>
    <img src={Logo} alt="Logo" className="mx-auto mt-10" />
    <Outlet />
  </>
);

const suspenseComponent = (Component: React.ExoticComponent<any>) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

// Public routes (auth-related)
export const authRoutes: RouteObject[] = [
  {
    element: <LogoComponent />,
    children: [
      {
        path: ROUTES.HOME,
        element: suspenseComponent(DemoComponent),
      },
    ],
  },
];

// Protected routes
export const protectedRoutes: RouteObject[] = [
  {
    element: <div>Protected</div>, // TODO: Add layout route that checks auth status for protected route
    children: [],
  },
];

// All routes combined
export const routes: RouteObject[] = [...authRoutes, ...protectedRoutes];
