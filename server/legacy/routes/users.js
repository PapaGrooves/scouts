const express = require("express")

const { createUser, getUsers, getUser, deleteUser, updateUser, loginUser, } = require("../controllers/userController")

const router = express.Router()


// GET all users
router.get("/", getUsers)

// GET single user
router.get("/:id", getUser)

// POST new user
router.post("/signup", createUser)

// DELETE user
router.delete("/:id", deleteUser)

// UPDATE user
router.patch("/:id", updateUser)

//login route
router.post("/login", loginUser)

module.exports = router
