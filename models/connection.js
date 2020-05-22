const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/BakersBeeBarf"

mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongoose successfully at " + connectionString)
  }).catch((error) => {
    console.log('🗑️🗑️🗑️ Failed to connect to mongoose ')
  })

module.exports = mongoose
