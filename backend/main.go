package main

import (
	"answer/backend/database"
	_ "answer/backend/docs" // 引入自动生成的 docs 文件
	"answer/backend/router"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"net/http"
)

// Middleware to enable CORS
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// If it's a preflight request, respond with 200 OK
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// @title User Management API
// @version 1.0
// @description API for managing users (CRUD operations).
// @host localhost:8080
// @BasePath /api
func main() {
	// 初始化数据库连接
	database.InitDB()
	// 初始化路由
	r := router.InitRouter()
	r.Use(enableCORS)

	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
