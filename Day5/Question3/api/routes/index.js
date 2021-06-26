const express = require("express");
const controllerGames = require("../controllers/game.controller");
const controllerPublisher = require("../controllers/publisher.controller");
const controllerReview=require("../controllers/reviewController");

const router = express.Router();
router.route("/games")
    .get(controllerGames.gamesGetAll)
    .post(controllerGames.gamesAddOne);
    
router.route("/games/:gameId")
    .get(controllerGames.gamesGetOne)
    .put(controllerGames.gamesFullUpdate)
    .patch(controllerGames.gamesPartialUpdate)
    .delete(controllerGames.gamesDeleteOne);

router.route("/games/:gameId/publishers")
.get(controllerPublisher.publisherGetOne)
.put(controllerPublisher.publisherFullUpdate)
.delete(controllerPublisher.publisherDelete)

router.route("/games/:gameId/publisher")
.post(controllerPublisher.publisherAddOne);

router.route("/games/:gameId/review")
.post(controllerReview.reviewAddOne);


module.exports = router ;