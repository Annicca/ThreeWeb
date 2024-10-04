import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Competitions } from "src/pages/Competitions/Competitions";
import { Account } from "src/pages/Account/Account";
import { Login } from "src/pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <>not found</>,
        children: [
            {
                path: "",
                index: true,
                element: <Competitions />,
            },
            {
                path: "account",
                index: true,
                element: <Account />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
])