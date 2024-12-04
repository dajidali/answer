import React, { useState, useEffect } from "react";

interface Props {
    onSubmit: (name: string, age: number) => void;
    initialData?: { id?: number; name: string; age: number } | null;
}

const UserForm: React.FC<Props> = ({ onSubmit, initialData }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setAge(initialData.age);
        } else {
            setName("");
            setAge(0);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, age);
        setName("");
        setAge(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    className="form-control"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                {initialData ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default UserForm;