var text = 'Welcome to DOM';

const header = document.getElementById('section-head');
header.innerHTML = text;

let paragraph = 'Hello, how are you doing today?';

const container = document.getElementById('container');
container.innerHTML = `<p>${paragraph}</p>`;