import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import Home from "@pages/Home";
import Details from "@pages/Details";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/film',
                element: <Details />
            },
            {
                path: '/film/:id',
                element: <Details />
            }
        ]

    }
])



function AppRouter() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default AppRouter
