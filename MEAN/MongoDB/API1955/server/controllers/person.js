var mongoose = require("mongoose");
var Person = mongoose.model("Person");

module.exports = {
  all : function(req, res){
    Person.find({}, function(err, data){
      if(err)
        console.log(err);
      res.json(data);
    });
  },
  individual : function(req, res){
    Person.findOne({name : req.params.name}, function(err, data){
      if(err)
        console.log(err);
      res.json(data);
    })
  },
  create : function(req, res){
    var newPerson = new Person();
    newPerson.name = req.params.name;
    newPerson.save();
    res.json(newPerson);
  },
  destroy : function(req, res){
    Person.remove({name : req.params.name}, function(err){
      if(err)
        console.log(err);
      res.redirect('/');
    })
  }
};
