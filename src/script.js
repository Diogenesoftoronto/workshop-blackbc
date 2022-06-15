// first we must create a function to do hold the code for our solution
function lotteryWinner(arrayOfStudents, chance) {
  // find the amount of student in the array and the amount is the same as the length
  const amountOfStudents = arrayOfStudents.length;
  // round down the ratio of students to noone winning
  const ratio = chance / 100;
  console.log(ratio);
  // calculates the amount of times we need to add nobodies to the array
  const lengthOfArray = amountOfStudents / ratio;
  const numberOfNulls = lengthOfArray - amountOfStudents;
  // the ratio of students to nulls (in the array) multiplied by one hundred should be the same as chance
  // add students to the lottery
  // copy array of students to the lottery array
  let lotteryArray = [...arrayOfStudents];
  //   if the ratio is one then that means there is no need to add null values
  if (ratio !== 1) {
    // we have to create a loop that adds the nulls to the array
    while (lotteryArray.length - amountOfStudents < numberOfNulls) {
      lotteryArray.push(null);
      console.log(lotteryArray);
    }
  }

  const greetings = ["hello", "goodbye", "sayonara", "yo", "salute"];
  // we must create a random integer between 0 and (the amount of students in the class) - 1
  const randomNumber = Math.floor(Math.random() * lotteryArray.length);
  // the winner is going to be whichever value is at the index of the random number.
  const winner = lotteryArray[randomNumber];
  // return the winner and we are ready to go
  return winner;
}

// get the students from the submit button and put them into an array. Display that array to the document
function getStudent(event) {
  event.preventDefault();
  new FormData(studentForm);
}
const studentForm = document.querySelector(".form-student");

const chanceForm = document.querySelector(".form-chance");

chanceForm?.addEventListener("submit", getChance);

function getChance(event) {
  event.preventDefault();
  new FormData(chanceForm);
}

let chance;

const winnerButton = document.querySelector(".button-winner");

chanceForm.onformdata = function (event) {
  let data = event.formData;
  chance = data.get("chance");
  console.log(chance);
  // return chance
};

let arrayOfStudents = [];

studentForm.onformdata = function (event) {
  let data = event.formData;
  let studentNames = data.getAll("studentName");
  arrayOfStudents = [...studentNames];
  // some code to remove duplicates
  let setOfStudents = new Set();
  setOfStudents = [...arrayOfStudents];
  arrayOfStudents = [...setOfStudents];
  console.log(arrayOfStudents);
  // return arrayOfStudents
};

studentForm?.addEventListener("submit", getStudent);
const addStudent = document.querySelector(".add-student");

addStudent?.addEventListener("click", addStudentInput);

function addStudentInput(event) {
  // append a new input to the form
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "studentName");
  input.setAttribute("placeholder", "Enter Student Name");
  studentForm.appendChild(input);
  const submit = document.querySelector('.form-student > input[type="submit"]');
  submit.remove();
  studentForm.appendChild(submit);
}

winnerButton?.addEventListener("click", revealWinner);

function revealWinner(event) {
  let winner = lotteryWinner(arrayOfStudents, chance);
  if (winner === null) winner = "no one";
  alert(`The winner is ${winner}`);
}
