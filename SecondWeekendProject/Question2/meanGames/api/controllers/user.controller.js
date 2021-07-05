const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = function (req, res) {
    console.log("Register user");
    bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
        const postData = {
            username: req.body.username,
            password: hashPassword,
            name: req.body.name
        }
        User.create(postData, function (err, user) {
            const response = {
                status: 200,
                message: user
            }
            if (err) {
                response.status = 500;
                response.message = err;
            }
            else {
                response.status = 200;
                response.message = user;
            }
            res.status(response.status).json(response.message);
        });
    });

};

module.exports.login = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log('response')
    User.findOne({ username: username }).exec(function (err, user) {
        const response = {
            status: 200,
            message: user
        }
        if (err) {
            response.status = 500;
            response.message = err;
        }
        console.log(user)
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                    res.status(response.status).json(response.message);
                } else {
                    if (result) {
                        const token = jwt.sign({ username: user.username }, "cs572", { expiresIn: 3600 });
                        response.status = 200;
                        response.message = { success: true, token: token };
                        res.status(response.status).json(response.message);
                    }
                    else {
                        response.status = 400;
                        response.message = { "message": "unauthorized" };
                        res.status(response.status).json(response.message);
                    }
                }
            });

        } else {
            response.status = 400;
            response.message = { "message": "Unauthorized" };
            res.status(response.status).json(response.message);
        }


    });
}

module.exports.authenticate = function (req, res, next) {
    var headerExists = req.headers.authorization;
    if (headerExists) {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "cs572", function (err, decoded) {
            if (err) {
                console.log(err);
                res.status(401).json("Unauthorized");
            } else {
                req.user = decoded.username;
                next();
            }
        });
    } else { res.status(403).json("No token provided"); }
}