var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
  index : function(req, res){
    let data = Animal.find({}, function(err, animals){
      if(err)
        console.log(err);
      res.render("index", {"animals" : animals });
    });
  },

  displayCreate : function(req, res){
    res.render("new");
  },

  create : function(req, res){
      let newAnimal = new Animal();
      newAnimal.name = req.body.name;
      newAnimal.color = req.body.color;
      newAnimal.save(function(err){
        console.log(err);
      });
      res.redirect('/');
  },

  displayEdit : function(req, res){
    Animal.findById(req.params.id, function(err, animal){
      if(err)
        console.log(err);
      res.render("animal", animal);
    });
  },

  edit : function(req, res){
    Animal.findById(req.params.id, function(err, animal){
      animal.name = req.body.name;
      animal.color = req.body.color;
      animal.save();
      res.redirect(`/animals/${req.params.id}`);
    });
  },

  destroy : function(req, res){
    Animal.remove({ _id : req.body.id }, function(err){
      console.log(err);
      res.redirect('/');
    });
  }
}
