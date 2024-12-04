import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard: React.FC = () => {
    const images = [
        { src: "https://via.placeholder.com/800x400?text=Slide+1", link: "/" },
        { src: "https://via.placeholder.com/800x400?text=Slide+2", link: "/about" },
        { src: "https://via.placeholder.com/800x400?text=Slide+3", link: "/dashboard" },
    ];
    const navigate = useNavigate(); // 获取导航函数
    return (
        <div>
            <h1>Dashboard</h1>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            onClick={() => navigate(image.link)}
                            style={{cursor: "pointer"}}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div>
                <nav>
                    <Link to="profile">Profile</Link>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
        ;
};

export default Dashboard;
