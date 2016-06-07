var wordUp = function(sentence){
  var result = "";

  var sentenceArray = sentence.split("");
  var vowels = ["a","o","u","i","e","y"];

  vowels.forEach(function(vowel){
    sentenceArray = sentenceArray.map(function(vowel){
      return "-";
    });
  });

  result = sentenceArray.toString();

  return result;
}



// Front End
$(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    //input
    var sentence = parseInt($("#wordUp").val());
    //output
    $("#output").text(wordUp(sentence));
  });
});
