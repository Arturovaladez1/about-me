'use strict';

alert ('Hey there!');
// console.log ('hello');

let username = prompt ('What is your name?');
// console.log('What is your name?');
alert ('Hello ' + username );

let home = prompt('Have I lived in another country?').toLowerCase();

function country() {
  if (home === 'yes' || home === 'y'){
    console.log ('You are correct ' + username);
    alert('You are correct ' + username);
  } else if (home === 'no' || home === 'n'){
    console.log ('Almost, try again!');
    alert('Almost, try again! ');
  } else {
    console.log ('Oops, thats not it');
    alert('Oops, thats not it.');
  }
}

country(home);

let Navy = prompt ('Was I in the U.S. Army?').toLowerCase();

function military() {
  if (Navy === 'yes' || Navy === 'y'){
    console.log('Wrong answer, you can find out more on this page.');
    alert('Wrong answer, you can find out more on this page.');
  } else if (Navy === 'no' || Navy === 'n'){
    console.log ('You are right! I was in the U.S. Navy');
    alert('You are right! I was in the U.S. Navy.');
  } else {
    console.log ('Try again.');
    alert('Oops, thats not it.');
  }
}

military(Navy);

let interests = prompt ('Am I a front end developer?').toLowerCase();

function developer() {
  if (interests === 'yes' || interests === 'y'){
    console.log ('You are right! Nice.');
    alert('You are right! Nice.');
  } else if (interests === 'no' || interests === 'n'){
    console.log('Actually, I am a front end developer.');
    alert('Actually, I am  a front end developer.');
  } else {
    console.log ('Oops, thats not it.');
    alert('Oops, thats not it.');
  }
}

developer(interests);

// test

/*

let hobbies = prompt ('Do I like music?')
  .toLowerCase();

if (hobbies === 'yes' || hobbies === 'y'){
  // console.log ('You are right, I do.');
  alert('You are right, I do.');
} else if ( hobbies === 'no' || hobbies === 'n'){
  // console.log ('I love music!');
  alert('I love music!');
} else {
  // console.log ('Try again.');
  alert('Oops, thats not it.');
}

let pet = prompt ('Do I own a dog?')
  .toLowerCase();

if (pet === 'yes' || pet === 'y'){
  // console.log ('you are right, I do.');
  alert('you are right, I do.');
} else if ( pet === 'no' || pet === 'no') {
  // console.log (' I actually do, I own a malinois mix.');
  alert('I actually do, I own a malinois mix.');
} else {
  // console.log ('oops, thats not it.');
  alert('Oops, thats not it.');
}

let attempts = 4;
let points = 0;

for (let i = 0; i < attempts ; i++) {

  let luck = prompt('What is my lucky number?');
  luck = parseInt(luck);
  console.log('What is my lucky number?');

  if (luck === 4) {
    points++;
    console.log(`That is correct! your score is ${points}`);
    alert(`That is correct! your score is ${points}`);
    break;

  } else if (luck > 4) {
    console.log(`that is too high! you have ${attempts - i - 1} left.`);
    alert(`that is too high! You have ${attempts - i - 1} left.`);

  } else if (luck < 4) {
    console.log(`That is too low! You have ${attempts - i - 1} left.`);
    alert(`That is too low! you have ${attempts - i - 1} left.`);
  } else {
    alert('Please enter a number.');
  }
  console.log(attempts);
  console.log(i);
}



/* array is answerlist
trys are 6
score 0 */

let movieguess = prompt('Name one of my favorite movies.').toLowerCase();
let trys = 6;
let score = 0;
let answerlist = ['tokyo drift',
  'ff1',
  'lone survivor',
  'rush hour',
  'chef',
  'batman',
  'windstalker',
  'home Alone',
  'handlot',
  'john wick' ];
while (trys>0) {
  trys--;
  if (movieguess === answerlist[4] ) {
    console.log('you are correct!');
    alert('you are correct');
  }
}
// console.log(`Almost, I might give you a hint next time. You have ${trys} remaining tries left.`);
// alert(`Almost, I might give you a hint next time. You have ${trys} remaining tries left.`);
// if (movieguess === answerlist[4] ) {
//   console.log('you are correct!');
//   alert('you are correct');