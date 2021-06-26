const express = require("express");
const controllerGames = require("../controllers/game.controller");
const multiply = require("../controllers/multiplication");
const controllerPublisher = require("../controllers/publisher.controller");

const router = express.Router();
router.route("/games")
    .get(controllerGames.gamesGetAll)
    .post(controllerGames.gamesAddOne);
    
router.route("/games/:gameId")
    .get(controllerGames.gamesGetOne)
    .put(controllerGames.gamesFullUpdate)
    .patch(controllerGames.gamesPartialUpdate)
    .delete(controllerGames.gamesDeleteOne);

    
module.exports = router ;