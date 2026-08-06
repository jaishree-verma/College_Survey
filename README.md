# PSIT Student Survey & Query Resolution System

A full-stack web application built for Pranveer Singh Institute of Technology (PSIT) students to submit campus queries, receive instant email resolutions, and view live survey analytics. Developed by AIML students to streamline student-faculty communication and provide data-driven feedback for college administration.

---

## Live Application Links

- **Frontend Website**: [https://collegesurveyapplication.vercel.app/](https://collegesurveyapplication.vercel.app/)
- **Backend API**: [https://college-survey-backend.onrender.com/](https://college-survey-backend.onrender.com/)

---

## Features

- **Instant Email Resolution**: Automated query processing sends direct answers from `collegesurvey2025@gmail.com` to student inboxes (check Inbox and Spam/Junk folder).
- **Live Real-Time Dashboard**: Socket.IO integration updates survey statistics, category share percentages, and recent student queries instantly.
- **Anonymous Submissions**: Optional checkbox for students to submit concerns with complete identity privacy.
- **Responsive Interface**: Custom CSS layout with smooth page transitions and mobile optimization.

---

## Tech Stack

- **Frontend**: React (Vite), React Router, Chart.js, Socket.io-client, CSS
- **Backend**: Node.js, Express.js, Socket.IO, Nodemailer, Mongoose
- **Database**: MongoDB Atlas / Local JSON fallback (`data/surveys.json`)
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jaishree-verma/College_Survey.git
   cd College_Survey
   ```

2. Start the backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Start the frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## Developed By

Developed by **AIML Students at Pranveer Singh Institute of Technology (PSIT)**.
