let n = 5;
let text = "#";
for (let i = 1; i <= n; i++) {
  console.log(text);
  text = text.replace("#", "##");
  // text += "#";
}
