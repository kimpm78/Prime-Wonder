import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL ?? 'default-url');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Failed to connect to MongoDB:', err);
  }
};

export default connectMongoDB;
