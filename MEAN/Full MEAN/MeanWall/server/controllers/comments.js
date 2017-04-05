var mongoose = require("mongoose");
var User = mongoose.model("User");
var Post = mongoose.model("Post");

module.exports = {
  create : function(req, res){
    var newComment = new Comment({ _user : req.body.userID, _post : req.body.postID, text : req.body.text });
    User.findById(req.body.userID, function(userErr, userData){
      Post.findById(req.body.postID, function(postErr, postData){
        newComment.save(function(err){
          result = { result : newComment, errors : formatErrors(err, formatErrors(postErr, formatErrors(userErr)))};
          if(!result.errors){
            result.success = true;
            userData.comments.push(newComment._id);
            userData.save();
            postData.comments.push(newComment._id);
            postData.save();
          }else{
            result.success = false;
          }
          res.json(result);
        });
      });
    });
  }
};

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
