var mongoose = require("mongoose");
var Friend = mongoose.models("Friend");

module.exports = {
  index: function(req,res){
    //your code here
    Friend.find({}, function(err, result){
      if(err)
        console.log(err);
      res.json(result);
    });
  },
  show: function(req,res){
    //your code here
    Friend.findById(req.body.id, function(err, result){
      if(err)
        console.log(err);
      res.json(result);
    })
  },
  create: function(req,res){
    //your code here
    var friend = new Friend({ firstName : req.body.firstName, lastName : req.body.lastName, birthday : req.body. birthday });
    friend.save();
  },
  update: function(req,res){
    //your code here
    res.json({placeholder:'update'});
  },
  delete: function(req,res){
    Friend.remove({ id : req.body.id}, function(err){
      if(err)
        console.log(err);
    })
  }
}
