// first we must create a function to do hold the code for our solution
function lotteryWinner(arrayOfStudents, chance) {
  // find the amount of student in the array and the amount is the same as the length
  const amountOfStudents = arrayOfStudents.length;
  // round down the ratio of students to noone winning
  const ratio = Math.floor(chance / 100);
  // calculates the amount of times we need to add nobodies to the array
  const numberOfNulls = amountOfStudents / ratio;
  // the ratio of students to nulls (in the array) multiplied by one hundred should be the same as chance
  // add students to the lottery
  // copy array of students to the lottery array
  let lotteryArray = [...arrayOfStudents];
  // we have to create a loop that adds the nulls to the array
  while (lotteryArray.length - amountOfStudents < numberOfNulls) {
    lotteryArray.push(null);
  }
  const greetings = ['hello', 'goodbye', 'sayonara', 'yo', 'salute']
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
  new FormData(studentForm)
}
const studentForm = document.querySelector(".form-student");

const chanceForm = document.querySelector(".form-chance");

chanceForm?.addEventListener("submit", getChance);



const winnerButton = document.querySelector(".button-winner");



let arrayOfStudents = [];

studentForm.onformdata = function (event) {
  let data = event.formData;
  let studentNames = data.getAll('studentName')
  arrayOfStudents = [...studentNames]
  // some code to remove duplicates
  let setOfStudents = new Set();
  setOfStudents = [...arrayOfStudents]
  arrayOfStudents = [...setOfStudents]
  console.log(arrayOfStudents)
}

studentForm?.addEventListener("submit", getStudent);
const addStudent = document.querySelector('.add-student');

addStudent?.addEventListener("click", addStudentInput);


function addStudentInput(event) {
  // append a new input to the form
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'studentName');
  input.setAttribute('placeholder', 'Enter Student Name');
  studentForm.appendChild(input);
}

winnerButton?.addEventListener("click", addStudentInput);