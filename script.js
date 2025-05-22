// Javascript has 2 type of deta tye

// 1. Primitive deta type (Number, String, Boolean, undefined, null)

// Number
// let x = 10;

// // String
// let y = "10";

// // Boolean
// let isTrue = true;
// let isFalse = false;

// // Undefined
// let someThing;

// // null
// let kicuEkta = null;

// 2. None Primitive deta type

// let myName = "How" + " " + "are you?";

// let welcomeMessage = "Hello" + " " + myName;

// console.log(welcomeMessage);

// let a = 12;
// let b = 4;

// let c = a + b;

// document.getElementById("display").innerHTML = c;

// let x = 6;
// let y = 3;

// // x += y; // X = X + Y

// //x -= y; // X = X - Y

// //x *= y; // X = X * Y

// //x /= y; // X = X / Y

// //x %= y; // X = X % Y
// //x **= y; // X = X ** Y

// x ^= y; // X = X ^ Y

// document.write(x);

/*
let marks = 55;

if (marks >= 80) {
  document.write("A+");
} else if (marks < 80 && marks >= 70) {
  document.write("A");
} else if (marks <= 70 && marks > 60) {
  document.write("A-");
} else if (marks <= 60 && marks > 50) {
  document.write("B");
} else if (marks <= 50 && marks > 40) {
  document.write("B");
} else if (marks <= 40 && marks >= 33) {
  document.write("D");
} else if (marks < 33) {
  document.write("'F' You are fail");
}

*/

/*

let marks = 50;

switch (true) {
  case marks <= 100 && marks >= 80:
    document.write("A+");
    break;
  case marks < 80 && marks >= 70:
    document.write("A");
    break;
  case marks < 70 && marks >= 60:
    document.write("A-");
    break;
  case marks < 60 && marks >= 50:
    document.write("B");
    break;
  case marks < 50 && marks >= 40:
    document.write("C");
    break;
  case marks < 40 && marks >= 33:
    document.write("D");
    break;

  default:
    document.write("F You are Fail");
}

*/

/*

// for loop  (==) Only compare value but (===) compare value and data type both



for (i = 0; i < 10; i++) {
  if (i == 5 || i == 7) {
    continue;
  }
  document.write(i + "<button>CLick Me!</button> </br>");
}

*/

//for loop
/*
for (i = 0; i < 10; i++) {
  document.write(i + "Number count <br>");
}

*/

//while loop

/*
let i = 0;
while (i < 10) {
  document.write("while loop" + i + "Number count <br>");
  i++;
}



// do while loop


let i = 0;

do {
  document.write("Do while loop" + i + "Number count <br>");
  i++;
} while (i < 10);



let i = 0;

while (i < 10) {
  document.write(i + "<button>CLick Me!</button> </br>");
  i++;
}

//While loop

let kotoBar = 0;

while (kotoBar < 10) {
  document.write(kotoBar + "kane Dhore Utbosh korar hoiace <br>");
  kotoBar++;
}

let kotoBar = 0;
do {
  document.write(kotoBar + "kane Dhore Utbosh korar hoiace <br>");
  kotoBar++;
} while (kotoBar < 10);

/*
// Function

function addNumber() {
  let a = 10;
  let b = 20;
  let c = a + b;
  document.write(c + "<br>");
}
addNumber();




// Function Parameter

function addNumber(a, b) {
  let c = a + b;
  document.write(c + "<br>");
}
addNumber(13, 7);



function addNew(n1, n2) {
  return n1 + n2;
}

addNew(4, 5);



//5
//Continue

for (i = 0; i < 10; i++) {
  if (i === 5) {
    document.write("I is skipped");
    continue;
  }
  document.write(`<br> i is now at : ` + i);
}



//6 Array : you can declear array by using 2 types like
//1

let arrayName = new Array("Apple", "Banana", "Mango", "Orange");
console.log(arrayName);

//2
let anotherArr = ["Apple", "Banana", "Mango", "Orange"];
anotherArr[3] = "Papiya";
console.log(anotherArr);
console.log(anotherArr.length);
console.log(anotherArr["length"]);
console.log(anotherArr[3]);



//2
let anotherArr = ["Apple", "Banana", "Mango", "Orange"];

for (i = 0; i < anotherArr.length; i++) {
  document.write(i + "=" + anotherArr[i] + `<br>`);
}



// let arrName = ["Apple", "Banana", "Mango", "Orange"];

let newArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

spliceArry = newArry.splice(3);
console.log(newArry);
console.log(spliceArry);



function sumMachine(a, b) {
  let sum = a + b;
  return sum;
}

let myResult = sumMachine(2, 4);
console.log(myResult);

function printMyName(name, age) {
  console.log(`my name is : ` + name + ` and I am ` + age + ` years old`);
}
printMyName("Raihan", 28);


*/

/*
// For in loop in array

let category = ["electronic", "Fruits", "Cloath", "Shoes", "Books"];

for (let item in category) {
  document.write(category[item] + "<br>");
}

*/

/*

// For In loop in Object

let person = {
  name: "raihan",
  age: 28,
  city: "jashore",
  designation: "web developer",
};

for (let item in person) {
  document.write(person[item] + "<br>");
}

*/

/*
// Concate

let arry1 = [1, 2, 3, 4];
let arry2 = [5, 6, 7, 8];

let newarr = arry1.concat(arry2);
document.write(newarr);

*/

/*
// Array From Method

let nameArr = "MD RAIHAN BISWAS";

let n = Array.from(nameArr);
document.write(n[6]);

*/

/*

// Filter method

let numbers = [12, 45, 67, 89, 74, 16, 92, 37, 57, 43, 10];

let results = numbers.filter(function (item) {
  return item > 60;
});

document.write(results);

*/

/*
// Array find and find index method

let myNumber = [34, 22, 43, 56, 78, 91, 18];

let results = myNumber.find(function (value) {
  return value < 30;
});

document.write(results);

*/

/*
let myNumber = [34, 22, 43, 56, 78, 91, 18];

let results = myNumber.forEach(function (item) {
  document.write(item + "<br>");
});

*/

let myNumber = [34, 22, 43, 56, 78, 91, 18];

let findingItem = myNumber.includes(13);
document.write(findingItem);
