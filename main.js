var counter = 0; //counter shows which number of the array to get the question and answer from
var score = 0;

var content = [{"question":"Tokyo is the capital of Japan", "answer": "correct"}, {"question":"Paris is the capital of France", "answer": "correct"}, {"question":"Munich is the capital of Germany", "answer": "wrong"}, {"question":"St Petersburg is the capital of Russia", "answer": "wrong"}, {"question":"Beijing is the capital of China", "answer": "correct"}, {"question":"Bogota is the capital of Peru", "answer": "wrong"}, {"question":"Barcelona is the capital of Spain", "answer": "wrong"}, {"question":"Lisbon is the capital of Portugal", "answer": "correct"}, {"question":"Budapest is the capital of Romania", "answer": "wrong"}, {"question":"Warsaw is the capital of Poland", "answer": "correct"}]


var quiz = {};


quiz.init = function(answerPosition) {
  var selection = content[counter];
  type = selection["answer"];
  $(".question").html(selection["question"]);
};



//this is to do the next question
quiz.generate = function() {
  $(".score").css("visibility", "visible");
  $(".score").html(score + "/10");

  counter++;

  if (counter < content.length) {
    var selection = content[counter];
    $(".question").html(selection["question"]);
    type = selection["answer"];
  } else {
    $(".question").hide();
    $(".new").hide();
    $(".answers").hide();
    $(".result").hide();
    $(".button-holder").hide();

    $(".endgame").html("You have finished the quiz!");
  }
};



$(document).ready(function(){
  $(".button").click(function(){
    $(".question").css("visibility","visible");
    $(".answers").css("visibility", "visible");
    $(".button-holder").css("visibility", "hidden");
    $(".new").css("visibility", "visible");
    $(".score-box").css("visibility", "visible");


    quiz.init();
  });

  $("#generate").click(function(){
    quiz.generate();
    $("#correct").css("background-color", "white");
    $("#wrong").css("background-color", "white");
  });

  $(".choice").click(function(e) {
    var chosenAnswer = e.target.id;

    if (chosenAnswer == "correct") {
      $("#correct").css("background-color", "grey");
    } else if (chosenAnswer == "wrong") {
      $("#wrong").css("background-color", "grey");
    }

    if (chosenAnswer == type) {
      $(".result").css("color", "rgb(50,250,50)")
      $(".result").html("You're right!");
      score++;
    } else {
      $(".result").css("color", "red")
      $(".result").html("Oops... wrong");
    }
  });

});
