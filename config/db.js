const mongoose = require("mongoose");
const color=require("colors");

const db = () => {
  try {
    mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED".bgWhite.red);
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
