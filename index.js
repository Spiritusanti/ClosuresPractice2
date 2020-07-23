// this currently outputs "I am at index 4" 4 times. How can we get it to output index 1, 2, 3, 4?

const array = [1, 2, 3, 4];
for(var i=0; i < array.length; i++) {
  setTimeout(function() {
    console.log('I am at index' + i)
  }, 3000)
}

// first attempt: 