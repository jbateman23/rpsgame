var game_result;
function play(userChoice){
    var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	  computerChoice = "Rock";
  } else if(computerChoice <= 0.67) {
	  computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  game_result=compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}

var compare = function(choice1, choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="Rock"){
        if (choice2==="Scissors")
            return "Rock wins!";
        else
            return "Paper wins!";
    }
    else if(choice1==="Paper"){
        if(choice2==="Rock")
            return "Paper wins";
        else
            return "Scissors win!";
    }
    else{
        if(choice2==="Rock")
            return "Rock wins";
        else
            return "Scissors wins!";
    }
}
