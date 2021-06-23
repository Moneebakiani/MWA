const express=require("express");

const path=require("path");

const app=express();

const router = require("./routes/multiplication")

app.use(express.static(path.join(__dirname,"public")));

app.set("port",5050);

app.use("/api",router)

const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);

});