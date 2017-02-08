$(document).ready(function(){
  $("form input[type=\"button\"]").click(function(){
    var inputs = $("form input[type=\"text\"]");
    var complete = true;
    for(var i = 0; i < inputs.length; i++){
      if(inputs[i].value === ""){
        inputs[i].style.backgroundColor = "pink";
        complete = false;
      }
    }
    if(complete !== false){
      var newLine = "<tr>";
      for(var i = 0; i < inputs.length; i++){
        newLine += "<td>" + inputs[i].value + "</td>";
        inputs[i].value = "";
      }
      newLine += "</tr>";
      $("table").append(newLine);
    }
  });
  $("form input[type=\"text\"]").focus(function(){
    this.style.backgroundColor = "white";
  });
});
