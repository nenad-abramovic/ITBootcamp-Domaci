<<<<<<< HEAD
let text;
for (let i = 1; i <= 100; i++) {
  text = "";
  text += i % 3 ? i % 5 ? i : "Buzz" : i % 5 ? "Fizz" : "FizzBuzz";
  // if (i % 3 === 0) {
  //   text += "Fizz";
  //   if (i % 5 === 0) {
  //     text += "Buzz";
  //   }
  // } else if (i % 5 === 0) {
  //   text += "Buzz";
  // } else {
  //   text += i;
  // }
  console.log(text);
}
=======
for(let i = 1; i <= 100; i++){
    let ispis = '';
    if(i % 3 == 0 ) 
        ispis += 'Fizz';
    if(i % 5 == 0) 
        ispis += 'Buzz';
    if(i % 7 == 0)
        ispis += 'Zazz';
    if(i % 13 == 0)
        ispis += 'Pezz';

    if(ispis == '') 
        ispis = i;
    console.log(ispis)
}

>>>>>>> 5fdc75645131d0ba2f1c8edb690b04e9d87b67ec
