mongoose = require("mongoose");

User = mongoose.model("User");

module.exports = (function(){
  return {
    login : function(req, res){
      console.log("Login route hit. Body:", req.body);
      User.find({ username : req.body.username }, function(err, data){
        var result = { errors : formatErrors(err) }
        if(data.length < 1){
          var newUser = new User({username : req.body.username})
          newUser.save(function(err){
            result.errors = formatErrors(err, result.errors);
            result.success = result.errors ? false : true;
            result.result = newUser;
            console.log(result);
            res.json(result);
          });
        }else{
          result.success = result.errors ? false : true;
          result.result = data;
          console.log(result);
          res.json(result);
        }
      });
    }
  }
})()

function formatErrors(err, prevErr){
  if(err){
    if(prevErr == null){
      prevErr = [];
    }
    for(var key in err.errors){
      prevErr.push(err.errors[key].message);
    }
    return prevErr;
  }
  return err;
}
