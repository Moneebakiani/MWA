const express = require("express");
const router = express.Router();

const controllerPainting = require("../controller/paintings.controller");
const controllerReview = require("../controller/reviews.controller");
const ControllerUser = require("../controller/user.controller");

router.route("/paintings")
    .get(controllerPainting.getAllPaintings)
    .post(controllerPainting.addPainting);

router.route("/paintings/:paintingId")
    .get(controllerPainting.getOnePainting)
    .put(controllerPainting.updateFullPainting)
    .patch(controllerPainting.paintingPartialUpdate)
    .delete(controllerPainting.deletePainting);

router.route("/paintings/:paintingId/reviews")
    .get(controllerReview.getAllReviews)
    .post(controllerReview.reviewAddOne);

router.route("/paintings/:paintingId/reviews/:reviewId")
    .get(controllerReview.getOneReview)
    .put(controllerReview.updateFullReview)
    .patch(controllerReview.reviewPartialUpdate)
    .delete(controllerReview.deleteReview);

router.route("/users/register")
    .post(ControllerUser.register);

router.route("/users/login")
    .post(ControllerUser.login);


module.exports = router;