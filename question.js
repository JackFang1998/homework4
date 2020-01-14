start.addEventListener("click", function  (event) {
    //the second function for the start button
    event.preventDefault();
  
    questionArea.textContent = "what is the file for mainly color changing?";
    a1.textContent = "HTML";
    a2.textContent = "CSS";
    a3.textContent = "bootstrap";
    a4.textContent = "Javascript";
    result.textContent="";
    judge.textContent = "";
    Result.textContent = "";
    Player.remove()
    //question 1
  });
  choice.addEventListener("click", function (event) {
    event.preventDefault();
    round++;
    if (round === 1) {
      questionArea.textContent =
        " Who is you good friend when you codding by yourselves?";
      a1.textContent = "Google DEV";
      a2.textContent = "alert";
      a3.textContent = "your teacher";
      a4.textContent = "your mum";
      //question 2
      if (check === "a2") {
        judge.textContent = "correct, adding 10 seconds";
        score = score + 25;
      } else {
        judge.textContent = "incorrect, decreasing 10 seconds";
      }
      //judging if answer is correct and adding score
    }
    if (round === 2) {
      questionArea.textContent = "what is the name of our codding teacher?";
      a1.textContent = "Jake";
      a2.textContent = "Jackson";
      a3.textContent = "David";
      a4.textContent = "Sarah";
      //question 3
      if (check === "a1") {
        judge.textContent = "correct, adding 10 seconds";
        score = score + 25;
      } else {
        judge.textContent = "incorrect, decreasing 10 seconds";
      }
      //judging if answer is correct and adding score
    }
    if (round === 3) {
      questionArea.textContent =
        "what is a correct motivation to take this coding class";
      a1.textContent = "I want be the best in the world";
      a2.textContent = " I want to become a capable man in the society";
      a3.textContent = " I want to lord over my wife";
      a4.textContent = "I want to show off my knowledge to others";
      //question 4
      if (check === "a3") {
        judge.textContent = "correct, adding 10 seconds";
        score = score + 25;
      } else {
        judge.textContent = "incorrect, decreasing 10 seconds";
      }
      //judging if answer is correct and adding score
    }
    if (round === 4) {
      result.textContent = "The result area";
  checkRound=0;
      if (check === "a2") {
        judge.textContent = "correct";
        score = score + 25;
      } else {
        judge.textContent = "incorrect";
      }
      check="";
      //judging if answer is correct and adding score
      reportMyScore.textContent = "report my score";
    //  timeleft = 1;
      
     // Result.textContent = "you have got  " + score + "  precent correct";
      
      //reporting the final result and make the time to 0
      result.appendChild(Result);
     
      //initializing the c
      player.appendChild(Player);
      Player.placeholder = "Enter your name here for score reporting";
      jack = score;
      //entering the player's name here
  
      start.textContent = "Restart the round";
      a1.textContent = "do not click here now";
      a2.textContent = "do not click here now";
      a3.textContent = "do not click here now";
      a4.textContent = "do not click here now";
    }
  });
  