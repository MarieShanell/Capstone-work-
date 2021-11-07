const express = require("express")
const fruitController = require("../controllers/fruitControllers")
const router = express.Router()

router.route("/").get(fruitController.getAllFruits).post(fruitController.createFruit)

module.exports = router
