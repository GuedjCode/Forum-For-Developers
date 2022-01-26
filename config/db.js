const mongoose = require('mongoose');
const config = require('config'); //import model global var.
const db = config.get('mongoURI'); //global var.

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB connected....');
  } catch (err) {
    console.log(err.message);
    //force exit process if fail.
    process.exit(1);
  }
}

module.exports = connectDB;