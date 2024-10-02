import { createBrowserRouter, Router } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../layout/main/Main";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
           {
            path:"/",
            element:<Home/>
           }
           
        ]
    }
]);


export default router ;