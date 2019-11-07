function divisibleByFive(arr) {
  // console.log('->', arr.filter(x => x % 5 == 0).join(','));
  for (let element of arr) {
    if (element % 5 === 0) console.log(element);
  }
}

divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]) // Исписује -> 5,10,15,5

function lifeSupply(numPerMonth, age) {
  return (100 - age) * 12 * numPerMonth;
}

lifeSupply(10, 26) // Враћа 8880
console.log(lifeSupply(10, 26)) // Исписује 8880
