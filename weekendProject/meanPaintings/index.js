const console = require("console");
const express = require("express");
const app = express();
const path = require("path");
require("./api/data/dbConnection")
const router = require("./api/routes/route");

app.set("port", 5050);

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use("/api", router);


const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening at port: ", port);
});