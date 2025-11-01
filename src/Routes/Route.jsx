import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Profile from "../pages/Profile";
import AuthLayout from "./AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import CategoryNews from "../components/HomeLayout/CategoryNews";
import Details from "../components/HomeLayout/Details";

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
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ()=> fetch("/SkillsData.json")
      },
      {
        path:'/skillDetails/:id',
        element:<Details></Details>
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