const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

// const isStrongPassword = require("validator/lib/isStrongPassword")

const userSchema = new Schema({
    // fname: {
    //     type: String,
    //     required: true
    // },
    // lname: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // dob: {
    //     type: Date,
    //     // required: true
    // },
    // is_admin: {
    //     type: Number,
    //     default: 0
    // },
    // disclosure: {
    //     type: String,
    //     default: "Pending"
    // },
    // availability: {
    //     type: String
    // }
})

// STUB static signup method
userSchema.statics.signup = async function (email, password) {

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


    const exists = await this.findOne({ email })

    if (exists) {
        throw Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

// STUB static login method
userSchema.statics.login = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email })
    const match = await bcrypt.compare(password, user.password)

    if (!user || !match) {
        throw Error("Incorrect email or password")
    }


    // if (!match) {
    //     throw Error("Incorrect password")
    // }

    return user

}

module.exports = mongoose.model("User", userSchema)