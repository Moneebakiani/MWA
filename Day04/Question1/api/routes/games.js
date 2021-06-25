const express = require("express")

const router = express.Router();
// const gameController = require("../controller/gameController")
const controllerGames = require("../controller/gameController");

router.route("/games").get(controllerGames.getAllGames)

    
router.route("/games/:gameId").get(controllerGames.gamesGetOne);

module.exports=router;