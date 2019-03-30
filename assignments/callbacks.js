// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb('hi');
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });



const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// function getLength(arr, cb) {
//   return cb(arr.length)
const getLength = (arr, cb) => cb(arr.length)
  // getLength passes the length of the array into the callback.
// getLength(items, function(something) {
//           console.log(something)
//           })
getLength(items, (something) => console.log(something))




function last(arr, cb) {
  let lastIndex = arr.length - 1
  return cb(arr[lastIndex])
  // last passes the last item of the array into the callback.
}
const last = (arr, cb) => {let lastIndex = arr.length - 1; return cb(arr[lastIndex])}

// last(items, function(something) {
//   console.log(something)
// })

last(items, (something) => console.log(something))




function sumNums(x, y, cb) {
  return cb(x + y)
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
const sumNums = (x, y, cb) => cb(x + y) 

// sumNums(2, 4, function(something) {
//   console.log(something)
// })
sumNums(2, 4, (something) => console.log(something))




// function multiplyNums(x, y, cb) {
//   return cb(x * y)
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }
const multiplyNums = (x, y, cb) => cb(x * y) 

// multiplyNums(2, 4, function(something) {
//   console.log(something)
// })
multiplyNums(2, 4, (something) => console.log(something))




function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true)
    }
   return cb(false)
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
const contains = (item, list, cb) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true)
    }
    return cb(false)
  }
}

contains("Pencil", items, function(something) {
         console.log(something)
         })
contains("Pencil", items, (something) => console.log(something))
  



// /* STRETCH PROBLEM */


  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

