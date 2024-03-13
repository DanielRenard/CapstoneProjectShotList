# CapstoneProjectShotList

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

## MVC Structure
This is a nodejs application that showcases MVC structure and Rest API.

After installing, run the server using npm start. If, instead, you get something like the following, someone is already using the default port of 8085, so maybe change the port:

Server running at http://127.0.0.1:8085/

events.js:72 throw er; // Unhandled 'error' event ^ Error: listen EADDRINUSE at errnoException (net.js:901:11) at Server._listen2 (net.js:1039:14) at listen (net.js:1061:10) at Server.listen (net.js:1127:5) ... 

## Files in this repository

### .gitignore

List of file patterns that should NOT be stored in git. If you aren't using git, you don't need this file. And the contents are personal preference.

See the npm google groups topic 'node_modules in git' from FAQ for discussion.

### package.json

Standard package.json file for node packages. You will need this file for two reasons:

identify your node package dependencies during npm install identify to Bluemix that this directory contains a node.js application See the npm doc package.json for more information.

### README.md

This file!