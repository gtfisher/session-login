const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

console.log('MONGO_URI:', MONGO_URI);

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect('mongodb://localhost:27017/jwt-proj')
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};
