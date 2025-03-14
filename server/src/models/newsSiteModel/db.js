const mongoose = require("mongoose");

async function dbConnection() {
  await mongoose.connect(process.env.DB_URI, {});
}

module.exports = { dbConnection };
