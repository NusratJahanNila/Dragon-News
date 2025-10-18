import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/category/:id',
        Component: CategoryNews,
      }
    ]
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