'use strict';
alert ('Hey there!');
// console.log ('hello');

let username = prompt ('What is your name?');
// console.log('What is your name?');
alert ('Hello ' + username );

let home = prompt('Have I lived in another country?').toLowerCase();

if (home === 'yes' || home === 'y'){
  // console.log ('You are correct ' + username);
  alert('You are correct ' + username);
} else if (home === 'no' || home === 'n'){
  // console.log ('Almost, try again!');
  alert('Almost, try again! ');
} else {
  // console.log ('Oops, thats not it');
  alert('Oops, thats not it.');
}

let Navy = prompt ('Was I in the U.S. Army?').toLowerCase();

if (Navy === 'yes' || Navy === 'y'){
  // console.log('Wrong answer, you can find out more on this page.');
  alert('Wrong answer, you can find out more on this page.');
} else if (Navy === 'no' || Navy === 'n'){
  // console.log ('You are right! I was in the U.S. Navy');
  alert('You are right! I was in the U.S. Navy.');
} else {
  // console.log ('Try again.');
  alert('Oops, thats not it.');
}

let interests = prompt ('Am I a front end developer?').toLowerCase();

if (interests === 'yes' || interests === 'y'){
  // console.log ('You are right! Nice.');
  alert('You are right! Nice.');
} else if (interests === 'no' || interests === 'n'){
  // console.log('Actually, I am a front end developer.');
  alert('Actually, I am  a front end developer.');
} else {
  // console.log ('Oops, thats not it.');
  alert('Oops, thats not it.');
}

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

alert('Welcome to my page. Thank you for taking this quiz ' + username);
