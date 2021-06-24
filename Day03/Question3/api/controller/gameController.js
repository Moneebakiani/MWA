const db=require("../data/dbconnection");

module.exports.getAllGames=function(req,res){
    const collection=db.get().collection("games");
    let count=4;
    if(req.query && req.query.count){
        count=parseInt(req.query.count);
        if(count>8)
        count = 8;
    }
    collection.find().limit(count).toArray(function(err,docs){
        res.status(200).json(docs);
    })

}