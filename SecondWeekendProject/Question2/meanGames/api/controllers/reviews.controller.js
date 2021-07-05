const mongoose=require("mongoose");
const Game = mongoose.model("Game");


const addReview=function(req,res,game){
  
   game.reviews=game.reviews? game.reviews:[];

    game.reviews.name=req.body.name;
    game.reviews.review=req.body.review;

    const review={
        name:req.body.name,
        review:req.body.review
    }
    game.reviews.push(review);    

    game.save(function(err,updatedGame){
   
        const response={
            status:200,
            message:updatedGame
        }
        if(err){
            console.log("Error saving Review ", err);
            response.status=500;
            response.message=err;
        }
        res.status(response.status).json(response.message);

    });
}



module.exports.reviewsAddOne=function(req,res){
    console.log("Post new Reviews");
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

        }else if(!game){
            console.log("Error creating game ");
            response.status=404;
            response.message={"message":"Game Id not found"};
        }

        if(game){
       
            addReview(req,res,game);
           
        }else{
            res.status(response.status).json(response.message);
        }
        

    });
    
}