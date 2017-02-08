$(document).ready(function(){
  console.log("test");
  for(var i = 1; i < 152; i++){
    var imageString = "<img src=\"http://pokeapi.co/media/img/" + i + ".png\">";
    $(".main_container").append(imageString);
    console.log(imageString);
  }
});
