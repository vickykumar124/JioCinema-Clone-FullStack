# 🎬 JioCinema Clone - Full Stack OTT Streaming Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge" />
</p>

## 📌 Overview

JioCinema Clone is a production-inspired Full Stack OTT Streaming Platform built using modern web technologies. The application allows users to browse movies, search content dynamically, manage subscriptions, authenticate securely, reset passwords through OTP verification, and stream video content.

The project follows a scalable architecture with a separate frontend and backend, secure authentication, third-party integrations, and RESTful API design principles.

---

# 🚀 Features

## 🎥 Movie Features

* Browse Movies
* Browse TV Shows
* Anime Collection
* Trending Movies
* Dynamic Categories
* Search Functionality
* Movie Details
* Responsive Design

## 🔐 Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing (bcrypt)
* OTP-Based Password Reset
* Cookie Authentication
* Role-Based Architecture Ready

## 📧 Email Services

* Welcome Email
* OTP Verification Email
* Password Reset Email
* Nodemailer Integration

## 💳 Subscription System

* Razorpay Integration
* Premium Membership Workflow
* Payment Verification
* Secure Payment Handling

## 🎬 Video Streaming Features

* Video Upload
* Video Playback
* Thumbnail Generation
* FFmpeg Integration
* Streaming Endpoints

## 📊 Analytics Features

* User Statistics Ready
* Revenue Analytics Ready
* Subscription Analytics Ready
* Dashboard Ready Architecture

---

# 🏗️ Enterprise System Architecture

```text
┌────────────────────────────────────────────────────┐
│                    CLIENT LAYER                    │
├────────────────────────────────────────────────────┤
│ Desktop Browser │ Mobile Browser │ Tablet Browser │
└─────────────────────────┬──────────────────────────┘
                          │ HTTPS
                          ▼

┌────────────────────────────────────────────────────┐
│                NEXT.JS FRONTEND                    │
├────────────────────────────────────────────────────┤
│ Home Page                                          │
│ Movies Page                                        │
│ TV Shows Page                                      │
│ Search Page                                        │
│ Subscription Page                                  │
│ Watchlist Page                                     │
│ Profile Page                                       │
└─────────────────────────┬──────────────────────────┘
                          │ Axios API Calls
                          ▼

┌────────────────────────────────────────────────────┐
│                EXPRESS.JS BACKEND                  │
├────────────────────────────────────────────────────┤
│ Auth Controller                                    │
│ Movie Controller                                   │
│ Video Controller                                   │
│ User Controller                                    │
│ Payment Controller                                 │
│ JWT Middleware                                     │
│ Security Middleware                                │
└───────────────┬───────────┬───────────┬────────────┘
                │           │           │
                ▼           ▼           ▼

     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
     │ MongoDB      │ │ OMDB API     │ │ Razorpay     │
     │ Atlas        │ │ Movie Data   │ │ Payments     │
     └──────────────┘ └──────────────┘ └──────────────┘

                │
                ▼

┌────────────────────────────────────────────────────┐
│                MEDIA STORAGE LAYER                 │
├────────────────────────────────────────────────────┤
│ Video Uploads                                      │
│ Video Streaming                                    │
│ FFmpeg Processing                                  │
│ Thumbnail Generation                               │
└────────────────────────────────────────────────────┘
```

---

# 🔐 Authentication Flow

```text
User
 │
 ▼
Signup / Login
 │
 ▼
Backend Validation
 │
 ▼
MongoDB Verification
 │
 ▼
JWT Token Generation
 │
 ▼
Cookie Storage
 │
 ▼
Protected Route Access
```

---

# 📧 Forgot Password Flow

```text
User Email
    │
    ▼
Generate OTP
    │
    ▼
Store OTP in MongoDB
    │
    ▼
Send Email via Nodemailer
    │
    ▼
Verify OTP
    │
    ▼
Reset Password
```

---

# 🔍 Search Flow

```text
Search Input
      │
      ▼
Next.js UI
      │
      ▼
Axios Request
      │
      ▼
Express Search API
      │
      ▼
OMDB API
      │
      ▼
Movie Results
      │
      ▼
Frontend Rendering
```

---

# 💳 Payment Flow

```text
User
 │
 ▼
Choose Subscription Plan
 │
 ▼
Create Razorpay Order
 │
 ▼
Payment Gateway
 │
 ▼
Verification
 │
 ▼
Premium Membership Activated
```

---

# 🎬 Video Streaming Flow

```text
Admin Uploads Video
        │
        ▼
Video Stored
        │
        ▼
FFmpeg Processing
        │
        ▼
Thumbnail Generated
        │
        ▼
Streaming Endpoint
        │
        ▼
Frontend Video Player
        │
        ▼
User Watches Content
```

---

# 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Bcrypt.js
* Cookie Parser
* Nodemailer

### APIs & Services

* OMDB API
* Razorpay API
* MongoDB Atlas

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---

# 📂 Project Structure

```bash
JioCinema-Clone-FullStack
│
├── jio-frontend
│   ├── app
│   ├── components
│   ├── lib
│   ├── public
│   └── package.json
│
├── jio_backend
│   ├── Controllers
│   ├── Routers
│   ├── Models
│   ├── Services
│   ├── Templates
│   ├── Utility
│   ├── Videos
│   └── api.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/vickykumar124/JioCinema-Clone-FullStack.git
```

## Frontend Setup

```bash
cd jio-frontend
npm install
npm run dev
```

## Backend Setup

```bash
cd jio_backend
npm install
npm run dev
```

---

# 🌍 Environment Variables

```env
PORT=5000

DB_USERNAME=your_username
DB_PASSWORD=your_password

JWT_SECRET_KEY=your_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

OMDB_API_KEY=your_omdb_api_key

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

---

# 🔒 Security Features

* JWT Authentication
* Password Hashing with bcrypt
* Rate Limiting
* Helmet Security
* Cookie Protection
* CORS Configuration
* Environment Variable Management

---

# 💼 Resume Worthy Highlights

✅ Full Stack Development

✅ REST API Development

✅ JWT Authentication

✅ OTP-Based Password Recovery

✅ Movie Search Engine

✅ MongoDB Database Design

✅ Razorpay Payment Integration

✅ Video Streaming Architecture

✅ Responsive UI Design

---

# 📈 Future Enhancements

* AI Movie Recommendations
* User Reviews & Ratings
* Watch History
* Continue Watching
* Multi-Language Support
* Admin Dashboard
* Netflix Style Recommendation Engine

---

# 👨‍💻 Author

**Vicky Kumar**

* B.Tech Computer Science Engineering
* Full Stack Developer

### Skills

* React.js
* Next.js
* Node.js
* Express.js
* MongoDB
* JavaScript
* Tailwind CSS
* REST APIs

GitHub:
https://github.com/vickykumar124

---

# ⭐ Support

If you found this project useful:

⭐ Star the Repository

🍴 Fork the Repository

📢 Share with the Developer Community

---

# 📜 License

This project is created for educational and portfolio purposes.

MIT License © 2026 Vicky Kumar
