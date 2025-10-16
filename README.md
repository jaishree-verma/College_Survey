college_survey : <h1 align="center">College Survey - Rasa + Hugging Face + JavaScript + React + Tailwind + MongoDB + NodeJS  </h1>

<p><strong>College Survey</strong> is a full-stack AI-powered chatbot platform designed to assist college-bound students with personalized guidance. Built using Rasa for conversational logic and Hugging Face for intelligent responses, it helps users explore hostel facilities, placement stats, scholarships, and more—all through natural language interaction.</p>
<p>The frontend is crafted with React and Tailwind CSS for a sleek, responsive UI, while the backend uses Node.js and MongoDB to manage data and API communication. This project showcases a seamless integration of modern web technologies with conversational AI, making it a smart, scalable solution for student engagement.</p>

<p>Live Deployment</p>

🔗 *Visit*: [https://college_survey.vercel.app](https://college_survey.vercel.app)  

## 📦 How to Run Locally

```bash
git clone https://github.com/jaishreeverma2004/college_survey.git
cd college_survey
cd frontend
npm install
npm start
cd ../backend
npm install
node server.js
cd rasa_bot
python -m venv rasaenv
.\rasaenv\Scripts\activate   # For Windows
pip install rasa
rasa train
rasa run
