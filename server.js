// // server.js
// const express = require("express");
// const app = express();
// const authRouter = require('./router/auth-router');
// const connectDb=require("./utils/db");

// // Middleware to parse JSON requests


// app.use(express.json());//middleware----now we can use json in the application!

// //?this line of code adds Express middleware that parses incoming request bodies with json paylaods. It's important to place 
// //this before any routes that need to handle json data in the request body.This middleware is responsible 
// //for parsing json from requests,and it should be applied at the beginning of your middleware stack to ensure 
// //it's available for all subsequent route handlers.


// // Use the router for authentication-related routes
// app.use("/api/auth", authRouter);

// const PORT = 5000;

// connectDb.then(()=>{



// app.listen(PORT, () => {
//     console.log(`Server is running at port: ${PORT}`);
// });
// });
// server.js

require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require('./router/auth-router');
const connectDb = require("./utils/db");

// Middleware to parse JSON requests
app.use(express.json());

// Use the router for authentication-related routes
app.use("/api/auth", authRouter);

const PORT = 5000;

// Immediately invoke an async function to handle connectDb asynchronously
(async () => {
    try {
        await connectDb(); // Connect to MongoDB
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1); // Exit with failure
    }
})();
