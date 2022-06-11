  // first we must create a function to do hold the code for our solution
function lotteryWinner(arrayOfStudents, chance) {
  const amountOfStudents = arrayOfStudents.length
  const ratio = Math.floor(chance/100)
  const numberOfNulls = amountOfStudents/ratio;
  // the ratio of students to nulls (in the array) multiplied by one hundred should be the same as chance
  // copy array of students to the lottery array
  let lotteryArray = [...arrayOfStudents];
  // we have to create a loop that adds that ratio to the array
  while ((lotteryArray.length - amountOfStudents) < numberOfNulls) {lotteryArray.push(null)}

  // we must create a random integer between 0 and (the amount of students in the class) - 1 
  const randomNumber = Math.floor(Math.random() * lotteryArray.length);
  const winner = lotteryArray[randomNumber]
  
  return winner
}

