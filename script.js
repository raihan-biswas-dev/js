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

/*
//includes method


let myNumber = [34, 22, 43, 56, 78, 91, 18];

let findingItem = myNumber.includes(13);
document.write(findingItem);



let myNumber = [34, 22, 43, 56, 78, 91, 18];

let sortData = myNumber.sort().reverse();

document.write(sortData);

//Slice Method

let myNumber = [34, 22, 43, 56, 78, 91, 18];

let sliceArr = myNumber.slice(2, 6);
document.write(sliceArr);


*/

/*

// Splice Method

// array.splice(index, removeContent, item);

let myNumber = [34, 22, 43, 56, 78, 91, 18];
// array.splice(index, removeContent, item);
myNumber.splice(0, 0, 10);
document.write(myNumber);

*/

// String Method

// let country = "Bangladesh";
// document.write(country.charAt(8));

// let country1 = "BanglaBdesh";
// let country2 = "Pakistan";
// document.write(country1.concat(" " + country2));
// document.write(country1.indexOf("a"));
// document.write(country1.lastIndexOf("a"));
// document.write(country1.replace("desh", "DESHI"));
// document.write(country1.substr(6, 4));
// document.write(country1.substring(6, 11));
// document.write(country1.substring(6, 11));

// let country1 = "     BanglaBdesh    ";
// console.log(country1.length);
// let country2 = country1.trim();
// console.log(country2.length);

// Date method

/*
let myDate = new Date();

document.write(myDate.getMinutes());


*/

// console.dir(Math.pow(10, 2));
// console.dir(Math.floor(10.92));
// // console.dir(Math.PI);

// let numbers = [4, 6, 3, 8, 9, 1, 3, 7];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// console.log(Math.floor(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));

// let numbers = [7];

// console.log(Math.sign(...numbers));
// console.log(Date.now());

// console.dir(Date());

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleTimeString(`bn-BD`));

// Window Object
/*

function objAlert() {
  alert("site is not ready");
}

function objConfirm() {
  let result = confirm("so you agree with this terms and conditions?");
  document.write(result);
}

function objPrompt() {
  let result = prompt("what is your name?");
  document.write(result);
}

function objOpen() {
  open();
}
function objClose() {
  close();
}

setTimeout(function () {
  alert("after 10 sec");
}, 10000);
*/

// Navigator Object

/*
let appCodeName = navigator.appCodeName;
let appName = navigator.appName;
let appVersion = navigator.appVersion;
let cookieEnabled = navigator.cookieEnabled;
let geolocation = navigator.geolocation;
let language = navigator.language;
let onLine = navigator.onLine;
let platform = navigator.platform;
let product = navigator.product;
let userAgent = navigator.userAgent;
let javaAna = navigator.javaEnabled();

document.write(appCodeName + "<br>");
document.write(appName + "<br>");
document.write(appVersion + "<br>");
document.write(cookieEnabled + "<br>");
document.write(geolocation + "<br>");
document.write(language + "<br>");
document.write(onLine + "<br>");
document.write(platform + "<br>");
document.write(product + "<br>");
document.write(userAgent + "<br>");
document.write(javaAna + "<br>");
*/
