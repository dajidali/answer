const API_URL = "/api/users";

export const getUsers = async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data : []; // 确保返回值始终是数组
    }
    return [];
};

export const createUser = async (user: { name: string; age: number }) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const updateUser = async (id: number, user: { name: string; age: number }) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const deleteUser = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};