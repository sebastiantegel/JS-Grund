function start() {
  alert("Start");
}

// alert("Hello world");

// confirm("Är du säker");

let firstname = "Sebastian";
// alert(name);
console.log("Värdet på name:", firstname);

let positionOfLastA = firstname.lastIndexOf("a");
console.log("Position of last a:", positionOfLastA);

// console.log(firstname[7]); Samma sak som raden under
console.log(firstname[positionOfLastA]);

let age = 42; // number
let isMarried = true; // boolean
console.log(isMarried);

age = age + 1;
age += 1;
age++;

console.log("Ålder:", age);

let calculation = age % 2;
console.log("Result of calculation:", calculation);
