# LetsConnect
A web-based peer-to-peer video calling application that allows two users to connect with each other with video, audio and text communication.
It uses sockets and peer-to-peer connections in order to connect users.

Try it here - [LetsConnect](https://niku-engage.netlify.app/)

## Features
LetsConnect offers the following features:
* Video and audio feed in communication
* Text based chatbox
* Muting/Unmuting the microphone
* Turning the camera feed on and off

## Demo
### Video Demo
[![LetsConnect Video Demo](http://img.youtube.com/vi/-Ab0dSJjni8/0.jpg)](http://www.youtube.com/watch?v=-Ab0dSJjni8)

### Screenshots
![Main UI](https://user-images.githubusercontent.com/39586303/125440553-1a188166-69be-40d5-a367-0fe7fca9208b.png)
![Calling notification](https://user-images.githubusercontent.com/39586303/125440791-f20e4c11-98cd-4e40-8bbd-c1ae8c9c9595.png)
![Both camera Feeds](https://user-images.githubusercontent.com/39586303/125455937-09b9aa59-2f0d-49a3-bbfe-7e2c315c4ddc.png)
![Chat](https://user-images.githubusercontent.com/39586303/125441065-ec27e423-ec6a-4c82-ae0a-a310f72b77a8.png)

## Framework and Technologies used
### Frontend
* React JS
* HTML / CSS

### Backend
* Express JS
* Node JS

### Connection and UI libraries
* Socket.io
* Simple-peer
* Material UI

### Hosting
* Backend - Heroku
* Frontend - Netlify

## Installation
In order to install and start a development build for this application, follow these instructions:
* Download the project ZIP from Github and extract it.
* Navigate to the context file present at client/src/Context.js and modify line 7 to `const socket = io('localhost:5000');` in order to use the locally running server instead of the one hosted on heroku.
* Go to the root folder and run `npm i && nodemon server` in order to start the server.
* Go to the client folder and run `npm i && npm start` to start the react application.
