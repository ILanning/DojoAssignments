var mongoose = require("mongoose");
//var bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
  firstName : { type : String, required : [true, "You need to include a first name!"] },
  lastName : { type : String, required : true, match : [/b/, "Last name must have a b for some reason."] },
  email : { type : String, required : true, unique : true, match : [/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, "Not a valid email!"] },
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
