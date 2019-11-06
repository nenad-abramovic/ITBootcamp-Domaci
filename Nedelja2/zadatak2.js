<<<<<<< HEAD
let headingText = "Welcome to DOM";
const headingElement = document.getElementById("heading");

headingElement.innerHTML = headingText;

let paragraphForDiv =
  "Изнад овог параграфа се налази наслов, а испод прва форма на страници.";
const divElement = document.getElementById("divForParagraph");

divElement.innerHTML = `<p>${paragraphForDiv}</p>`;
=======
var text = 'Welcome to DOM';

const header = document.getElementById('section-head');
header.innerHTML = text;

let paragraph = 'Hello, how are you doing today?';

const container = document.getElementById('container');
container.innerHTML = `<p>${paragraph}</p>`;
>>>>>>> 5fdc75645131d0ba2f1c8edb690b04e9d87b67ec
