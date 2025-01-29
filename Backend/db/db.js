const mongoose =require('mongoose');



const connectDB = async () => {
    try {
      // Connect to MongoDB
      await mongoose.connect(process.env.mongoURL);
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); // Exit the process with a failure code
    }
  };
  
  
  module.exports = connectDB;
  