var numbers = [1,2,3,4,5,6,7,8,9,10]

var result = numbers.findIndex((currentValue, index, array)=>{
    return !(currentValue % 2)
})

console.log(result);