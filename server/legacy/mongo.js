const mongoose = require("mongoose");
// const conn = "mongodb+srv://PapaGrooves:PenguinSocks420@hospitalportalcluster.zznwmby.mongodb.net/Scouts?retryWrites=true&w=majority";

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'Scouts',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log("connected to Scouts database")
)

// .then(() =>{
//     console.log("mongodb connected");
// })

// .catch(() => {
//     console.log("connection failed");
// })

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection",newSchema);
 module.exports=collection;