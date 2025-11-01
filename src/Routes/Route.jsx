import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'',
            element: <Home></Home>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        }
    ]
  },
]);