import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ path : "./config.env"})

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );
  

  mongoose.connect(DB, {}).then((conn) => {
    console.log("connection start successfull");
  }).catch((error) => {
    console.log("Error");
  });
  
  

  const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log("Server running")
})