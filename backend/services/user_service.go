package services

import "answer/backend/models"

func GetUsersService() ([]models.User, error) {
	return models.GetAllUsers()
}

func CreateUserService(name string, age int) (int64, error) {
	return models.CreateUser(name, age)
}

func UpdateUserService(id int, name string, age int) error {
	return models.UpdateUser(id, name, age)
}

func DeleteUserService(id int) error {
	return models.DeleteUser(id)
}
