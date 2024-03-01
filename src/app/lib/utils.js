import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO, {});
    connection.isConnected = db.connections[0].readyState;
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
