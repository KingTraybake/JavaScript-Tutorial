// Data Types
// Primitive Data Types: they are immutable meaning once it is created we cannot modify it
let number = 5;
console.log(number);

let string = "Pizza";
console.log(string);

let boolean = true;
console.log(boolean);

let Null = null;
console.log(Null);

let Undefined;
console.log(Undefined);

// If we try and modify the variable string we cant
// string[0] = "Y" this wont work

// Non-Primitive Data Types: they are modifiable
let array = [1, 2, 3];
console.log(array);

// We can modify this
array[0] = 2;
console.log(array);


// Numbers and Math Object
// We can use the Math Object on numbers
const PI = Math.PI;
console.log(PI);

// We can round using the Math Object
console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(PI)); // Rounds down
console.log(Math.ceil(PI)); // Rounds up

// We can find the minimum and maximum in a list of numbers
console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

// We can create random numbers
const randnum = Math.random();
console.log(rannum);
const num = Math.floor(Math.random() * 11)
console.log(num);

//Square root
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));

// Power
console.log(Math.pow(3, 2));
console.log(Math.E);

// Logarithm
console.log(Math.log(2));
console.log(Math.log(10));
console.log(Math.LN2);
console.log(Math.LN10);

// Trigonometry
Math.sin(0);
Math.sin(60);
Math.cos(0);
Math.cos(60);


// Strings
console.log("Pizza");
console.log('Pizza');
console.log(`Pizza`);

// String Concatenation
let fullname = ("Troy" + "" + "Bob");
console.log(fullname);

// Escape Sequences
console.log("I\nlike\tpizza\\and \'meat\".")

// Template Literals
let name = "Troy";
console.log(`My name is ${name}`);

//String Methods
let js = "JavaScript            ";
console.log(js.length);
console.log(js[0]);
console.log(js.toUpperCase);
console.log(js.toLowerCase);
console.log(js,substr(4, 6));
console.log(js.substring(0, 4));
console.log(js.trim());
