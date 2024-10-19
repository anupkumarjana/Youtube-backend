import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // this is for database connection
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected!! DB HOST ${connectionInstace.connection.host}` // this is a professional technique to see in what database we're connected to
    );
  } catch (error) {
    console.log("MongoDb connection error: ", error);
    // process
  }
};

export default connectDB;
