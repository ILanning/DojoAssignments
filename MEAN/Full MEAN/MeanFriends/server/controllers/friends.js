var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, result){
      if(err)
        res.json({ success : false, errors : err });
      else
        res.json({ success : true, "result" : result });
    });
  },
  show: function(req,res){
    Friend.findById(req.params.id, function(err, result){
      if(err)
        res.json({ success : false, errors : err });
      else
        res.json({ success : true, "result" : result });
    })
  },
  create: function(req,res){
    var friend = new Friend({ firstName : req.body.firstName, lastName : req.body.lastName, birthday : req.body.birthday });
    friend.save(function(err){
      if(err)
        res.json({ success : false, errors : err });
      else
        res.json({ success : true });
    });
  },
  update: function(req,res){
    console.log(req);
    Friend.findById(req.params.id, function(err, friend){
      if(err)
        res.json({ success : false, errors : err });
      friend.firstName = req.body.firstName;
      friend.lastName = req.body.lastName;
      friend.birthday = req.body.birthday;
      friend.save(function(err){
        if(err)
          res.json({ success : false, errors : err });
        else
          res.json({ success : true });
      });
    });
  },
  delete: function(req,res){
    Friend.remove({ id : req.params.id}, function(err){
      if(err)
        res.json({ success : false, errors : err });
      else
        res.json({ success : true });
    })
  }
}
