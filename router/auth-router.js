// auth-router.js
const express = require("express");
const router = express.Router();
const { home, register,login } = require("../controllers/auth-controller");
const {signupSchema} = require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
// const loginSchema= require("../middlewares/validate-middleware");




// Route in the router
router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register);  // Changed from .get() to .post()
router.route("/login").post(login);

module.exports = router;
