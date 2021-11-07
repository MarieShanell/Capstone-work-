const Fruit = require("../models/fruitModel")

exports.getAllFruits = async(request,response)=>{
  try{
    const fruit = await Fruit.find();

    response.status(200).json({
      results: fruit.length,
      data:{
        fruit
      }
    })
  } catch(error){
    response.status(404).json({
      status: "failed",
      message: error
    })
  }
}

exports.createFruit = async(request,response)=>{
  try{
    const fruit = await Fruit.create(request.body);

    response.status(201).json({
      status: "successful",
      data:{
        fruit
      }
    })
  } catch(error){
    response.status(404).json({
      status: "failed",
      message: error
    })
  }
}
