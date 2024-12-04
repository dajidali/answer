import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ display: "flex", flex: 1 }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "1rem" }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;