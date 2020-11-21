//Who am I The Quiz Game
var chalk=require('chalk');

var takeinput=require('readline-sync');



var quizList=[{
  q:"Well do you know my name? ",
  a:"Iamdope"
},
{
  q:"Guess my age if I am millennial? ",
  a:"32"
},
{
  q:"What's my favourite book? ",
  a:"The subtle art of not giving a F**k"
},
{
  q:"Whom do I admire the most? ",
  a:"Sir Tanay"
},
{
  q:"What is my favourite no.? ",
  a:"100"
}
,{
  q:"Where do I live? ",
  a:"USA"
},
{
  q:"I prefer Green Tea or Coffee? ",
  a:"Coffee"
},
{
  q:"Who is my favourite superhero? ",
  a:"Flash"
},
{
  q:"Who is my favourite cartoon character? ",
  a:"Doraemon"
},
{
  q:"What is my goal?",
  a:"Google engineer"
}]



function check(question,answer){
  var ans=takeinput.question(question)

  if(answer.toUpperCase() === ans.toUpperCase()){
    console.log(chalk.green("you are right!"));
  }else{
    console.log(chalk.red("You are wrong"));
  }
}

var i = 0

for(i;i<quizList.length;i++){
  check(quizList[i].q,quizList[i].a)
}
