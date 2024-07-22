import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBUrl = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(`DB connected: ${DBUrl.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
