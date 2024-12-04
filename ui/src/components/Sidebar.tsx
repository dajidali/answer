import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const location = useLocation();

    return (
        <div style={{ width: "250px", background: "#f8f9fa", height: "100vh", padding: "1rem" }}>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard" active={location.pathname === "/dashboard"}>
                    Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
                    About
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/profile" active={location.pathname === "/profile"}>
                    Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/settings" active={location.pathname === "/settings"}>
                    Settings
                </Nav.Link>
                <Nav.Link as={Link} to="/user" active={location.pathname === "/user"}>
                    User
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;