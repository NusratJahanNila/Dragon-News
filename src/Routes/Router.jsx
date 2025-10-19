import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";

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
        hydrateFallbackElement:<Loading></Loading>      }
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
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);
export default router;