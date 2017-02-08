$(document).ready(function(){
  for(var i = 1; i < 152; i++){
    var imageString = "<img src=\"http://pokeapi.co/media/img/" + i + ".png\" id=\"" + i + "\">";
    $(".images_container").append(imageString);
  }
  $(".images_container img").click(function(){
    var pkmnID = $(this).attr("id");
    $.get("http://pokeapi.co/api/v1/pokemon/" + pkmnID + "/", function(data){
      $(".dex_container").show();
      $(".dex_container h1").text(data.name);
      $(".dex_container img").attr("src", "http://pokeapi.co/media/img/" + pkmnID + ".png");
      $(".dex_container ul").html("");
      for(var i = 0; i < data.types.length; i++){
        $(".dex_container ul").append("<li>" + data.types[i].name + "</li>");
      }
      $(".dex_container #height").text(data.height);
      $(".dex_container #weight").text(data.weight);
    }, "json");
  });
});
