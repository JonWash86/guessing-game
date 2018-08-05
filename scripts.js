var totalTally = 0;
var totalGuessed = 0;
var correctResponse = [
  'That\'s Right!', 'That\'s a very generous way of putting it, but yes!','Yup! Just call me a mildly embarrassed son of the Grand Canyon State!'
]
var wrongResponses = [
  'You are sorely mistaken!', 'Actually you\'re wrong; I\'ve served him coffee. He was walking a bulldog (probably his).','Wrong! I hardly believe it either, but I grew up checking my loafers for scorpions!'
]

function tallyUp(){
  totalTally += 1;
  console.log('The user got the answer correct. Their tally of correct answers is at ' + totalTally + '.');
}


function checkAnswer(answer){
  if ((answer == 'no')||(answer =='n')||(answer =='nope')||(answer =='nah')||(answer =='nay')||(answer =='false')){
    console.log('the user responded in the negative.')
    return 'negative';
  }
  else if((answer == 'yes' )||(answer == 'y' )|| (answer =='yeah') ||(answer == 'yup')||(answer =='true')){
    console.log('the user responded in the affirmative.');
    return 'affirmative';
  }
  else {
    return 'invalid';
  }
}

function questionSolve(answerNumber, correctAnswer, correctResponse, wrongResponse){
  var answerId = "answer" + answerNumber;
  var userResponse = document.getElementById(answerId).value.toLowerCase();
  var spaceId = "space" + answerNumber;
  var response = document.getElementById(spaceId);
  if (checkAnswer(userResponse) != correctAnswer){
    response.innerHTML = '<span id=wrongRed>' + wrongResponse + ' </span>';
    totalGuessed++;
    console.log('The user gave a wrong answer. They have answered ' + totalGuessed + ' questions and have gotten '+ totalTally +' correct answers.');
  }
  else if (checkAnswer(userResponse)== 'invalid'){
    response.innerHTML += 'This is a yes or no question. Please try again.';
    console.log('the user provided an invalid response.');
  }
  else {
    response.innerHTML = '<span id=rightGreen>' + correctResponse + '</span>';
    totalGuessed++;
    tallyUp();
    console.log('the user is correct. They have answered '+totalGuessed+' questions and have gotten '+totalTally+' correct answers.');
  }
}
function questionOne(){
  questionSolve('One', 'negative', correctResponse[0], wrongResponses[0]);
}

function questionTwo(){
  questionSolve('Two', 'affirmative', correctResponse[1], wrongResponses[1]);
}

function questionThree(){
  questionSolve('Three', 'affirmative', correctResponse[2], wrongResponses[2]);
}

function questionFour(){
    var residentGuess = document.getElementById('answerFour').value;
    console.log('The user guessed ' + residentGuess + ' years.');
      if (isNaN(residentGuess)){
        console.log('They didn\'t even guess a number. I\'m not one to judge, but wow.');
        alert('I need you to guess a number, please. \'' + residentGuess +'\' years is not a number of years.');
      }
      else if (residentGuess < 8){
        console.log('User guessed too low by ' + (8 - residentGuess) + ' years.');
        guessCalibration.innerHTML ='<span id=wrongRed> Close! I\'ve been here a bit longer than that, though.</span>';
      }
      else if (residentGuess > 8){
        console.log('User guessed too high by ' + (residentGuess - 8) + ' years.');
        guessCalibration.innerHTML = '<span id=wrongRed> Not bad, but I haven\'t quite reached that milestone.</span>'
      }
      else if (residentGuess == 8){
        tallyUp()
        var threeResponse = document.getElementById('fourSpace');
        fourSpace.innerHTML = 'You got it! I moved here 8 years ago. How time flies.';
        totalGuessed++;
      }
    }

function howDidIDo(){
  if (totalGuessed == 4){
    if (totalTally == 0){
      var resultResponse = document.getElementById('resultSpace');
      resultSpace.innerHTML = 'You have zero answers correct. I\'m not even sure you tried.';
      console.log('The user requested their tally of correct answers, which is at ' + totalTally + '.');
    }
    else if (totalTally == 1){
      var resultResponse = document.getElementById('resultSpace');
      resultSpace.innerHTML = 'You got one question right, and the final question wouldn\'t let you quit until you guessed correctly. Nice.';
      console.log('The user requested their tally of correct answers, which is at ' + totalTally + '.');
    }
    else if (totalTally <=3){
      var resultResponse = document.getElementById('resultSpace');
      resultSpace.innerHTML = 'Hey, you got ' + totalTally + ' answers correct. That\'s not bad! Not perfect, but not bad.';
      console.log('The user requested their tally of correct answers, which is at ' + totalTally + '.');
    }
    else if (totalTally == 4){
      var resultResponse = document.getElementById('resultSpace');
      resultSpace.innerHTML = 'You got ' + totalTally + ' questions right. That\'s a perfect score!';
      console.log('The user requested their tally of correct answers, which is at ' + totalTally + '.');
    }
  }
  else{
    alert('Let\'s wait until you\'ve answered all the questions!')
  }
}
