import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./Pages/HomePage/index.jsx";

export default function Router(){

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    return(
        <RouterProvider router={router} />
    );
}