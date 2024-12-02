const express = require("express");
const router = express.Router();

const User = require("../models/User");

const {login, signup} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
// testing protected route for single middlewares
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for Tests",
    });
});

// protected Route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message: "Welcome to the protected route for Students",
    });
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the protected route for Admin",
    });
});

module.exports = router;

