// auth-router.js
const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");

// Route in the router
router.route("/").get(home);
router.route("/register").post(register);  // Changed from .get() to .post()

module.exports = router;
