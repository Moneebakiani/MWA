const express=require("express");

const path=require("path");

const app=express();





app.set("port",5050);

app.use(express.static(path.join(__dirname,"public")));

// app.get("/file",function(req,res){
//     res.status(200).sendFile(path.join(__dirname,"index.html"));
// });

const server=app.listen(app.get("port"),function(){
    const port=server.address().port;
    console.log("Listening to port "+port);

});