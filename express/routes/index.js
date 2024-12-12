const router = require("express").Router();
const authController = require("../services/authService");

// Register a new User
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

module.exports = router;
