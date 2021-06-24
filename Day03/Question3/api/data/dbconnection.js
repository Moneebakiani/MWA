const MongoClient=require("mongodb").MongoClient;
const dbName="meanGames";
const url="mongodb://localhost:27017/"+dbName;
let _connection=null;
const open=function(){
    MongoClient.connect(url,{useUnifiedTopology:true},function(err,client){
       if(err){
           console.log("DB connection failed");
           return;
       }
       _connection=client.db(dbName);
       console.log("DB connection open:",_connection);
    });

}
const get=function(){
    return _connection;
}
module.exports={
    open:open,
    get:get
}