/* 3. Functions */ 
const personObject = {
  name: 'Jacob',
  age: 14,
}
const otherName = 'Marco'

function greeting(name) {
  console.log('Hello, ' + name);
}

greeting('Amy')
greeting(personObject.name);
greeting(otherName);

// Functions are variables too??

const f = function (x) {
  return x + 5;
}

function printFunctionOutput(func, num) {
  console.log(func(num))
}

printFunctionOutput(f, 5)