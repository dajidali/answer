import React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return <h1>User Page: ID = {id}</h1>;
};

export default User;