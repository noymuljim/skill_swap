import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import AuthLayout from "./AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path:'/skills',
    element: <h2>skills layout</h2>
  },
  {
    path: '*',
    element: <h2>error layout</h2>
  }
]);