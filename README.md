🏆 SportsCenter – Full Stack E-Commerce Application

<b><i>📌 Overview</b></i>

SportsCenter is a full-stack e-commerce web application built using React (TypeScript) for the frontend and Spring Boot for the backend.
It provides features like product browsing, shopping cart management, user authentication, and order placement.

<b><i>🚀 Tech Stack</b></i>

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

<b><i>✨ Features</b></i>

User authentication using JWT

Product listing with filters (brand/type/search)

Shopping cart (add, remove, update quantity)

Order placement and order history

Persistent cart using Redis

Responsive UI with Material UI

Centralized API handling with Axios interceptors


<b><i>📁 Project Structure</b></i>

sportscenter/

 ├── client/   (React Frontend)
 
 ├── src/      (Spring Boot Backend)
 
 └── database/  (MySQL schema)
 
⚙️ Setup Instructions

<b><i>🔧 Backend (Spring Boot)</b></i>

cd sportscenter

mvn clean install

mvn spring-boot:run

<b><i>💻 Frontend (React)</b></i>

cd client

npm install

npm run dev

<b><i>🔐 Environment Variables </i></b>

Create application.properties (backend):

spring.datasource.url=jdbc:mysql://localhost:3306/sportscenter

spring.datasource.username=root

spring.datasource.password=your_password

jwt.secret=your_secret_key

<b><i>📸 Screenshots</b></i>
<p>
<img src="https://github.com/SakshiManjrekar162/SportsCenter-Full-Stack-E-Commerce-Project/blob/main/client/public/images/Register%20Page.png" />
</p>
<p>
 <img src="https://github.com/SakshiManjrekar162/SportsCenter-Full-Stack-E-Commerce-Project/blob/main/client/public/images/Sign%20In%20Page.png" />
 </p>
<p>
 <img src="https://github.com/SakshiManjrekar162/SportsCenter-Full-Stack-E-Commerce-Project/blob/main/client/public/images/Store%20Page.png" /
</p>


<b><i>📈 Future Improvements</b></i>

Payment gateway integration

Admin dashboard

Product reviews & ratings

Deployment on AWS / Vercel





