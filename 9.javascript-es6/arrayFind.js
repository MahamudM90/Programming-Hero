var numbers = [1,2,3,4,5,6,10]

var result = numbers.find(function(currentValue, currentIndex, array){
    return currentValue > 4
})

console.log(result);

// output: 5

// Main array will be not change