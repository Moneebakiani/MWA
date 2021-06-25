
const mongoose=require("mongoose");
const Game=mongoose.model("Game");

module.exports.getAllGames=function(req,res){
  Game.find().exec(function(err,games){
    console.log("Found Games");
    res.status(200).json(games);
  });

}

module.exports.gamesGetOne = function(req, res){
   
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err, doc){
    console.log("Fame found ", doc);
    res.status(200).json(doc);
    });
   }