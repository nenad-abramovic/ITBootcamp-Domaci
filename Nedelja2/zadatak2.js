{
  let headingText = "Welcome to DOM";
  const headingElement = document.getElementById("heading");

  headingElement.innerHTML = headingText;

  let paragraphForDiv =
    "Изнад овог параграфа се налази наслов, а испод прва форма на страници.";
  const divElement = document.getElementById("divForParagraph");

  divElement.innerHTML = `<p>${paragraphForDiv}</p>`;
}
