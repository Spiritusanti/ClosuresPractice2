// this currently outputs "I am at index 4" 4 times. How can we get it to output index 1, 2, 3, 4? --> we also know there are two possible solutions.

const array = [1, 2, 3, 4];
// for(var i=0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at index' + i)
//   }, 3000)
// }

// first attempt: So the console.log is within the setTimeout function so it is sent off to the API. The callstack clears and when the timeout ends we get a call back and the output is returned..., I think.

// what if we store the value of i outside of the setTimeout function?

for(var i=0; i < array.length; i++) {
  counter = i
  setTimeout(function() {
    console.log('I am at index' + counter)
  }, 3000)
}

// output from this logs "I am at index 3" so at least now we are logging the correct length of the array index.