$(document).ready(function(){
  $("img").click(function(){
    $(this).hide();
  });
  $("input").click(function(){
    $("img").show();
  });
});
