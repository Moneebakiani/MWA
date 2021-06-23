const express=require("express");
const { multiplicationController } = require("../controllers/multiplication");

const router=express.Router();

router.get("/multiplication/:number1",multiplicationController)


module.exports = router;