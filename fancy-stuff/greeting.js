const greetings = {
  en: 'Hello',
  es: 'Hola',
  zh: '你好',
}

const greeting = ({ name, langCode }) =>
  console.log(`${greetings[langCode]}, ${name}!`);


export default greeting;