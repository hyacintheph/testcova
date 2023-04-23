import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import {Dashboard} from "./components/Dashboard";
import {Products} from "./components/Products";
import {Product} from "./components/Product";
import {Login} from "./components/Login";
const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/signin",
        element: <Login/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard/products",
                element: <Products/>,
                errorElement: <ErrorPage />,
            },
        ]
    },


]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
