

const mongoose = require("mongoose");
const Game = mongoose.model("Game");



const addPublisher=function(req,res,game){
  

    // if(!game.publisher){
    //     game.publisher={};
    // }
   game.publisher=game.publisher? game.publisher:{};

    game.publisher.name=req.body.name;
    game.publisher.country=req.body.country;
    

    game.save(function(err,updatedGame){
   
        const response={
            status:200,
            message:updatedGame
        }
        if(err){
            console.log("Error saving publisher ", err);
            response.status=500;
            response.message=err;
        }
        res.status(response.status).json(response.message);

    });
}

module.exports.publisherGetOne = function(req, res){
    console.log("publisher received");
    const gameId = req.params.gameId;
    Game.findById(gameId).select("publisher").exec(function(err,publisher){
        res.status(200).json(publisher);
    })
}


module.exports.publisherFullUpdate = function(req, res){
    console.log("publisher update received");
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        if(err){
            res.status(500).message(err);
        }
        else if(!game){
            res.status(404).json({"messahe":"Game Id not found"});
        }
        if(game){
            game.publisher.name=req.body.name;
            game.publisher.country=req.body.country;
            game.save(function(err,updatedGame){
                if(err){
                 res.status(500).json(err);
                }else{
                    res.status(202).json(updatedGame.publisher);
                } 
                
            });

           
        }
    
    });
}

module.exports.publisherAddOne=function(req,res){
    console.log("Post new Publisher");
    console.log("req.body");
    const gameId=req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        const response={
            status:200,
            message:game
        }
        if(err){
            console.log("Error creating game ");
            response.status=500;
            response.message=err;

            //res.status(500).json(err);

        }else if(!game){
            console.log("Error creating game ");
            response.status=404;
            response.message={"message":"Game Id not found"};
        }

        if(game){
       
            addPublisher(req,res,game);
           
        }else{
            res.status(response.status).json(response.message);
        }
        

    });
    
}

module.exports.publisherDelete = function(req, res){
    console.log("publisher Delete received");
    const gameId = req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        if(err){
            res.status(500).message(err);
        }
        else if(!game){
            res.status(404).json({"message":"Game Id not found"});
        }
        if(game){
            game.publisher.remove()
            game.save(function(err,updatedGame){
                if(err){
                 res.status(500).json(err);
                }else{
                    res.status(202).json(updatedGame.publisher);
                } 
                
            });

           
        }
    
    });
}