var answerLogger = function(arr) {
  $("#answer").html("<ol></ol>");

  arr.forEach( function(fn){
    var answer = fn();

  $("#answer > ol").append("<li>" + answer + "</li>");
});
};

answerLogger(
  [
    function() { return"I should appear!"},
    function() { return"I should appear!"},
    function() { return"I should appear!"},
    function() { return"I should appear!"}
  ]
  );

var secretKeeper = function(string1, string2){
  var secret = "You can't find me.";
  var publicPhrase = string1 + " " + secret + " " + string2;

  $("#answer").append(publicPhrase);
};

secretKeeper("Hey, ", " Haha");
