
const User = require("../models/userModel")

const createUser= async(req, res)=>{

    const { fname, lname, email, password, dob} = req.body
console.log(req.body)

    try {
        res.status(200).json({test:req.body})
    } catch (error) {
        res.status(400).json({ error: "Email already in use" })
    }
}

// module.exports = createUser