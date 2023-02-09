'use strict';
// Global Variables
// alert('Hey there!');
console.log('hello');

// let username = prompt('What is your name?');
// console.log(username);
// alert('Hello ' + username);
let points = 0;

function country() {

  let home = prompt('Have I lived in another country?').toLowerCase();
  console.log(home);
  if (home === 'yes' || home === 'y') {
    alert(`You are correct,  ${username}  you scored ${points}`);
    points++;

  } else if (home === 'no' || home === 'n') {
    alert('Yes I have.');

  } else {
    console.log('Oops, thats not it');
    alert('Oops, thats not it.');
  }
}

// country();


function military() {
  let navy = prompt('Was I in the U.S. Army?').toLowerCase();
  console.log(navy);

  if (navy === 'yes' || navy === 'y') {
    alert('Wrong answer, you can find out more on this page.');

  } else if (navy === 'no' || navy === 'n') {
    alert(`You are correct,  ${username}  you scored ${points}`);
    points++;

  } else {
    alert('Oops, thats not it.');
  }
}

// military(navy);


function developer() {

  let interests = prompt('Am I a front end developer?').toLowerCase();

  if (interests === 'yes' || interests === 'y') {
    alert(`You are correct,  ${username}  you scored ${points}`);
    points++;

  } else if (interests === 'no' || interests === 'n') {
    alert('Actually, I am  a front end developer.');

  } else {
    alert('Oops, thats not it.');
  }
}

// developer();


function fun() {

  let hobbies = prompt('Do I like music?')
    .toLowerCase();

  if (hobbies === 'yes' || hobbies === 'y') {
    alert(`You are correct,  ${username}  you scored ${points}`);
    points++;

  } else if (hobbies === 'no' || hobbies === 'n') {
    alert('I love music!');

  } else {
    alert('Oops, thats not it.');
  }
}

// fun();


function dog() {

  let pet = prompt('Do I own a dog?')
    .toLowerCase();

  if (pet === 'yes' || pet === 'y') {
    alert(`You are correct,  ${username}  you scored ${points}`);
    points++;

  } else if (pet === 'no' || pet === 'no') {
    alert('I actually do, I own a malinois mix.');

  } else {
    alert('Oops, thats not it.');
  }
}

// dog();


function lucky() {

  let attempts = 4;
  let luck = prompt('What is my lucky number?');
  luck = parseInt(luck);

  for (let i = 0; i < attempts; i++) {

    console.log('What is my lucky number?');

    if (luck === 4) {
      alert(`That is correct! your score is ${points}`);
      points++;
      break;


    } else if (luck > 4) {
      alert(`that is too high! You have ${attempts - i - 1} left.`);
      prompt('Wanna try again? Whats my lucky number?');

    } else if (luck < 4) {
      alert(`That is too low! you have ${attempts - i - 1} left.`);
      prompt('Wanna try again? Whats my lucky number?');

    } else {
      alert('Please enter a number.');
      prompt('Wanna try again? Whats my lucky number?');
    }
  }
}

// lucky();

function favoriteLetter() {

  let listOfPossibleAnswers = ['a', 'b', 'c', 'd', 'e', 'f'];

  let answer = prompt('Guess my favorite letter').toLowerCase();
  for (let i = 0; i < listOfPossibleAnswers.length; i++) {

    console.log(answer);
    console.log(i);

    console.log(listOfPossibleAnswers[i]);

    if (answer === listOfPossibleAnswers[i]) {
      alert(`that is correct you scored + ${points}`);
      points++;
      break;
    // } else if (answer !== listOfPossibleAnswers[i]) {
    //   alert(`please try again you scored  ${points}`);
    //   answer = prompt('Guess my favorite letter').toLowerCase();
    } else {
      alert('Please enter a letter.');
      answer = prompt('Guess my favorite letter').toLowerCase();

    }
  }





}

// favoriteLetter();
