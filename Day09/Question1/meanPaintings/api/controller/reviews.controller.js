const mongoose = require("mongoose");
const Painting = mongoose.model("Painting");

const addReview = function (req, res, painting) {
    painting.reviews = painting.reviews ? painting.reviews : [];

    painting.reviews.name = req.body.name;
    painting.reviews.review = req.body.review;
    painting.reviews.createdOn = req.body.createdOn;


    const review = {
        name: req.body.name,
        review: req.body.review,
        createdOn: req.body.createdOn
    }
    painting.reviews.push(review);

    painting.save(function (err, updatedPainting) {
        const response = {
            status: 200,
            message: updatedPainting
        }
        if (err) {
            console.log("Error saving Review ", err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);


    });
}



module.exports.reviewAddOne = function (req, res) {
    const paintingId = req.params.paintingId;
    Painting.findById(paintingId).exec(function (err, painting) {
        const response = {
            status: 200,
            message: painting
        }
        if (err) {
            response.status = 500;
            response.err = err;
        }
        else if (!painting) {
            response.status = 404;
            response.message = { "message": "Pianting ID not found" };
        }
        if (painting) {
            addReview(req, res, painting);
        }
        else {
            res.status(response.status).json(response.message);
        }
    });
}

module.exports.getAllReviews = function (req, res) {

    const paintingId = req.params.paintingId;
    Painting.findById(paintingId).select("reviews").exec(function (err, reviews) {
        const response = {
            status: 200,
            message: reviews
        }
        if (err) {
            response.status = 500;
            response.err = err;
        }

        res.status(response.status).json(response.message);
    });
}

module.exports.updateFullReview = function (req, res) {

    const paintingId = req.params.paintingId;
    const reviewId = req.params.reviewId;
    Painting.findById(paintingId).select("reviews").exec(function (err, painting) {
        const response = {
            status: 200,
            message: painting
        }
        if (err) {

            response.status = 500;
            response.message = err;
        }
        else if (!painting) {
            response.status = 404;
            response.message = { "message": "Painting Id not found" }

        }
        if (painting) {
            const review = painting.reviews.id(reviewId);
            review.name = req.body.name;
            review.review = req.body.review;
            review.createdOn = req.body.createdOn;

            painting.save(function (err, updatedpainting) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                } else {
                    response.status = 404;
                    response.message = updatedpainting;
                }

            });
            res.status(response.status).json(response.message);

        }

    });
}

module.exports.getOneReview = function (req, res) {
    const response = {
        status: 200,
        message: res
    }

    const paintingId = req.params.paintingId;
    const reviewId = req.params.reviewId;
    Painting.findById(paintingId).exec(function (err, painting) {
        if (err) {
            console.log("Error finding painting", err);
            response.status = 500;
            response.message = err
        } else if (!painting) {
            console.log("Painting ID not found");
            response.status = 404;
            response.message = { "message": "Painting ID not found" };
        } else {
            console.log("Painting Found");
            const review = painting.reviews.id(reviewId);
            response.status = 200;
            response.message = review;
        }
        res.status(response.status).json(response.message);
    });
}

module.exports.reviewPartialUpdate = function (req, res) {
    console.log("partial update");
    const response = {
        status: 200,
        message: res

    }

    const paintingId = req.params.paintingId;
    const reviewId = req.params.reviewId;

    Painting.findById(paintingId).select("reviews").exec(function (err, painting) {
        if (err) {
            console.log("Error finding painting", err);
            response.status = 500;
            response.message = err
        } else if (!painting) {
            console.log("Painting ID not found");
            response.status = 404;
            response.message = { "message": "Painting ID not found" };
        }
        if (painting) {

            const review = painting.reviews.id(reviewId);

            if (req.body.name) {
                review.name = req.body.name;
            }
            if (req.body.review) {
                review.review = req.body.review;
            }
            if (req.body.createdOn) {
                review.createdOn = req.body.createdOn;
            }


            painting.save(function (err, updatedPainting) {
                if (err) {
                    console.log("Error saving partial update");
                    response.status = 500;
                    response.message = err;
                } else {
                    response.status = 200;
                    response.message = updatedPainting;
                }
                res.status(response.status).json(response.message);
            });

        }

    });

}

module.exports.deleteReview = function (req, res) {
    const response = {
        status: 200,
        message: res
    }

    const { paintingId, reviewId } = req.params;

    Painting.findById(paintingId).exec(function (err, painting) {

        if (err) {
            response.status = 500;
            response.message = err;
        }
        else if (!painting) {
            response.status = 404;
            response.message = { "message": "Painting Id not found" };
        }
        if (painting) {
            console.log(`paiting.reviews: ${painting.reviews}`);
            const review = painting.reviews.id(reviewId);
            console.log("reviewwww", review);
            review.remove();
            painting.save(function (err, updatedpainting) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                } else {
                    response.status = 202;
                    response.message = updatedpainting.reviews;
                    console.log(`INNER response: ${JSON.stringify(response)}`);
                }
                res.status(response.status).json(response.message);
            });
        }

        else {
            res.status(response.status).json(response.message);
        }
    });

}

