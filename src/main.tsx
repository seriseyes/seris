import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentList from './views/dev/ComponentList'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Menu from "./views/menu/Menu";
import Home from "./views/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
        children: [
            {
                path: 'dev',
                element: <ComponentList/>
            },
            {
                path: "home",
                element: <Home/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
