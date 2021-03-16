/* 4. Conditional statements */

const personName = 'Amy';

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