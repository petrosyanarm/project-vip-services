import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DefaultLayout from "@/components/layout/DefaultLayout";

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
            ]
        },
    ])
    return <RouterProvider router={router} />
}
export default Routes;