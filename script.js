$(document).ready(function(){
  var calcString = "";
  var dispString = "0";
  $("#entryString").text(dispString);
  $(".buttonValley button").on("click", function(){
    var char = $(this).val();
    if (char === "="){
      var firstChar = calcString.charCodeAt(0);
      var lastChar = calcString.charCodeAt(calcString.length-1);
      if ((firstChar < 48 && firstChar !== 46 && firstChar !== 45) || firstChar > 57 || (lastChar < 48 && lastChar !== 46) || lastChar > 57){
        /* starts/ends with an operator */
        /* allows negative numbers */
        dispString = "invalid";
        calcString = "";
      } else {
        /* String assumed safe for eval() */
        dispString = eval(calcString);
        calcString = "";
      }
    } else if (char === "AC"){
      calcString = "";
      dispString = "0";
    } else if (char === "CE"){
      if (dispString === "0" && calcString.length === 1){ // CE pressed consecutively
        calcString = "";
      }
      dispString = "0";
      calcString = calcString.substring(0, calcString.length-1);
    } else {
      calcString += char;
      dispString = char;
    }
    $("#entryString").text(dispString);
    $("#expString").text(calcString);
  });
});