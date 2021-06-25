const express=require("express");

const path=require("path");

const app=express();

require("./api/data/db");

const router=require("./api/routes");


app.set("port",5050);


app.get(function(req,res,next){
    console.log(req.method,req.url)
    ;
    next()
});

app.use(express.static(path.join(__dirname,"public")));

app.use("/api",router);

// app.get("/file",function(req,res){
//     res.status(200).sendFile(path.join(__dirname,"index.html"));
// });

const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);

});