import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import AddCar from "../Pages/AddCar";
import MyListings from "../Pages/MyListings";
import MyBookings from "../Pages/MyBookings";
import BrowseCars from "../Pages/BrowseCars";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../Pages/CarDetails";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: '/add-car',
                element: (
                    <PrivateRoute>
                        <AddCar />
                    </PrivateRoute>
                ),
            },
            {
                path: '/cars/:id',
                element: (
                    <PrivateRoute>
                        <CarDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-listings',
                element: (<PrivateRoute>
                    <MyListings />
                </PrivateRoute>),
            },
            {
                path: '/my-bookings',
                element: <MyBookings />,
            },
            {
                path: '/browse-cars',
                element: <BrowseCars />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ]
    }
])