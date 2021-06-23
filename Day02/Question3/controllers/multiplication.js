module.exports.multiplicationController = function(req,res){
    let number1 = req.params.number1;
    let number2 = 0;
    if(req.query && req.query.number2){
         number2=parseInt(req.query.number2);
    } 
 
    

    res.json(number1*number2)
}