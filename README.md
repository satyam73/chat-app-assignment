# Chat Web App

### Demo Video 


https://github.com/satyam73/chat-app-assignment/assets/85296770/ac5e8547-1b7e-4e06-9525-e10dcca84080
> Screen Recording of assignment

## Pre-requisite

- Yarn
- Node
- NPM

> Note: Since the backend for this project is hosted on [Render](https://render.com/) free service, it takes time to boot up the service. 

## Steps to run project locally
- Clone the repo by running command,
```
https://github.com/satyam73/chat-app-assignment.git
```

### Frontend

- Checkout to frontend folder with command,
```
cd frontend
```
- Install dependencies with command,
```
yarn install
```
- Run the project with command,
```
yarn dev
```

### Backend

- Checkout to backend folder with command,
```
cd backend
```
- Install dependencies with command,
```
yarn install
```
- Run the project with command,
```
yarn dev
```

### Connecting frontend to backend

- Create .env in frontend folder and add the following,
```
VITE_BACKEND_BASE_URL=http://localhost:3000
```
- Create .env in backend folder and add the following,
```
FRONTEND_URL=http://localhost:5173
```
- Restart both frontend and backend by command,
```
yarn dev
```
- Congratulations🥳, you have successfully running project now!

> Note: I have enabled origin by `*` in backend which means for any endpoint, since I have hosted frontend and backend separately without same domain, ideally we should avoid this. 

Still having issues?
Drop a message to me,

- Linkedin - https://www.linkedin.com/in/satyam75/
- Twitter - https://twitter.com/satyamtweetss
