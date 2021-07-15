
const express = require("express");
const app = express();
const path = require("path");
require("./api/data/dbConnection")
const router = require("./api/routes/route");
require("dotenv").config();

console.log("The envoinment port iss", process.env.PORT);

app.set("port", process.env.PORT);

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/api", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", "false");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PATCH,DELETE,POST,PUT");
    next();
})

app.use("/api", router);
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.use(express.static(path.join(__dirname, "public")));


const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening at port: ", port);
});

