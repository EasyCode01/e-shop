import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to DB");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log(connection, "Connected to DB");
  } catch (error) {
    console.error("DB connection error:", error);
    throw new Error("Failed to connect to DB");
  }
};
