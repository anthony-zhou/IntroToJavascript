

/* 2. Data Types */
const num = 5;
const otherNum = 6;
console.log(num * otherNum);
console.log(num + otherNum);

// What happens here?
console.log(personName + num);


/* 3. Functions */ 
function greeting(name) {
  console.log('Hello, ' + name);
}

greeting('Amy')
greeting(otherName);
greeting(thirdName);

/* 4. Conditional statements */
function intlGreeting(name, lang) {
  if (lang === 'en') {
    console.log('Hello, ' + name)
  } else if (lang === 'es') {
    console.log('Hola, ' + name)
  } else {
    console.log(`Language code '${lang}' is not supported`)
  }
}

intlGreeting('Amy', 'en');
intlGreeting('Davis', 'es');
intlGreeting('James', 'cn');


