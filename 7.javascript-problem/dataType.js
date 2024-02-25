//JavaScript has 8 Datatypes
//1. String
//2. Number
//3. Bigint
//4. Boolean
//5. Undefined
//6. Null
//7. Symbol
//8. Object

//The Object Datatype
//The object data type can contain:

//1. An object
//2. An array
//3. A date

//1. Strings:
let color = 'yellow';
let lastName= 'Johnson'

//2. Numbers:
let length= 16;
let weight= 7.5;

//3. Booleans:
let x= true;
let y = false;

//4. objects
const person = {firstName:'John', lastName:'Doe'}

//5. Array object:
const cars= ['preimo','volvo','BMW']

//6. Date object:
const date = new Date('2024-01-16')

//Number & String 
let z= 16+'volvo';
console.log(z);

//String & String
let w="16"+"Volvo"
console.log(w);

//number+number & string
let total= 16+4+'Volvo';
console.log(total) ;

//Dynamic
let m; //undefined
m=5;//number
m='john';//string

//js strings
//double quotes:
let carName1 = "volvo xc60";
//single quotes
let carName2 = 'volvo xc60'

// js numbers 
//with decimals
let x1= 34.00;
//without decimals
let x2= 34;

//exponential notation
let y1= 123e5;
let z1= 123e-5;

//js BigInt
let x3 = BigInt("123456789012345678901234567890");

//Booleans
let x4=5;
let y4=5;
let z4=6;
(x4==y4) // return true
(x4==z4) // return false

// js arrays
const newCars = ['Sab', 'Volvo', 'BMW'];

// js objects
const newPerson = {name:'mahamud', age:24, eyeColor:'blue'}

//js type of operator
const newPerson1 = {name:'hasan', age:24, eyeColor:'yellow'}
console.log(typeof(hasan)) // return string
console.log(typeof(24)) // return number

// js undifiend
let car2

//js empty values
let car3=''
