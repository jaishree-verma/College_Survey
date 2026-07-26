# PSIT Major Query Survey Portal 🎓

[![Live Application](https://img.shields.io/badge/Vercel-Live_App-000000?style=for-the-badge&logo=vercel)](https://collegesurveyapplication.vercel.app/)
[![Backend API](https://img.shields.io/badge/Render-Backend_API-46E3B7?style=for-the-badge&logo=render)](https://college-survey-backend.onrender.com/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/jaishree-verma/College_Survey)

An intelligent, student-driven feedback platform developed by **AIML Students at Pranveer Singh Institute of Technology (PSIT)**. The portal delivers instant automated query resolutions dispatched directly to student email inboxes, paired with real-time Socket.IO survey analytics.

---

## 🌟 Live Links & Deployments

- **Frontend Application (Vercel)**: [https://collegesurveyapplication.vercel.app/](https://collegesurveyapplication.vercel.app/)
- **Backend API & WebSockets (Render)**: [https://college-survey-backend.onrender.com/](https://college-survey-backend.onrender.com/)
- **GitHub Repository**: [https://github.com/jaishree-verma/College_Survey](https://github.com/jaishree-verma/College_Survey)

---

## ✨ Key Features

- **Full-Page Slide-Up Animations**: Dynamic entrance transitions across all pages and cards for a modern executive UI.
- **Instant Email Resolution Dispatch**: Automatically categorizes student inquiries and emails comprehensive answers directly from `collegesurvey2025@gmail.com` *(Check Inbox & Spam/Junk folder)*.
- **Live Response Analytics**: Real-time Socket.IO feed and Chart.js pie/bar chart visualizations tracking top active campus departments.
- **Strict Anonymity Option**: Allows students to submit queries anonymously for identity protection.
- **Full Mobile & Desktop Responsiveness**: Custom CSS styling with zero image clipping and smooth glassmorphism aesthetics.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React (Vite), React Router DOM, Chart.js, React-ChartJS-2, Socket.io-Client, Vanilla CSS |
| **Backend** | Node.js, Express.js, Socket.IO, Nodemailer, MongoDB Mongoose, Dotenv, CORS |
| **Database** | MongoDB Atlas Cloud + Local JSON Persistence Storage (`data/surveys.json`) |
| **Deployment** | Vercel (Frontend), Render (Backend API & Socket WebSockets) |

---

## 🚀 Local Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/jaishree-verma/College_Survey.git
cd College_Survey
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
*Backend runs live on `http://localhost:5000`*

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*Frontend runs live on `http://localhost:5173`*

---

## 👩‍💻 Developed By

Designed and developed with ❤️ by **AIML Students @ Pranveer Singh Institute of Technology (PSIT)** for student welfare and automated campus query guidance.
