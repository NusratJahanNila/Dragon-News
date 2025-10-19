import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";

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
        loader:()=> fetch('/news.json'),
        Component: CategoryNews,
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/news-details/:id",
    loader:()=> fetch('/news.json'),
    element: <NewsDetails></NewsDetails>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);
export default router;