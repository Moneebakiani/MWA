

const mongoose = require("mongoose");
const Game = mongoose.model("Game");

const userError = 400;
const serverError = 500;
const successError = 200;
const notFoundError = 404;



const addReview=function(req,res,game){
    const newReview = {
        name: req.body.name,
        review: req.body.review
        }
        game.reviews.push(newReview);
        
        //game.publisher.location.coordinates = [parseFloat(req.body.lng), parseFloat(req.body.lat)];
        //console.log("Game to save ", req.body.name);
        game.save(function(err, updateGame){
        const response = {
        status: successError,
        message: updateGame
        }
        if (err){
        response.status = serverError;
        response.message = err;
        } else {
        response.status = successError;
        response.message = updateGame;
        }
        res.status(response.status).json(response.message);
        
        })
}

// module.exports.publisherGetOne = function(req, res){
//     console.log("publisher received");
//     const gameId = req.params.gameId;
//     Game.findById(gameId).select("publisher").exec(function(err,publisher){
//         res.status(200).json(publisher);
//     })
// }


// module.exports.publisherFullUpdate = function(req, res){
//     console.log("publisher update received");
//     const gameId = req.params.gameId;
//     Game.findById(gameId).exec(function(err,game){
//         if(err){
//             res.status(500).message(err);
//         }
//         else if(!game){
//             res.status(404).json({"messahe":"Game Id not found"});
//         }
//         if(game){
//             game.publisher.name=req.body.name;
//             game.publisher.country=req.body.country;
//             game.save(function(err,updatedGame){
//                 if(err){
//                  res.status(500).json(err);
//                 }else{
//                     res.status(202).json(updatedGame.publisher);
//                 } 
                
//             });

           
//         }
    
//     });
// }

module.exports.reviewAddOne=function(req,res){
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
       
            addReview(req,res,game);
           
        }else{
            res.status(response.status).json(response.message);
        }
        

    });
    
}

// module.exports.publisherDelete = function(req, res){
//     console.log("publisher Delete received");
//     const gameId = req.params.gameId;
//     Game.findById(gameId).exec(function(err,game){
//         if(err){
//             res.status(500).message(err);
//         }
//         else if(!game){
//             res.status(404).json({"message":"Game Id not found"});
//         }
//         if(game){
//             game.publisher.remove()
//             game.save(function(err,updatedGame){
//                 if(err){
//                  res.status(500).json(err);
//                 }else{
//                     res.status(202).json(updatedGame.publisher);
//                 } 
                
//             });

           
//         }
    
//     });
// }