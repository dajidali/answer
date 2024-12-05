package models

import (
	"answer/backend/database"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}

// 获取所有用户
func GetAllUsers() ([]User, error) {
	rows, err := database.DB.Query("SELECT id, name, age FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var user User
		if err := rows.Scan(&user.ID, &user.Name, &user.Age); err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

// 创建用户
func CreateUser(name string, age int) (int64, error) {
	result, err := database.DB.Exec("INSERT INTO users (name, age) VALUES (?, ?)", name, age)
	if err != nil {
		return 0, err
	}

	return result.LastInsertId()
}

// 更新用户
func UpdateUser(id int, name string, age int) error {
	_, err := database.DB.Exec("UPDATE users SET name = ?, age = ? WHERE id = ?", name, age, id)
	return err
}

// 删除用户
func DeleteUser(id int) error {
	_, err := database.DB.Exec("DELETE FROM users WHERE id = ?", id)
	return err
}
