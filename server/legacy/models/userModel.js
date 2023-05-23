const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        // default: "",
    },
    lname: {
        type: String,
        required: true,
        // default: "",
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        // required: true
    },
    is_admin: {
        type: Number,
        default: 0
    },
    disclosure: {
        type: String,
        default: "Pending"
    },
    availability: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("User", userSchema)

// STUB static login method
//userSchema.statics.login = async function (email, password) {

    // FIXME currently POSTMAN doesn't see the fields being filled and throws this error.
    // No visable bugs at this moment
    // Code taken form Net Ninja tutorial, possibly something to do with the signup function
    // That was taken from another tutorial of his

    // validation
    // if (!email || !password) {
    //     throw Error("All fields must be filled")
    // }

    // const user = await this.findOne({ email })
    // const match = await bcrypt.compare(password, user.password)

    // if (!user || !match) {
    //     throw Error("Incorrect email or password")
    // }

    // if (!match) {
    //     throw Error("Incorrect password")
    // }

    // return user

//}

