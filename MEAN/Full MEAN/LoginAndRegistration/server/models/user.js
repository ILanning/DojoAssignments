var mongoose = require("mongoose");
//var bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
  firstName : { type : String, required : true },
  lastName : { type : String, required : true },
  email : { type : String, required : true, unique : true },
  password : { type : String, required : true },
  birthday : { type : Date, required : true }
}, { timestamps : true });

// userSchema.pre("save", function(done){
  //bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  //bcrypt.compareSync(password, this.password);
  //Encrypt password before saving it if the password has changed
//   done();
// });

mongoose.model("User", userSchema);
