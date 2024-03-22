// Normal Function 

function number(){
    return 10;
}

const result=number();

console.log(result)

// Arrow Function

let numberArrow=()=> 20;

console.log(numberArrow());

// multiple parameter

let number=(a,b)=>{
    return a+b;

}

const finalOutput = number(7,8)
console.log(finalOutput);