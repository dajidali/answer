package router

import (
	"answer/backend/controllers"
	"github.com/gorilla/mux"
	httpSwagger "github.com/swaggo/http-swagger"
)

func InitRouter() *mux.Router {
	r := mux.NewRouter()

	// 用户相关路由
	r.HandleFunc("/api/users", controllers.GetUsers).Methods("GET")
	r.HandleFunc("/api/users", controllers.CreateUser).Methods("POST")
	r.HandleFunc("/api/users/{id:[0-9]+}", controllers.UpdateUser).Methods("PUT")
	r.HandleFunc("/api/users/{id:[0-9]+}", controllers.DeleteUser).Methods("DELETE")
	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)

	return r
}
