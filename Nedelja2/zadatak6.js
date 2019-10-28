{
  let text;
  for (let i = 1; i <= 100; i++) {
    text = "";
    if (i % 3 == 0) {
      text += "Fizz";
      if (i % 5 == 0) {
        text += "Buzz";
      }
    } else if (i % 5 == 0) {
      text += "Buzz";
    } else {
      text += i;
    }
    console.log(text);
  }
}
