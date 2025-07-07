console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===
console.log("2" === 2);


//Summary of Datatypes

//Javascript is dynamically typed language

//Primitive Data Type---------7 Types-----call by value
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. symbol
//7. Bigint


const score = 100;  //-----number datatype
const scoreValue = 100.3; //-----number datatype

const isLoggedIn = false;  //-----boolean datatype
const outsideTemp = null;  //-----null datatype
let userEmail;             //-----undefined datatype

const id = Symbol('123')   //-----symbol datatype
const anotherId = Symbol('123')  //----symbol datatype
console.log("************************************");
console.log(id === anotherId); //----it gives the output false because as we give datatype symbol it treat the data unique if the entered data is same then also

const bigNumber = 3698746541545845684254n //-----Bigint datatype

//Non-Primitive(Reference) Data Type------call by reference

//1.Array
//2.Objects
//3.Functions

const fruits = ["Banana", "Watermelon", "Papaya", "Mango"] //Array

const obj = {
    name: "Shivani",
    age: 24
}                  // Object

const myFunction = function(){
    console.log("Hello World");
}                 //function


console.log(typeof outsideTemp);


//*****************************************************************************/

//Stack(Primitive), Heap(Non-Primitive)


//STACK
let myYoutubename = "xyz";

let anothername = myYoutubename;

anothername = "codeinJS";
console.log(anothername);
console.log(myYoutubename);

//HEAP

let userOne = {
    email: "user@google.com",
    id: 1,
}

 let userTwo = userOne;

 userTwo.email = "coder@google.com";

console.log(userOne.email);
console.log(userTwo.email); 