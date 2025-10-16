college_survey : <h1 align="center">College Survey - Rasa + Hugging Face + JavaScript + React + Tailwind + MongoDB + NodeJS  </h1>

<p>An AI-powered chatbot for college-bound students. </p>
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
