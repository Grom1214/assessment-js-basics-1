//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
let colorcopy = (faveColors.slice())
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorcopy.push("blue")
console.log(colorcopy)
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
let middleNums = [2, 3, 4]

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let answer = []

// for(let i = 0; i < 8; i++){
//   if (bigOrSmallArray[i] >= 100){
//     answer.push("big") 
  
//   }else if (bigOrSmallArray[i] < 100){
//     answer.push("small")
//   }else (console.log(i))

//  console.log(answer)
// }

for(let i = 0; i < 8; i++){
  let answer = []
  let ismod3 = bigOrSmallArray[i] >= 100
  let ismod5 = bigOrSmallArray[i] < 100
  if (ismod3){
    answer.push("big")
  }
  else if (ismod5){
    answer.push("small")
  }else {console.log(i)
  }
 console.log(answer)
}

