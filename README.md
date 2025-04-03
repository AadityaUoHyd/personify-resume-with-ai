# personify-resume-with-ai
This project, **Personify Resume with AI**, is an AI-powered resume-building web application that leverages **Spring AI** on the backend and **React** on the frontend. It integrates **Mistral AI** for generating personalized resume content based on user descriptions. Authentication is still pending and I am suppose to build, it'll be handled in future using **Spring Security with JWT and Google OAuth**. The backend, built with **Spring Boot**, this project as of requires no db as we are not saving anything. This system dynamically processes user inputs to generate structured, ATS-friendly resumes. With **REACT** for frontend efficiency, the app ensures a seamless user experience. Future enhancements may include real-time AI-powered resume analysis with scores, and job-matching features. 🚀

## Technology Used
- Java 21
- Spring Boot 3
- Spring AI
- Mistral-AI (only API-Key integration)
- React Js

## Create your .env file with these two properties in root folder of resume-personify-ai-java-springboot-backend.
MISTRAL_AI_API_KEY=your-mistral-ai-api-key <br>
MISTRAL_AI_CHAT_MODEL=mistral-large-latest

- For MISTRAL_AI_API_KEY, generate your own mistral api-key from here (You can use freely available key for demo projects) => https://console.mistral.ai/api-keys
- For MISTRAL_AI_CHAT_MODEL, you can choose any one model from given below :
```
- open-mistral-7b,
- open-mixtral-8x7b,
- open-mixtral-8x22b,
- mistral-small-latest,
- mistral-large-latest.
```

## How To Start This Project 
- resume-personify-ai-react-frontend (vite project)
```
npm install
npm run dev
```
- resume-personify-ai-java-springboot-backend
```
=> create .env file as mentioned above.
=> Run your spring boot project through IDE, OR using MAVEN => mvn spring-boot:run
```

## Sources you can take help from: 
https://docs.spring.io/spring-ai/reference/api/chat/mistralai-chat.html 
