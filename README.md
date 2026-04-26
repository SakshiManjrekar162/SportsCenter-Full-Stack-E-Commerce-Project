🏆 SportsCenter – Full Stack E-Commerce Application
📌 Overview
SportsCenter is a full-stack e-commerce web application built using React (TypeScript) for the frontend and Spring Boot for the backend.
It provides features like product browsing, shopping cart management, user authentication, and order placement.

🚀 Tech Stack
Frontend:
React (TypeScript)
Redux Toolkit
Material UI (MUI)
Axios
Backend:
Spring Boot
Spring Data JPA
Spring Security (JWT Authentication)
MapStruct
Database:
MySQL
Redis (for basket caching)

✨ Features
User authentication using JWT
Product listing with filters (brand/type/search)
Shopping cart (add, remove, update quantity)
Order placement and order history
Persistent cart using Redis
Responsive UI with Material UI
Centralized API handling with Axios interceptors

📁 Project Structure
sportscenter/
 ├── client/   (React Frontend)
 ├── src/      (Spring Boot Backend)
 └── database/  (MySQL schema)
 
⚙️ Setup Instructions
🔧 Backend (Spring Boot)
cd sportscenter
mvn clean install
mvn spring-boot:run
💻 Frontend (React)
cd client
npm install
npm run dev

🔐 Environment Variables
Create application.properties (backend):
spring.datasource.url=jdbc:mysql://localhost:3306/sportscenter
spring.datasource.username=root
spring.datasource.password=your_password
jwt.secret=your_secret_key

📸 Screenshots
(Add your UI screenshots here)

📈 Future Improvements
Payment gateway integration
Admin dashboard
Product reviews & ratings
Deployment on AWS / Vercel





