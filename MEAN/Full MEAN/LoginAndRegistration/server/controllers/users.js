var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = (function(){
  return {
    create : function(req, res){
      console.log("Create route hit.  Body:", req.body);
      var newUser = new User({ firstName : req.body.firstName, lastName : req.body.lastName,
                              email : req.body.email, password : req.body.password, birthday : req.body.birthday });
      newUser.save(function(err){
        var result = { result : newUser };
        if(err){
          result.errors = err;
          result.success = false;
        }
        else{
          result.success = true;
        }
        console.log(result);
        res.json(result);
      });
    },
    login : function(req, res){
      console.log("Login route hit. Body:", req.body);
      User.find({ email : req.body.email }, function(err, data){
        var result = {};
        if(err === null && data.length === 1 && req.body.password === data[0].password){
          result.result = data;
          result.success = true;
        }else{
          result.errors = err;
          result.success = false;
        }
        res.json(result);
      });
    },
    show : function(req, res){
      console.log("Show route hit.  Params:", req.params);
      User.findById(req.params.id, function(err, data){
        var result = { result : data };
        if(err){
          result.errors = err;
          result.success = false;
        }
        else{
          result.success = true;
        }
        res.json(result);
      });
    }
  };
})();
