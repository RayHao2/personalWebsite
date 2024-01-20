import {
  Route,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
export type RoutePathDefinition = RouteObject & {
  title: string;
};

/**
 * Router for dev and debug targets (standalone-only). Wraps all application
 * routes with a dev layout. Adds a login page. And wraps all routes with
 * logic for redirecting to login if the user is not authenticated.
 *
 * Add breadcrumb titles using the route handle. See:
 * https://reactrouter.com/en/6.10.0/hooks/use-matches
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Home" element={<Home />} handle={{ crumb: "Home" }}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
