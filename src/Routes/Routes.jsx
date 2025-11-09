import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import AddCar from "../Pages/AddCar";
import MyListings from "../Pages/MyListings";
import MyBookings from "../Pages/MyBookings";
import BrowseCars from "../Pages/BrowseCars";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";



export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children: [
            {
                index:true,
                element: <Homepage/>,
            },
            {
                path: '/add-car',
                element: <AddCar/>,
            },
            {
                path: '/my-listings',
                element: <MyListings/>,
            },
            {
                path: '/my-bookings',
                element: <MyBookings/>,
            },
            {
                path: '/browse-cars',
                element: <BrowseCars/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signup',
                element: <SignUp/>,
            },
        ]
    }
])