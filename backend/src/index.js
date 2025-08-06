import express from "express";
import  dotenv from "dotenv";
import connectDB from "./database/dbConnection.js";

const app = express();
dotenv.config({path:"./.env"})

app.listen(process.env.PORT, () => {
    connectDB();
  console.log("server is listening on port number ", process.env.PORT);
});
