let n = 5;
let text = "#";
let space = " ";
for (let i = 1; i <= n; i++) {
  console.log(space.repeat(n - i) + text);
  // console.log(text.padStart(n));
  text += "#";
}
