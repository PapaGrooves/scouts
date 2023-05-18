require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/users")
const mongoSettings = { useNewUrlParser: true, useUnifiedTopology: true }

// express app
const app = express();

// middleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH"],
  credentials: true
}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/users", userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI, mongoSettings)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })