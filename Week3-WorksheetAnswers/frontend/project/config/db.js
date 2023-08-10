const mongoose = require('mongoose');
const config = require('./default.json');
const mongoURI = config.mongoURI;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });
  
    
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;