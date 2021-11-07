//requiring mongoose from mongoose module
const mongoose = require("mongoose")

//schema is a template or structure of how you want to store data in database
const nutritionSchema = new mongoose.Schema({
  name:{
    type: String,
    unique: true
  },
  size: String,
  color: String,
})

//creating fruit out of this model
const Fruit = mongoose.model("Fruit",nutritionSchema)

//exporting our schema to be used into other files
module.exports = Fruit

