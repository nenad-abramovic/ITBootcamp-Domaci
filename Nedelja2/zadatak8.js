{
  let n = 5;
  let text = "";
  for (let i = 1; i <= n; i++) {
    text += "#";
    console.log(text.padStart(n, " "));
  }
}
