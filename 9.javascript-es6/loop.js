// for loop, for in, for of

for (let i=0; i<=5; i++){
    console.log(i);
}

// for in

const myObj ={
    name:'javascript',
    estd:'1995',
    founder:'Brendan Eich'
}

for(property in myObj){
    console.log(property);
}

//Output: name,estd,founder

// for of 

const myArray = [1,2,3,4,5]

for (element of myArray){
    console.log(element)
}

// Output: 1,2,3,4,5

const myArray2 = [4,5,6,6,7]

for (element in myArray2){
    console.log(element);

}

// Output: 0,1,2,3,4 give index of array