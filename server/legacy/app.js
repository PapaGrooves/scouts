const express = require("express");
const collection = require("./mongo");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.get("/login",cors(),(req,res) => {

})
app.post("/login",async(req,res) => {
    const{email, password} = req.body;

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("email exists")
        }
        else{
            res.json("email does not exist")
        }
    }
    catch(e) {
        res.json("does not exist")
    }
})


app.post("/signup",async(req,res) => {
    const{email,fname, lname, dob, password, rpassword} = req.body;

    const data={
        email:email,
        fname:fname,
        lname:lname,
        dob:dob,
        password:password,
        rpassword:rpassword
    }
    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("email already exists")
        }
        else{
            res.json("email does not exist");
            await collection.insertMany({data});
        }
    }
    catch(e) {
        res.json("does not exist")
    }
})

app.listen(8000,() => {
    console.log("port connection")
})