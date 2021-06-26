const express = require("express");
const app = express();
const path = require("path");
require("./api/data/db");
const route = require("./api/routes");



app.set("port",5050);

app.use(function(req, res, next){
    console.log(req.method, res.url)
    next();
})
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

app.use("/api", route);

app.use(express.static(path.join(__dirname, "public")));

const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);

});