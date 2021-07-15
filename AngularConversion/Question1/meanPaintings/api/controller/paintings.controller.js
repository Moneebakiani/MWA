const mongoose = require("mongoose");
const Painting = mongoose.model("Painting");

module.exports.getAllPaintings = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "message": "QueryString offset and count sgould be numbers" });
        return;
    }
    let search = {};

    const searchBy = req.query.title;

    if (searchBy) {
        search = {
            name: searchBy,
        };
    }

    Painting.find(search).skip(offset).limit(count).exec(function (err, paintings) {
        if (err) {
            console.log("Error checking paintings");
            res.status(500).json(err);
        } else {
            console.log("Paintings Found");
            res.status(200).json(paintings);
        }

    });

}

module.exports.addPainting = function (req, res) {

    let newPainting = {
        name: req.body.name,
        createdYear: parseInt(req.body.createdYear),
        artist: req.body.artist,
        reviews: []
    };
    Painting.create(newPainting, function (err, painting) {
        const response = {
            status: 200,
            message: painting
        }
        if (err) {
            response.status = 400;
            response.message = err;
        } else {
            response.status = 200;
            response.message = painting;
        }
        res.status(response.status).json(response.message);

    });
}

module.exports.updateFullPainting = function (req, res) {
    const response = {
        status: 200,
        message: res
    }
    console.log("Update full painting record");
    const paintingId = req.params.paintingId;
    Painting.findById(paintingId).exec(function (err, painting) {
        if (err) {
            console.log("Error finding painting");
            response.status = 500;
            response.message = err;
        }
        else if (!painting) {
            console.log("Painting not found");
            response.status = 400;
            response.message = { "message": "Painting ID not found" };
        }
        if (painting) {

            painting.name = req.body.name;
            painting.createdYear = req.body.createdYear;
            painting.artist = req.body.artist;
            painting.reviews = [];

        }
        painting.save(function (err, updatedPainting) {
            if (err) {
                console.log("Painting not found");
                response.status = 404;
                response.message = { "message": "Painting not found" };
            }
            else {
                response.status = 200;
                response.message = updatedPainting;
            }
            res.status(response.status).json(response.message);
        });
    });
}

module.exports.getOnePainting = function (req, res) {
    const response = {
        status: 200,
        message: res
    }
    console.log("Getting one painting");
    const paintingId = req.params.paintingId;
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
            response.status = 200;
            response.message = painting;
        }
        res.status(response.status).json(response.message);
    });
}

module.exports.paintingPartialUpdate = function (req, res) {
    const response = {
        status: 200,
        message: res

    }
    console.log("Painting partial update");
    const paintingId = req.params.paintingId;

    Painting.findById(paintingId).exec(function (err, painting) {
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
            if (req.body.name) {
                painting.name = req.body.name;
            }
            if (req.body.createdYear) {
                painting.createdYear = parseInt(req.body.createdYear);
            }
            if (req.body.artist) {
                painting.artist = req.body.artist;
            }
            painting.reviews = [];

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

module.exports.deletePainting = function (req, res) {
    const response = {
        status: 200,
        message: res
    }
    console.log("Delete Painting");
    const paintingId = req.params.paintingId;
    Painting.findByIdAndRemove(paintingId).exec(function (err, painting) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!painting) {
            response.status = 404;
            response.message = updatedPainting
        }
        else {
            console.log("Game Deleted");
            response.status = 200;
            response.message = painting;
        }
        res.status(response.status).json(response.message);
    });
}