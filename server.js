// server.js
const express = require("express");
const app = express();
const authRouter = require('./router/auth-router');

// Middleware to parse JSON requests


app.use(express.json());//middleware----now we can use json in the application!

//?this line of code adds Express middleware that parses incoming request bodies with json paylaods. It's important to place 
//this before any routes that need to handle json data in the request body.This middleware is responsible 
//for parsing json from requests,and it should be applied at the beginning of your middleware stack to ensure 
//it's available for all subsequent route handlers.


// Use the router for authentication-related routes
app.use("/api/auth", authRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
