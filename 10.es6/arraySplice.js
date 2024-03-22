var numbers = [1,2,3,4,5]

var result = numbers.splice(1,2,10,12,13,19)

console.log(numbers);

// Output: [1,10,12,13,19,4,5]

// main array will be change 

// if console.log(result)

// output: [2,3]