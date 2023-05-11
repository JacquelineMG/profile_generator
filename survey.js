// The survey function asks the user a series of questions and then generates a short user profile from the responses.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q00 = "What's your name or nickname? ";
const q01 = "What's an activity you like to do? ";
const q02 = "What do you listen to while doing that? ";
const q03 = "Which meal is your favourite (eg: dinner, brunch, etc.)? ";
const q04 = "What's your favourite thing to eat? ";
const q05 = "What is your absolute favourite sport? ";
const q06 = "What is your superpower? What are you amazing at? ";

const f00 = "Nice to meet you.";
const f01 = "That sounds fun! ";
const f02 = "Thanks for sharing. ";
const f03 = "I like snacktime! ";
const f04 = "That sounds tasty! ";
const f05 = "Got to keep moving! ";
const f06 = "You sound like an awesome person! ";

const qArray = [q00, q01, q02, q03, q04, q05, q06];
const fArray = [f00, f01, f02, f03, f04, f05, f06];

let ans = [];
const survey = function(i) {
  if (i < qArray.length) {
    rl.question(qArray[i], (answer) => {
      ans.push(answer);
      console.log(fArray[i]);
      survey(i + 1);
    });
  } else {
    console.log(`Thanks for your feedback! Here's your profile:
    
    ${ans[0]} enjoys ${ans[1]} while listening to ${ans[2]}. At ${ans[3]}, ${ans[0]} likes to eat ${ans[4]}.
    ${ans[0]} also likes ${ans[5]} and is great at ${ans[6]}!\n`);
    rl.close();
  }
};

survey(0);