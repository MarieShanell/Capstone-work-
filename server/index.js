require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const morgan = require("morgan")

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
)


mongoose.connect(DB).then(()=> console.log("my database connection was successful"))
const fruitRouter = require("./routes/fruitRoutes")
const app = express();

app.use(morgan("dev"))
app.use(express.json())


app.use("/api/v1/fruits", fruitRouter)

app.listen(4040, () => console.log("Listening on port 4040"));
