import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import SignUp from "../pages/authentication/SignUp";
import AddService from "../pages/addService/AddService";
import PrivetRoutes from "../routes/PrivetRoutes";
import AllServices from "../pages/all-services/AllServices";
import ViewDetail from "../pages/view-detail/ViewDetail";
import BookNow from "../pages/book-now/BookNow";
import BookedServices from "../pages/booked-services/BookedServices";
import ManageServices from "../pages/manage-services/ManageServices";
import UpadateService from "../pages/manage-services/UpadateService";
import ServiceTodo from "../pages/serviceToDo/ServiceTodo";
import Profile from "../pages/profile/Profile";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/detail/:id',
                element: <PrivetRoutes><ViewDetail></ViewDetail></PrivetRoutes>
            },
            {
                path: '/add-service',
                element: <PrivetRoutes><AddService></AddService></PrivetRoutes>
            },
            {
                path: '/book-service/:id',
                element: <PrivetRoutes><BookNow></BookNow></PrivetRoutes>
            },
            {
                path: '/booked-services',
                element: <PrivetRoutes><BookedServices></BookedServices></PrivetRoutes>
            },
            {
                path: '/manage-services',
                element: <PrivetRoutes><ManageServices></ManageServices></PrivetRoutes>
            },
            {
                path: '/update-service/:id',
                element: <PrivetRoutes><UpadateService></UpadateService></PrivetRoutes>
            },
            {
                path: '/services-todo',
                element: <PrivetRoutes><ServiceTodo></ServiceTodo></PrivetRoutes>
            },
            {
                path: '/profile',
                element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
            },
        ]
    }
])

export default router