const express = require("express");
const controllerGames = require("../controllers/game.controller");
const controllerPublisher = require("../controllers/publisher.controller");
const controllerReview=require("../controllers/reviews.controller");

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
    .post(controllerPublisher.publisherAddOne);

router.route("/games/:gameId/reviews").post(controllerReview.reviewsAddOne);


module.exports = router;