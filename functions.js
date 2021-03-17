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

const f = function(x) {
  return x + 5;
}

// Another way to define a function
const g = (x) => 5 * x;

const h = (x) => 3 * (x ** 2) + 5 * x + 3;

function longformDerivative(f) {
  return function(x) {
    const h = 0.00000000001;
    const deriv = (f(x + h) - f(x)) / h;
    return deriv.toFixed(2);
  }
}

const nonComposedDerivative = (f, x) => {
  const h = 0.00000000001;
  const deriv = (f(x + h) - f(x)) / h;
  return deriv.toFixed(2);
}

// which is the same as...
const derivative = (f) => (x) => {
  const h = 0.00000000001;
  const deriv = (f(x + h) - f(x)) / h;
  return deriv.toFixed(2);
}

console.log(`Derivative of x + 5 at x = 5 is ${derivative(f)(5)}`)
console.log(`Derivative of x * 5 at x = 5 is ${longformDerivative(g)(5)}`)
console.log(`Derivative of 3x^2 + 5x + 3 at x = 5 is ${nonComposedDerivative(h, 5)}`)
