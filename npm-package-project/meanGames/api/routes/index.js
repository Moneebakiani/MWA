const express = require("express");
const controllerGames = require("../controllers/game.controller");
const controllerPublisher = require("../controllers/publisher.controller");
const controllerReview = require("../controllers/reviews.controller");
const ControllerUser = require("../controllers/user.controller");
const { imageUpload } = require("../utils/imageUpload");
const router = express.Router();

router.route("/games")
    .get(controllerGames.gamesGetAll)
    .post(ControllerUser.authenticate, imageUpload.single('image'), controllerGames.gamesAddOne);

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

router.route("/users/register")
    .post(ControllerUser.register);

router.route("/users/login")
    .post(ControllerUser.login);

module.exports = router;