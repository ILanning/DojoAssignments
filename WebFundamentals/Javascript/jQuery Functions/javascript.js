$(document).ready(function(){
  $(".hideShowEx .solidBox").click(function(){
    if(this.style.display === "none"){
      $(this).show();
    }
    else{
      $(this).hide(0, function(){
        var current = this;
        setTimeout(function () {
          $(current).show();
        }, 3000);
      });
    }
  });
  $(".hideShowEx input").click(function(){
    $(".hideShowEx .solidBox").toggle();
  });
  $(".slideEx .upper .solidBox").hover(function(){
    $(this).slideUp(400, function(){$(this).slideDown()} );
  });
  $(".slideEx input").click(function(){
    $(".slideEx .upper").slideToggle();
  });
  $(".fadeEx .solidBox").click(function(){
    if(this.style.display === "none"){
      $(this).show();
    }
    else{
      $(this).fadeOut(400, function(){
        var current = this;
        setTimeout(function () {
          $(current).fadeIn();
        }, 3000);
      });
    }
  });
  $(".addClassEx .solidBox").click(function(){

    $(this).addClass("red");
  });
  $(".addClassEx input").click(function(){
    $(".addClassEx .solidBox").attr("class", "solidBox large");
  });
  $(".beforeAfterAppendEx .solidBox").click(function(){
    var header = $(".beforeAfterAppendEx h2");
    header.before("<p>Before Text</p>");
    header.append("/Append");
    header.after("<p>After Text</p>");
  });
  $(".beforeAfterAppendEx input").click(function(){
    console.log($(".beforeAfterAppendEx #beforeAfterH2Container").html());
    $(".beforeAfterAppendEx #beforeAfterH2Container").html("<h2>Test Before/After</h2>");
      console.log($(".beforeAfterAppendEx #beforeAfterH2Container").html());
  });
  $(".valTextEx input").click(function(){
    $(".valTextEx p").text($(".valTextEx textarea").val());
  });
  $(".dataEx input:button").click(function(){
    var inputs = $(".dataEx form input");
    var characterData = $("#characterData")[0];
    if(inputs[0].value !== ""){
      jQuery.data(characterData, "name", inputs[0].value);
      $("#name span").text(jQuery.data(characterData, "name"));
      console.log($(inputs[0]).val());
    }
    if(inputs[1].value !== ""){
      jQuery.data(characterData, "class", inputs[1].value);
      $("#class span").text(jQuery.data(characterData, "class"));
    }
    if(inputs[2].value !== ""){
      jQuery.data(characterData, "level", inputs[2].value);
      $("#level span").text(jQuery.data(characterData, "level"));
    }
  });
});
