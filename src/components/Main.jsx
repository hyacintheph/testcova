import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import {Products} from "./Products";
import {Dashboard} from "./Dashboard";
import {Product} from "./Product";
const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/products",
        element: <Products/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/products/:productId",
                element: <Product />,
            },
        ],
    },
]);

export const Main = () => {
    return <div>
        <RouterProvider router={router} />

    </div>
}
