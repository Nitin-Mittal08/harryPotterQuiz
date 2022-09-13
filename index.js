var readlineSync = require("readline-sync");

var username = readlineSync.question("What's your name? ");
console.log("Welcome to the HARRY POTTER Quiz!"+ username);
var questions = [
  {
    question: "Who is the author of Harry Potter?",
    options:["J.K.Rowling","Steve","Henry","Goldilocks"],
    answer: "J.K.Rowling"
  },
  {
    question: "How many total Harry Potter books are there? ",
    options:["3","2","4","7"],
    answer: "7"
  },
   {
    question: "Who killed Nagini? ",
    options:["Ron","Harry","Hermione","Neville"],
    answer: "Neville"
  },
  {
    question: "Snape was the headmaster of which house? ",
    options:["Griffindor","Slytherin","Hufflepuff","Ravenclaw"],
    answer: "Slytherin"
  },
  {
    question: "How many Weasely Brothers were there in total?",
    options:["5","4","6","7","3"],
    answer: "6"
  },
  {
    question: "What was the first horcrux that was destroyed?",
    options:["Riddle's Diary","Phiilosopher's stone","Diadem","Salazar Slytherine's ring"],
    answer: "Riddle's Diary"
  },
  {
    question: "In which book does Professor Snape teach Defence Against the Dark Arts",
    options:["3","1","5","6"],
    answer: "6"
  },
  {
    question: "Who died as a free elf",
    options:["Toby","Doby","Winky","Tinky"],
    answer: "Doby"
  },
  {
    question: "Who betrayed James Potter?",
    options:["Snape","Peter Pettigrew","Remus Lupin","Sirius"],
    answer: "Peter Pettigrew"
  },
  {
    question: "in the 5th book, Who's charachter is more detested than Snape & Voldemort?",
    options:["Grubby Plank","Hagrid","Minerva","Dolores Umbridge"],
    answer: "Dolores Umbridge"

  }
]

var high_score = {
  name: "Nitin",
  points: 9
}

var score = 0;

function play(question, options,answer){
  var i = readlineSync.keyInSelect(options,question);
  var userans = options[i];

  if(userans===answer){
    score++;
    console.log("Correct!\n Your score:"+score);
  }else{
    score--;
    console.log("Incorrect!");
  }
}

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].options,questions[i].answer);
}

if(score<high_score.points){
  console.log("Your Total Score: ",score," is less than the highest score: ",highest_score.points);
}else{
  high_score.points = score;
  high_score.name = username;
  console.log("Congratulations! \nYou are the highest Scorer!"+ high_score.name);
}



