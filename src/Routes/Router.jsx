import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <div>Authentication</div>,
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);
export default router;