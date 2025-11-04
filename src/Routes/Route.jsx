import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Profile from "../pages/Profile";
import AuthLayout from "./AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import SkillDetails from "../pages/SkillDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/Skills.json')
      },



    ]
  },

  {
    path: '/profile',
    element: <Profile></Profile>
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
    path: '/skill-details/:id',
    element: <PrivateRoute>
      <SkillDetails></SkillDetails>
    </PrivateRoute>,

    loader: () => fetch('/Skills.json')
  },


  {
    path: '*',
    element: <h2>error layout</h2>
  }
]);