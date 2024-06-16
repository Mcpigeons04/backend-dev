// auth-router.js
const express = require("express");
const router = express.Router();
const { home, register,login } = require("../controllers/auth-controller");

// Route in the router
router.route("/").get(home);
router.route("/register").post(register);  // Changed from .get() to .post()
router.route("/login").post(login);

module.exports = router;
