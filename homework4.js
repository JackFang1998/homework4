

var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var timeEl = document.querySelector(".time");
var start = document.querySelector(".start");
var questionArea = document.querySelector(".questionarea");
var choice = document.querySelector(".choice");
var judge = document.querySelector(".judge");
var result = document.querySelector("#result");
var Result = document.createElement("h2");
var player = document.querySelector("#player");
var Player = document.createElement("input");
var report = document.querySelector(".report");
var reportMyScore = document.querySelector(".submit");
var list=[];
Player.size = "50";
var round = 0;
var check;
var score = 0;
var jack;
var highestScore = document.querySelector(".highestScore");
var oldScore = 0;
a1.textContent = "do not click here now";
a2.textContent = "do not click here now";
a3.textContent = "do not click here now";
a4.textContent = "do not click here now";
var timeleft = 60;
judge.style.color="red"
reportMyScore.style.color="brown";
reportMyScore.style.size="40";
result.style.color="yellow"
//setting up these variable for math calculation and displaying


initial();
renderlist();

highestScore.textContent = "Current highest score:  Player:" +oldPlayer+ ",Score:" +oldScore;
function renderlist() {
  report.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var element = list[i];
    var li = document.createElement("li");
    li.style.fontSize = "30px";

    li.textContent = element;
    report.appendChild(li);
    store();
  }
}

start.addEventListener("click", function(event) {
  reportMyScore.textContent=""
  //the method function for the strat button
  event.preventDefault(); //prevent refreshing
  score = 0;
  Result.textContent = "";
  Player.value = "";
  start.textContent = "";
  //initialize the score and corespounding variable
   var checkRound=0;
   
  var timer = setInterval(function() {
    //recall function for timing
    timeleft--;
    
    timeEl.textContent = timeleft;
    if (timeleft < 1) {
     
      clearInterval(timer);
     
      Result.textContent = "TimeOut!! you have got  " + score + "  precent correct";
      result.appendChild(Result);
      start.textContent = "Restart the round";
      timeleft = 60;
      }
      else if (round>3)
      {
        clearInterval(timer);
      Result.textContent = "you have got  " + score + "  precent correct";
      result.appendChild(Result); 
      timeleft =60;
      round=0;
      }
    
    
    



   if(check==="a2"&&checkRound===0)
   {
      timeleft=timeleft+10;
      check="";
      checkRound=checkRound+1;
    }
    
     if(check=="a1"&&checkRound===0)
     {
     timeleft=timeleft-10;
      check="";
      checkRound=checkRound+1;
    }
    if(check=="a3"&&checkRound===0)
    {
    timeleft=timeleft-10;
     check="";
     checkRound=checkRound+1;
   }
   if(check=="a4"&&checkRound===0)
    {
    timeleft=timeleft-10;
     check="";
     checkRound=checkRound+1;
   }
   //the 4 condition for the first question
   
    if(check==="a1"&&checkRound===1)
    {
      timeleft=timeleft+10;
      check="";
      checkRound=checkRound+1;
    }
    if(check==="a2"&&checkRound===1)
    {
      timeleft=timeleft-10;
      check="";
      checkRound=checkRound+1;
    }
    if(check==="a3"&&checkRound===1)
    {
      timeleft=timeleft-10;
      check="";
      checkRound=checkRound+1;
    }
    if(check==="a4"&&checkRound===1)
    {
      timeleft=timeleft-10;
      check="";
      checkRound=checkRound+1;
    }
    //the 4 condition for the second question

    if(check==="a3"&&checkRound===2)
    {
      timeleft=timeleft+10;
      check=""
      checkRound=checkRound+1;
    }
    if(check==="a1"&&checkRound===2)
    {
      timeleft=timeleft-10;
      check=""
      checkRound=checkRound+1;
    }
    if(check==="a2"&&checkRound===2)
    {
      timeleft=timeleft-10;
      check=""
      checkRound=checkRound+1;
    }
    if(check==="a4"&&checkRound===2)
    {
      timeleft=timeleft-10;
      check=""
      checkRound=checkRound+1;
    }
    //the 4 condition for the third round
    

    
    
  }, 800);
});











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












function reply_click(clicked_id) {
  check = clicked_id;
  // everytie once a button is clicked, record its id into variable check
}

var oldPlayer;
var record;
reportMyScore.addEventListener("click", function() {
  event.preventDefault();
  record = "Name: " + Player.value.trim() + "        score:    " + jack;
  
  if (jack > oldScore) {
    highestScore.textContent =  "Current highest score: Player: "+Player.value+ ",Score: " + jack;
    oldPlayer=Player.value;
    oldScore = jack;
  } 
  else if(jack === oldScore ){
    highestScore.textContent = "Current highest score:  Player:" +Player.value+ ",Score:  " +jack
    oldPlayer=Player.value;
    oldScore = jack;
  }
  else {
    highestScore.textContent = "Current highest score:  Player:" +oldPlayer+ ",Score:" +oldScore;
  }
  
  
  reportMyScore.innerHTML = "";
  list.push(record);
  renderlist();
});


function store(){
  localStorage.setItem("lists", JSON.stringify(list));
  localStorage.setItem("record",JSON.stringify(oldScore));
  localStorage.setItem("name",oldPlayer);
}
function initial(){
  var storedlist= JSON.parse(localStorage.getItem("lists"));
  if (storedlist !== null) {
   list = storedlist;
  }
  var theRecord=JSON.parse(localStorage.getItem("record"));
  if (theRecord !==null){
    oldScore=theRecord;
  }
  var thePlayer=localStorage.getItem("name")
  if (thePlayer !==null){
    oldPlayer=thePlayer;
  }
}
