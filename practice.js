let list = "77";
console.log(list);

console.log(typeof(list))

let str = 50;
console.log(str)

console.log(typeof(str))

// use logical operators to find th age of person lies between 10 and 20

let age = 15;

if (age >= 10 && age <= 20) {
  console.log("The age is between 10 and 20.");
} else {
  console.log("The age is NOT between 10 and 20.");
}

// demonstrates the use of switch case statements

let day = 2;

switch(day){
    case 1:
        console.log("Sunday");
        break;

        case 2:
            console.log("Monday");
            break;

            case 3:
                console.log("Tuesday");
                break;

                case 4:
                    console.log("Wednesday");
                    break;

                    case 5:
                        console.log("Thursday");
                        break;

                        case 6:
                            console.log("Friday")
                            break;

                            case 7:
                                console.log("Saturday")
                                break;

                                default:
                                    console.log("Invalid Day");
}


// Number is divisible by both 2 and 3

let num = 6;

if(num % 2 == 0 && num % 3 == 0){
    console.log("Number is divisible by 2 and 3")
}

else{
    console.log("Number is not divisible");
}

// Number is divisible by either 2 or 3

let number = 15;

if(number % 2 == 0 || number % 3 == 0){
    console.log("Number is divisible");
}

// print you can drive or you cannot based on age using ternary operator

let Age = 19;

let result = (Age > 18) ? "You can Drive" : "You cannot Drive";

console.log(result);

// for loop
let m = 5;
for(i = 0;  i <= m; i++){
    console.log(i);
}

// for in loop

marks = {
    science: 90,
    maths: 82,
    english: 75,
    history: 88
}

for(x in marks){
    console.log(x);
}

obj = {Kavya: 98, Lata: 70, Rohan: 7}
for(y in obj){
    console.log(obj[y]);
}

// do while loop
let X = 5;
do{
    console.log("Try Again");
}
while(X == 10){
    console.log("Success");
}


let name = "Harry";
console.log("har\"".length);

// convert string to lowercase

let name1 = "HARRY";
let name2 = "Harry";

let newname1 = name1.toLowerCase();
let newname2 = name2.toLowerCase();

console.log(newname1);
console.log(newname2);

// Extract teh amount out of this string   "Please give Rs 1000"

let str1 = "Please give Rs 1000";

console.log(str1.includes(1000));
console.log(str1.slice(15));
