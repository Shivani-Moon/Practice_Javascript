let score = "hello";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber);

//when we convert "33" => 33 ---can be done
//when we convert "33abc" => NaN(Not a Number)
// true => 1; false => 0;

let isLoggedIn = "Hello";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "Hello" => true;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

//*******************************************OPERATIONS************************************************/
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32


console.log(true);
console.log(-true);
console.log(+true);
console.log(+""); // It is not a good practice and should not be done

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);







