$(document).ready(function(){
  $("img").click(function(){
    console.log("test");
    var temp = $(this).attr("src");
    $(this).attr("src", $(this).attr("second-src"));
    $(this).attr("second-src", temp);
  });
});
