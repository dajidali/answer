import React from "react";

interface User {
    id: number;
    name: string;
    age: number;
}

interface Props {
    users: User[];
    onDelete: (id: number) => void;
    onEdit: (user: User) => void;
}

const UserTable: React.FC<Props> = ({ users, onDelete, onEdit }) => {
    return (
        <table className="table table-striped table-bordered mt-3">
            <thead className="thead-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                        <button className="btn btn-primary btn-sm mr-2" onClick={() => onEdit(user)}>
                            Edit
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;