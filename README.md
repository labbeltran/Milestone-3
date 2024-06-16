# Milestone 3
Created By:

| MAX | MOE | LUIS | ANDRES |

A group project using a third-party API to style an e-commerce website. The end goal is to create an application where users can hold the cards they bought in their profile through a MongoDB database and be able to trade with other users. Due to time constraints, the focus is on the storefront and deploying a functional application.

## Tech Stack
**CSS Framework:** React-Bootstrap
**Backend:** Express, Node.js
**Authentication & Database:** Firebase
**Build Tool:** Vite
**Environment Variables:** dotenv
**Server:** vite-express

## Scripts
- start: node src/server/main.js
- dev: nodemon src/server/main.js
- build: vite build
- lint: eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0
- preview: vite preview
## Dependencies
### Production
- @reduxjs/toolkit: "^2.2.5"
- @types/jest: "^29.5.12"
- axios: "^1.7.2"
- bootstrap: "^5.3.3"
- firebase: "^10.12.2"
- firebase-admin: "^12.1.1"
- react: "^18.2.0"
- react-bootstrap: "^2.10.2"
- react-dom: "^18.2.0"
- react-redux: "^9.1.2"
- react-router-dom: "^6.23.1"
- yup: "^1.4.0"
### Development
- @types/node: "^20.14.2"
- @types/react: "^18.3.3"
- @types/react-dom: "^18.3.0"
- @vitejs/plugin-react: "^4.2.1"
- dotenv: "^16.4.5"
- eslint: "^8.57.0"
- eslint-plugin-react: "^7.34.1"
- eslint-plugin-react-hooks: "^4.6.0"
- eslint-plugin-react-refresh: "^0.4.6"
- express: "^4.19.2"
- nodemon: "^3.1.3"
- typescript: "^5.4.5"
- vite: "^5.2.12"
- vite-express: "^0.16.0"
## Routes
| Method | Path  | Purpose |
|-----|--------|-------|
|GET |	/api/cards	| Retrieve all cards |
|GET |	/api/cards/:id |	Retrieve a single card by ID |
| GET |	/api/cards/name/:name |	Retrieve a single card by name |
## Database

### User Authentication

Details about how user authentication is handled using Firebase.

## Planning
### User Stories

Andres: Third-party API routing; front-end fetch calls to the API, Card Gallery 

Max: Firebase integration, some CSS, some route configuration

Luis: Front-end layout, NavBar design, useEffect/ useContext logic generation,deployment

Moe: Firebase integration, Home Page Design, UI/UX, CSS & Styling

## Notes
#### Extra Notes
- Chat-GPT assisted with creating YUP schema for using AXIOS.
- Chat-GPT was utilized for the correction of syntax and debuggin 
- VSC's genie also assisted with debugging 
- Various YouTube videos on Firebase, shopping carts, deployment
- you can make your own login but if you dont want to user1@user1.com PW 1234567
- https://lamm-pokeshop.onrender.com/

### Additional notes and observations about the project.
- YouTube videos were helpful for providing an understanding of the concept, however, most videos contained setup for front-end only and contained logic that only worked in the local cache, as such the code had to be repurposed to allow for storing and fetching of data from our database. 
