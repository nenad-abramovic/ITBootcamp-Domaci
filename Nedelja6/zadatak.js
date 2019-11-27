const form = document.querySelector('#login');
const msg = document.querySelector('#txt-msg');

let korisnici;
fetch('korisnici.json')
  .then(response => response.json())
  .then(json => korisnici = json);

form.addEventListener('submit', (e) => {
  let username = e.target.username.value;
  let password = e.target.password.value;

  let test = korisnici.some(user => user.username == username && user.password == password);

  msg.textContent = test ? "Logged In" : "Invalid Username or Password";

  e.preventDefault();
});

/*
 * Oво би смо са Backend-ом урадили тако што би смо
 * информације из форме послали (fetch) у body-ју
 * HTTP POST захтева на Backend где би се вероватно
 * на исти или сличан начин као изнад проверило да
 * ли послати подаци постоје у JSON фајлу или бази.
 * На основу провере би нам Backend вратио true/false
 * који би смо ми након тога (then) обрадили.
 */