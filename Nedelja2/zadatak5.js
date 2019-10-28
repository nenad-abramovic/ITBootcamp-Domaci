{
  let price = 100;
  let diameter = 32;
  let pricePerSquareCm = price / ((diameter ** 2 * Math.PI) / 4);

  console.log(`Цена пице по цм² је ${pricePerSquareCm} динара.`);
}
