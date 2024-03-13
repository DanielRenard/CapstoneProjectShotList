# CapstoneProjectShotList

Fullstack Post App using Mongodb, Express, MUI, React, Vite, & Node.js.

## Description
The Shot List app was made to be the first place Directors and Producers go to transmit shot composition ideas when working on live studio-based broadcasts. Shot List can also store all previously held compositions for quick access when stacking a show. 

Rather than use spread sheets, PowerPoints, or the odd imprecise email, Shot List offers a stable and dynamic platform for sharing and storing vital information for show stacking and show production.

More than that, my primary purpose for creating this website is to apply the skills that I’ve
learned while studying software engineering and to further improve my knowledge and skills. A good thing about image sharing applications is that they are very versatile, and the skills I’ve acquired can be adapted to other applications.

## Installation
Before you begin, make sure you have mongoDB, Node.js and npm installed on your machine.

Clone the repository to your local machine: 

https://github.com/DanielRenard/CapstoneProjectShotList

Navigate to the project directory: cd CapstoneProjectShotList

## Usage - Backend
In your terminal, cd in the server folder. 

### Install the project dependencies: 
i. npm init
ii. npm express
iii. mongoose
iiv. dotenv
v. cors

Start the development server: npm run dev
Server running at http://127.0.0.1:8085/

## Usage - Frontend
In a separate terminal, cd in the client folder. 

### Install the project dependencies: 
i. npm install
ii npm i react@latest react-dom@latest
iii. npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
iv. npm install react-router-dom
v. npm install axios
vi. npm install react

Start the development server: npm run dev
Open your web browser and navigate to http://localhost:5173 to view the application.

## MVC Structure
This is a nodejs application that showcases MVC structure and Rest API.

After installing, run the server using npm start. If, instead, you get something like the following, someone is already using the default port of 8085, so maybe change the port:

Server running at http://127.0.0.1:8085/

events.js:72 throw er; // Unhandled 'error' event ^ Error: listen EADDRINUSE at errnoException (net.js:901:11) at Server._listen2 (net.js:1039:14) at listen (net.js:1061:10) at Server.listen (net.js:1127:5) ... 

Once the server is running, test it by visiting the following URL in your browser:

http://localhost:5173/

## Files in this repository
### server.js

The server written with node.js. This server was adapted from the example provided in the node docs.

### .gitignore

List of file patterns that should NOT be stored in git. If you aren't using git, you don't need this file. And the contents are personal preference.

See the npm google groups topic 'node_modules in git' from FAQ for discussion.

### package.json

Standard package.json file for node packages. You will need this file for two reasons:

identify your node package dependencies during npm install identify to Bluemix that this directory contains a node.js application See the npm doc package.json for more information.

### README.md

This file!