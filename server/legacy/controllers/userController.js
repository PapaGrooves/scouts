const User = require("../models/userModel")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
}
// get single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    res.status(200).json(user)
}
// create new user
const createUser = async (req, res) => {
    const { fname, lname, email, password, dob, disclosure, is_admin, availability } = req.body
  
    let emptyFields = [];

    if (!email) {
        emptyFields.push("email")
    }
    if (!fname) {
        emptyFields.push("fname")
    }
    if (!lname) {
        emptyFields.push("lname")
    }
    if (!password) {
        emptyFields.push("password")
    }
    if (!dob) {
        emptyFields.push("dob")
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all fields", emptyFields })
    }

    console.log("endpoint reached")

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({ 
        fname, 
        lname, 
        email, 
        password: hash, 
        dob, 
        disclosure, 
        is_admin, 
        availability 
    })

    // validation
    if (!email || !password) {
        throw Error("All fields must be filled")
    }
    if (!validator.isEmail(email)) {
        throw Error("Enter a valid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Use stronger password")
    }

    const exists = await User.findOne({ email })

    if (exists) {
        throw Error("Email already in use")
    }

    // add doc to db
    try {
        // create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: "Email already in use" })
    }
}
// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(400).json({ error: "User doesn't exist" })
    }

    res.status(200).json(user)
}
// update user
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    const user = await User.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({ error: "User doesn't exist" })
    }

    res.status(200).json(user)
}

// login user
const loginUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!email || !password) {
            throw Error("All fields must be filled")
        }
        if (!user) {
            throw Error("Incorrect email")
        }
        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            throw Error("Incorrect password")
        }


        // if (user) {
        //     res.status(201).json({ isAuthenticated: true })

        // }
        // else {
        //     res.status(404).json({ isAuthenticated: false })
        // }

        // create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser,
}