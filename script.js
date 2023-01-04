document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  let button = document.querySelector(".submit");
  let display = document.querySelector(".display");
  let color = document.querySelector(".q1");
  let sun = document.querySelector(".q2");
  let number = document.querySelector(".q3");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question. 
  let imgSrc;
  let result;
  let colorScore;
  let numberScore;

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question. 
    let userColor = color.value.toLowerCase();
    let userSun = sun.value.toLowerCase();
    let userNumber = number.value;

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userColor == "red") {
      colorScore = 1;
    }
    else if (userColor == "yellow") {
      colorScore = 2;
    }
    else if (userColor == "green") {
      colorScore = 3;
    }
    else if (userColor == "blue")
    {
      colorScore = 4;
    }
    else 
    {
      colorScore = 0
    }

    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (userSun === "yes") {
      sunScore = 1;
    }
    else if (userSun === "no") {
      sunScore = 2;
    }
    else if (userSun === "what is the sun?") {
      sunScore = 3;
    }
    else if (userSun === "THE SUN IS A DEADLY LAZER")
    {
      sunScore = 4;
    }
    else 
    {
      sunScore = 0
    }

    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (userNumber === "8943") {
      numberScore = 1;
    }
    else if (userNumber === "1234") {
      numberScore = 2;
    }
    else if (userNumber === "4342") {
      numberScore = 3;
    }
    else if (userNumber === "7382")
    {
      numberScore = 4;
    }
    else 
    {
      numberScore = 0
    }

    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let totalScore = colorScore + sunScore + numberScore;



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore > 10) {
      result = "Po";
      imgSrc = "https://i.pinimg.com/originals/d0/03/e3/d003e3401897ec3cda8712eddd016f64.png";
      display.innerHTML = `<h2>You are clearly ${result}!</h2></br><img src="${imgSrc}">`;
    }

    else if (totalScore < 11 && totalScore >= 8) {
      result = "Dipsy";
      imgSrc = "https://c8.alamy.com/comp/BKBMMB/teletubbies-dipsy-tubb-00-BKBMMB.jpg";
      display.innerHTML = `<h2>You are clearly ${result}!</h2></br><img src="${imgSrc}">`;
    }

    else if (totalScore < 8 && totalScore >= 6) {
      result = "Laa-Laa";
      imgSrc = "https://media.tenor.com/zWJUnAhTNpAAAAAd/teletubbies-laa-laa.gif";
      display.innerHTML = `<h2>You are clearly ${result}!</h2></br><img src="${imgSrc}">`;
    }

    else if (totalScore < 6 && totalScore > 2)
    {
      result = "Tinky-Winky";
      imgSrc = "https://i.ytimg.com/vi/yf-Iac43cc0/maxresdefault.jpg";
      display.innerHTML = `<h2>You are clearly ${result}!</h2></br><img src="${imgSrc}">`;

    }
    else 
    {
      display.innerHTML = `<h2>Answer the questions correctly dumdum</h2>`;
    }
  }
}