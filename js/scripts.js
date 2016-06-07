// Back End
var wordUp = function(sentence){
  var result = "";
  var sentenceArray = sentence.split("");
  var vowels = ["a","o","u","i","e","y"];

  vowels.forEach(function(vowel){
    for (var index=0;index < sentenceArray.length; index +=1){
      if (sentenceArray[index] === vowel){
        sentenceArray[index] = "-"
      }
    }
  });

  result = sentenceArray.join("");
  return result;
}



// Front End
$(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    //input
    var sentence = $("#wordUp").val();
    //output
    $("#output").text(wordUp(sentence));
  });
});
