// this currently outputs "I am at index 4" 4 times. How can we get it to output index 1, 2, 3, 4? --> we also know there are two possible solutions.

const array = [1, 2, 3, 4];
// for(var i=0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index' + i)
//   }, 3000)
// }

// first attempt: So the console.log is within the setTimeout function so it is sent off to the API. The callstack clears and when the timeout ends we get a call back and the output is returned..., I think.

// what if we store the value of i outside of the setTimeout function?

// for(var i=0; i < array.length; i++) {
//   counter = i
//   setTimeout(function() {
//     console.log('I am at index' + counter)
//   }, 3000)
// }

// output from this logs "I am at index 3" so at least now we are logging the correct length of the array index.

// what about a counter inside the setTimeout function? --> doesn't work, returns the same output as the original.

// for(var i=0; i < array.length; i++) {
//   setTimeout(function() {
//     counter = i
//     console.log('I am at index ' + counter)
//   }, 3000)
// }

// so moving i outside of the function was the right move but we need a way to increment the counter as well. Nested loops? we'd have an O(n^2)..... also doesn't solve the problem but does double the output.......

// for(var i=0; i < array.length; i++) {
//   index = i
//   for (var j=0; j < array.length; j++){
//     setTimeout(function() {
//       console.log('I am at index' + index)
//     }, 3000)
//   }
// }

// what if we changed VAR to LET? That solves it! Removes the hoisted var which only stores the final output in the global scope. Let keeps it in the local block scope.  
// for(let i=0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index' + i)
//   }, 3000)
// }

// what happens if we use const? Results in a TypeError because we can't update i. Fun!

// for(const i=0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index' + i)
//   }, 3000)
// }

// Now then, what is the second solution? would it also be let but placed in the parent scope of the setTimeout function? That's it! Holy crap we actually solved one!

// for(var i=0; i < array.length; i++) {
//   let index = i
//   setTimeout(function() {
//     console.log('I am at index ' + index)
//   }, 3000)
// }

// maybe not according to Andrei's solution video. The second solution in this case uses an IIFE to solve the problem. He created a function that gave him access to i by passing it as a parameter, recieving it and using it inside of the callback function.

for(var i=0; i < array.length; i++) {
  (function(closureI) {
  setTimeout(function() {
    console.log('I am at index ' + array[closureI])
  }, 3000)
  })(i)
}

