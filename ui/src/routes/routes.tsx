import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "dashboard",
                element: <Dashboard />, // 将 Dashboard 设置为主路由
                children: [
                    { path: "profile", element: <Profile /> }, // 将 Profile 设置为 Dashboard 的子路由
                ],
            },
            { path: "about", element: <About /> },
            { path: "settings", element: <Settings /> },
        ],
    },
];

export default routes;