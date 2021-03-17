// 1. var

var x = 5;
var x = 6; // valid
console.log('var x = ' + x);

// var is function-scoped

function add(x) {
  var x = 5; // This is its own thing
  return x + 5;
}

console.log('var x does not get re-declared from within a function');
add(x);
console.log(x);

// But var is not block-scoped!!
console.log('var x does get re-declared from within an if statement');
if (x < 10) {
  var x = 11; // this re-declares the global x variable
  x++;
}

console.log(x);

// 2. let

let y = 6;
// this causes a syntax error, because y can't be re-declared in the same scope
// let y = 5;
console.log('\nlet y = ' + y);

console.log('let y does not get re-declared from within a function');
function subtract(n) {
  let y = 5;  // This is still its own thing
  return y + 5;
}

subtract(y);
console.log(y);

// let IS block-scoped!!
console.log('let y does not get re-declared from within a block');

if (y < 10) {
  let y = 11; // This is its own thing
  y++;
}

console.log(y);

// 3. const

const z = 7;
console.log('\nconst z = ' + z);

console.log('Trying to update a const variable...')
// z = 5; // Not allowed! Will throw a runtime error.



/* GOOD EXAMPLES */

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.example.com'
  : 'http://localhost:8000';


let dbName = '';
if (process.env.NODE_ENV = 'test') {
  dbName = 'mydatabase-test';
} else {
  dbName = 'mydatabase-prod'
}

// Used in a loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Or, if you're allergic to for loops
[...Array(10).keys()].forEach((x) => console.log(x))