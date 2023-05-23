const mongoose = require("mongoose")
require("dotenv").config()

const mongoSettings = { useNewUrlParser: true, useUnifiedTopology: true }

async function conn() {
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
}

module.exports = conn