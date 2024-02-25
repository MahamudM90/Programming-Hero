// variables are containers for data storing

// js variables decleared 4 ways:
//1. automatically
//2. using var
//3. using let
//4. using const

x= 5; // all are undecleared variables
y= 10;
z= x+y

//using var
var x=5;
var y=10;
var z= x+y;

//using let
let x=5;
var y=10;
var z= x+y;

//using const 
const x=5;
const y=10;
const z=x+y;

// mixed example
const x=5;
const y=10;
let z= x+y;

// when to use in var,let,const
//1. always decleare variables
//2. always use const should not changed the value
//3. always use let can't use const
//4. var uses in old browser supporting

// js identifiers
// All js variables are identified in unique names and these unique name called identifiers

// Disscussion about var&let&const

//1. Let
 //The let keyword was introduced in ES6 (2015)
 //Variables declared with let have Block Scope
 //Variables declared with let must be Declared before use
 //Variables declared with let cannot be Redeclared in the same scope

 // block scope
 {
    let x = 2;
  }
  // x can NOT be used here

  // Global Scope
  {
    var x= 3;
  }
  // x can be used here

  //Let can not redeclared
  let x ='mahamud'
  let x =0; // error taken

  // var can be redeclared
  var x= 'mahamud'
  var x= 0; // no error has given

  // Redeclaring a variable using the var can impose problems
  // Redeclaring variable inside a block will also redeclare the variable outside the block

  var x= 10;
  // here x is 10
  {
    var x= 2;
    // here x is 2
  }
  // here x is 2

  //Redeclaring a variable using the let keyword can solve this problem.
  //Redeclaring a variable inside a block will not redeclare the variable outside the block:

  let x= 10;
  // here x is 10
  {
    let x=2;
    // here x is 2
  }
  // here x is 10

  // Redeclaring
  // Redeclaring a JavaScript variable with var is allowed anywhere in a program:

 var x= 3;
 // x is =3
 var x= 5;
 // x is =5

 // With let, redeclaring a variable in the same block is NOT allowed:

 var x= 3; // allowed
 let x= 2; // not allowed
{
 let x=5; // allowed
 let x=3; // not allowed
}
{
    let x=5; // allowed
    var x=6;// not allowed
}

//Redeclaring a variable with let, in another block, IS allowed:
let x=2; // allowed

{
    let x=5; // allowed
}

{
    let x=4; // allowed
}

// var can hosited and let don't be hoisted

carName='volvo'
var carName;

// When using let for hoisting
carName='BMW'
let carName; // Reference Error 

// Discussion about const

// 1. Variables defined with const cannot be Redeclared
// 2. Variables defined with const cannot be Reassigned
// 3. Variables defined with const have Block Scope

// when use it in js
// A new Array
// A new Object
// A new Function
// A new RegExp


const cars = ['saab','volvo','bmw'] //const array
cars[0]='Toyato' //change an element
cars.push('honda') //add an element

// Reassign Array is not possible
 const cars = ['sab', 'volvo', 'bmw']
 cars =['honda','bike'] // error

 //constant objects
 const car = {type:"Fiat", model:"500", color:"white"}; // const objects
 car.color = 'red'; // can change property
 car.owner = 'mahamud' // add property

 // Reassign is not possible objects
 car={type:'Fiat', model:'100', color:'red'} // error


// Block Scope

const x=10;
//here x is 10

{
  const x=2;
  // here x is 2
}

//here x is 10

var x=2; //allowed
var x=3; //allowed
x =4; //allowed

var x =2;//allowed
const x=2;//not allowed

{
  let x=2; // allowed
  const x=2; // not allowed
}

{
  const x=2; // allowed
  const x=2; // not allowed
} 


const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

// Redeclaring a variable with const, in another scope, or in another block, is allowed:
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

// Hoisting
carName='BMW'
var carName; // not error

// By using let
carName='volvo'
let carName; // reference error