<h1 align="center">College Survey - Rasa + Hugging Face + JavaScript + React + Tailwind + MongoDB + NodeJS  </h1>
<p><strong>College Survey</strong> College Survey is an AI-driven, full-stack web application designed to streamline academic decision-making for undergraduate students. Its intuitive design and data visualization tools empower institutions to analyze student preferences at scale, achieving over 95% participation and 1,000+ unique engagements.</p>

<p>Leveraging a modern MERN architecture (MongoDB, Express, React, Node.js) and integrated with a Rasa-powered chatbot enhanced by Hugging Face NLP, the platform facilitates real-time, conversational data collection and personalized guidance.</p>

### What technologies being used :
#### AI ChatBot (Rasa & Hugging Face)\
     -> Rasa 
        -> Used to build the conversational chatbot logic.
        -> Handles intent recognition, dialogue flow, and custom actions.
     -> Hugging Face
        -> Integrated with Rasa to enhance natural language understanding.
        -> Provides contextual, intelligent responses beyond rule-based replies
#### Backend 
      -> Node.js + Express
         -> Hosts the backend server and REST APIs.
         -> Manages survey data, user sessions, and chatbot communication.
      -> MongoDB
         -> Stores user responses, survey results, and chatbot logs.
         -> Enables flexible schema for evolving data needs.
#### Frontend 
      -> JavaScript
         -> Handles API calls and chatbot integration.
      -> React
         -> Manages chatbot interactions, survey forms, and dashboard views.
      -> Tailwind CSS
         -> Enables responsive design and fast UI prototyping.
         
### How to run locally :
#### Clone Repo 
      -> git clone https://github.com/jaishreeverma2004/college_survey.git
      -> cd college_survey
#### Frontend 
      -> cd frontend
      -> npm install
      -> npm start
#### Backend 
      -> cd ../backend
      -> npm install
      -> node server.js
#### Chatbot 
      -> cd ../rasa_bot
      -> python -m venv rasaenv     (virtual environment)
      -> .\rasaenv\Scripts\activate (# for windows)
      -> pip install rasa           (Install Rasa % dependencies)
      -> rasa train                 (Train model)
      -> rasa run                   (Final run)

```
Frontend :
Backend  :
Final    : 
```
### Sumary 
      |     Category     |                             Description                                       |
      |------------------|-------------------------------------------------------------------------------|
      | Project Name     | College Survey                                                                |
      | Purpose          | AI-powered chatbot platform for student guidance and survey visualization     |
      | Tech Stack       | Rasa, Hugging Face, React, Tailwind CSS, Node.js, MongoDB                     |
      | Frontend         | React + Tailwind (Vite)                                                       |
      | Backend          | Node.js + Express, REST API, MongoDB for data storage                         |
      | Chatbot          | Rasa framework with Hugging Face NLP, exposed via REST webhook                |
      | Deployment       | Frontend: Vercel<br>Backend: Render/Railway<br>Chatbot: Local/VM/ngrok        |
      | Users Served     | 250+ Engineering Science students                                             |
      | Engagement       | 95% class participation, 1000+ unique visits                                  |
      | Key Features     | Conversational survey, real-time insights, personalized academic guidance     |
      |------------------|-------------------------------------------------------------------------------|












